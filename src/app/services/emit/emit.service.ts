import { Injectable, EventEmitter } from '@angular/core';
import { IEventEmit } from '../../common/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmitService {
  public eventEmit: EventEmitter<IEventEmit>;

  constructor() {
    // 定义发射事件
    this.eventEmit = new EventEmitter<IEventEmit>();
  }
}
