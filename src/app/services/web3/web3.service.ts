import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { EmitService } from '../emit/emit.service';
import { ComputedService } from '../computed/computed.service';
import { LEND_ABI } from '../../common/abis';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { fromEvent } from 'rxjs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { Subscription } from 'rxjs/internal/Subscription';
import { IRandom, ISignData, ITransSign } from '../../common/interfaces';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service implements OnDestroy {
  // 账号未连接 外部组件可以监听到此值变化
  private readonly noConnect$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  get noConnect(): boolean {
    return this.noConnect$.getValue();
  }
  set noConnect(val: boolean) {
    this.noConnect$.next(val);
  }
  // 当前网络环境 外部组件可以监听到此值变化
  public readonly network$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  get network(): number {
    return this.network$.getValue();
  }
  set network(val: number) {
    this.network$.next(val);
  }
  // 当前网络是否拥挤 外部组件可以监听到此值变化
  public readonly isCongest$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  get isCongest(): boolean {
    return this.isCongest$.getValue();
  }
  set isCongest(val: boolean) {
    this.isCongest$.next(val);
  }

  // 用户账号 外部组件可以监听到userAccount变化；可以订阅userAccount$
  public userAccount$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  get userAccount(): string {
    return this.userAccount$.getValue();
  }
  set userAccount(val: string) {
    this.userAccount$.next(val);
  }
  // 账号eth余额 外部组件可以监听到此值变化
  private readonly ethBalance$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  get ethBalance(): string {
    return this.ethBalance$.getValue();
  }
  set ethBalance(val: string) {
    this.ethBalance$.next(val);
  }
  // 账号comp代币余额 外部组件可以监听到此值变化
  public readonly compBalance$: BehaviorSubject<string> =
    new BehaviorSubject<string>('0.0000');
  get compBalance(): string {
    return this.compBalance$.getValue();
  }
  set compBalance(val: string) {
    this.compBalance$.next(val);
  }
  // 未领取的comp代币余额 外部组件可以监听到此值变化
  public readonly unclaimedCompBalance$: BehaviorSubject<string> =
    new BehaviorSubject<string>('0.0000');
  get unclaimedCompBalance(): string {
    return this.unclaimedCompBalance$.getValue();
  }
  set unclaimedCompBalance(val: string) {
    this.unclaimedCompBalance$.next(val);
  }
  // comp代币对应的美元价格 外部组件可以监听到此值变化
  public readonly compToUsd$: BehaviorSubject<string> =
    new BehaviorSubject<string>('0.0000');
  get compToUsd(): string {
    return this.compToUsd$.getValue();
  }
  set compToUsd(val: string) {
    this.compToUsd$.next(val);
  }
  // 存款余额 外部组件可以监听到此值变化
  public readonly supplyBalance$: BehaviorSubject<string> =
    new BehaviorSubject<string>('0');
  get supplyBalance(): string {
    return this.supplyBalance$.getValue();
  }
  set supplyBalance(val: string) {
    this.supplyBalance$.next(val);
  }
  // 借贷余额 外部组件可以监听到此值变化
  public readonly borrowBalance$: BehaviorSubject<string> =
    new BehaviorSubject<string>('0');
  get borrowBalance(): string {
    return this.borrowBalance$.getValue();
  }
  set borrowBalance(val: string) {
    this.borrowBalance$.next(val);
  }
  // 净APY 外部组件可以监听到此值变化
  public readonly netAPY$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  get netAPY(): string | null {
    return this.netAPY$.getValue();
  }
  set netAPY(val: string | null) {
    this.netAPY$.next(val);
  }
  // 借入限额 外部组件可以监听到此值变化
  public readonly borrowLimit$: BehaviorSubject<string> =
    new BehaviorSubject<string>('0.00');
  get borrowLimit(): string {
    return this.borrowLimit$.getValue();
  }
  set borrowLimit(val: string) {
    this.borrowLimit$.next(val);
  }
  // 借入限额百分数 外部组件可以监听到此值变化
  public readonly borrowLimitPercent$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  get borrowLimitPercent(): number {
    return this.borrowLimitPercent$.getValue();
  }
  set borrowLimitPercent(val: number) {
    this.borrowLimitPercent$.next(val);
  }

  public web3: any;
  // web3初始化是否完成
  public web3Ready: boolean = false;
  // 是否未安装metamask;
  public noMetamask: boolean = false;
  // 所有网络列表
  public networks: number[] = [1, 3, 4, 5, 42];
  // 所有网络对应的合约地址
  public addresses: { [key: number]: string } = {
    1: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    3: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    4: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    5: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    42: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  };
  // 合约地址
  public lendFactoryAddress!: string;
  // 合约类
  public lendFactoryContract!: Contract;
  private accountSubscription!: Subscription;
  private chainSubscription!: Subscription;

  constructor(
    private emitService: EmitService,
    public computed: ComputedService,
    private ngZone: NgZone
  ) {
    this.bootstrapWeb3().then(() => {
      if (!this.web3) {
        return;
      }
      this.waitWeb3Ready().then(() => {
        this.initLendContract();
      });
    });
  }
  ngOnDestroy(): void {
    if (this.accountSubscription) {
      this.accountSubscription.unsubscribe();
    }
    if (this.chainSubscription) {
      this.chainSubscription.unsubscribe();
    }
  }

  // 初始化web3
  public async bootstrapWeb3(): Promise<void> {
    // 检查metamask状态
    if (!window.ethereum) {
      // 未安装Metamask
      this.noMetamask = true;
      return;
    }

    // 监听账号切换事件
    this.accountSubscription = fromEvent<string[]>(
      window.ethereum,
      'accountsChanged'
    ).subscribe((account: string[]) => {
      this.ngZone.run(async () => {
        if (account.length === 0) {
          this.noConnect = true;
          this.userAccount = '';
          this.network = 0;
          return;
        }
        await this.connectMetamask();
        this.emitService.eventEmit.emit({ type: 'account-changed' });
      });
    });
    // 监听网络切换事件
    this.chainSubscription = fromEvent<string>(
      window.ethereum,
      'chainChanged'
    ).subscribe((chainId: string) => {
      this.ngZone.run(async () => {
        this.network = parseInt(chainId, 16);
        this.lendFactoryContract = null as unknown as Contract;
        this.emitService.eventEmit.emit({
          type: 'network-changed',
          value: this.network,
        });
        await this.connectMetamask();
        await this.initLendContract();
      });
    });
    // 检查Metamask是否连接
    this.web3 = new Web3(window.ethereum);
    const accounts: string[] = await window.ethereum.request({
      method: 'eth_accounts',
    });
    if (accounts.length === 0) {
      this.noConnect = true;
      return;
    }
    await this.connectMetamask();
  }

  // 请求连接钱包，返回账号
  public async connectMetamask(): Promise<void> {
    this.web3Ready = false;
    const accounts: string[] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    this.userAccount = this.toEip55(accounts[0]);
    this.noConnect = false;
    await this.getNetwork();
    this.lendFactoryAddress = this.addresses[this.network] ?? '';
    // 获取eth余额
    this.web3Ready = true;
    await this.getEthBalance();
    // 获取借贷信息
    this.getLendBalance();
  }
  // 初始化合约
  private initLendContract(): void {
    this.lendFactoryContract = null as unknown as Contract;
    try {
      // 初始化工厂合约
      this.lendFactoryContract = new this.web3.eth.Contract(
        LEND_ABI,
        this.lendFactoryAddress
      );
    } catch (e) {
      console.log('web3 init error', e);
    }
  }

  // 轮询web3是否初始化完毕
  public waitWeb3Ready(): Promise<void> {
    return new Promise((resolve: () => void) => {
      const timer: NodeJS.Timeout = setInterval(async () => {
        if (this.web3Ready) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  }
  // 轮询工厂合约是否初始化完毕
  public waitLendFactoryContractReady(): Promise<void> {
    return new Promise((resolve: () => void) => {
      const timer: NodeJS.Timeout = setInterval(async () => {
        if (this.lendFactoryContract) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  }
  // 获取当前网络id
  private async getNetwork(): Promise<void> {
    // 当前网络环境
    this.network = Number(await window.ethereum.networkVersion);
  }

  // 获取Eth余额
  public async getEthBalance(): Promise<string> {
    const balance: string = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [this.userAccount, 'latest'],
    });
    this.ethBalance = String(parseInt(balance, 16));
    return this.ethBalance;
  }

  // 获取当前用户借贷信息
  getLendBalance(): void {
    // comp代币余额
    this.compBalance = '0.606812';
    // 未领取的comp代币余额
    this.unclaimedCompBalance = '0.006512';
    // comp对应的美元价格
    this.compToUsd = '350.00';
    // 存款余额
    this.supplyBalance = '0.32269861';
    // 借款余额
    this.borrowBalance = '0.02538042';
    // 净APY
    this.netAPY = '-73.63%';
    // 借入限额
    this.borrowLimit = '0.19';
    // 借入限额百分数
    this.borrowLimitPercent = 13;
  }
  // 通用随机数签名
  public async prepareRandomSignTypedData(
    random: IRandom
  ): Promise<ITransSign> {
    const EIP712Domain: ISignData[] = [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ];

    const Random: ISignData[] = [
      { name: 'random', type: 'uint256' },
      { name: 'explain', type: 'string' },
    ];
    const types: { EIP712Domain: ISignData[]; Random: ISignData[] } = {
      EIP712Domain,
      Random,
    };
    const primaryType: string = 'Random';
    // 签名所需数据
    const data: string = JSON.stringify({
      types,
      domain: {
        name: 'Lend Protocol',
        version: '1.0',
        chainId: this.network,
        verifyingContract: this.lendFactoryAddress,
      },
      primaryType,
      message: random,
    });
    return await this.signTypedData(data);
  }

  // 异步签名数据
  public signTypedData(data?: string): Promise<ITransSign> {
    return new Promise(
      (resolve: (value: ITransSign) => void, reject: (err: Error) => void) => {
        window.ethereum.sendAsync(
          {
            jsonrpc: '',
            method: 'eth_signTypedData_v4',
            params: [this.userAccount, data],
          },
          (err: Error, result: any) => {
            if (err) {
              reject(err);
              return console.error(err);
            }
            const signature: string = result.result.substring(2);
            const r: string = '0x' + signature.substring(0, 64);
            const s: string = '0x' + signature.substring(64, 128);
            const v: string = '0x' + signature.slice(-2);
            resolve({ r, s, v });
          }
        );
      }
    );
  }
  // 转为带大写（正常格式）的地址
  public toEip55(address: string): string {
    try {
      return this.web3.utils.toChecksumAddress(address);
    } catch (e) {
      // console.log(e);
      return '';
    }
  }
  // 提取未领取的comp
  public claimSubmit(): void {}
}
