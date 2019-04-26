import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ShowcaseHomeComponent implements OnInit {
  // 公告
  public announcement: {
    bgColor: string,
    iconText: string,
    title: string,
    author: string
  }[];
  public dwValue: any = 'test123';
  constructor() {

  }

  ngOnInit(): void {
    // 公告初始化
    this.announcement = [
      {
        'bgColor': '#15d6ba',
        'iconText': 'UX',
        'title': '【UX組公告】從今天開始連續放假七天',
        'author': '3 天前 by liuliu_Wang'
      },
      {
        'bgColor': 'rgb(255, 102, 0)',
        'iconText': '端',
        'title': '【端平台公告】加班津貼將於11/11發放',
        'author': '3 天前 by liuliu_Wang'
      },
      {
        'bgColor': 'rgb(16, 141, 233)',
        'iconText': '企',
        'title': '【企管部公告】失物招領一件，請至15樓領取',
        'author': '3 天前 by liuliu_Wang'
      },
      {
        'bgColor': 'rgb(249, 200, 6)',
        'iconText': '人',
        'title': '【人資部】下半年績效考核開始',
        'author': '3 天前 by liuliu_Wang'
      }
    ];
  }

}
