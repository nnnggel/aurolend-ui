import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {
    this.initLang();
  }
  // 初始化语言,默认为英语
  initLang(): void {
    const currentLanguage: string =
      localStorage.getItem('aurolend-lang') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(currentLanguage);
    localStorage.setItem('aurolend-lang', currentLanguage);
  }
}
