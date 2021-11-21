import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs!: number[];
  @Input() tabIndex!: number; // 0:supply,1:withdraw,2:borrow,3:repay
  @Output() tabIndexChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  selectTab(item: number): void {
    // this.tabIndex = item;
    this.tabIndexChange.emit(item);
  }
}
