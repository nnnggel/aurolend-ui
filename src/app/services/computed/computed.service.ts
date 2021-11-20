import { Injectable } from '@angular/core';
import Big from 'big.js';
@Injectable({
  providedIn: 'root',
})
export class ComputedService {
  constructor() {
    Big.NE = -19; // 几位小数显示科学计数法
    Big.RM = 0;
    Big.PE = 80; // 几位整数显示科学计数法
  }

  // 两数相加
  public add(x: string, y: string): string {
    return Big(x).plus(Big(y)).toString();
  }
  // 两数相减
  public sub(x: string, y: string): string {
    if ((!x && x !== '0') || (!y && y !== '0')) {
      return '0';
    }
    return Big(x).minus(Big(y)).toString();
  }
  // 两数相乘
  public mul(x: string, y: string): string {
    if (!x || !y) {
      return '0';
    }
    return Big(x).times(Big(y)).toString();
  }
  // 两数相除
  public div(x: string, y: string): string {
    if (!x || !y) {
      return '0';
    }
    return Big(x).div(Big(y)).toString();
  }
  // x的y次方
  public pow(x: string, y: number): string {
    return Big(x).pow(y).toString();
  }
  // x除以10的y次方
  public divAccuracy(x: string, y: string): string {
    if (!x || !y) {
      return '0';
    }
    return this.div(x, this.pow('10', +y));
  }
  // x乘以10的y次方
  public mulAccuracy(x: string, y: string): string {
    if (!x || !y) {
      return '0';
    }
    return this.mul(x, this.pow('10', +y));
  }
  // 强制保留n位小数 去掉末尾0
  public round(x: string, n: number): string {
    if (!x) {
      x = '0';
    }
    return Big(Big(x).round(n, 0).toFixed(n)).toString();
  }

  // 将科学计数法展开成字符串
  public toString(num: number | string): string {
    return Big(num).toString();
  }
  // 绝对值
  public abs(num: string): string {
    return Big(num).abs().toString();
  }
}
