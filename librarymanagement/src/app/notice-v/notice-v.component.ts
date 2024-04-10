import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import {BoardNotice} from '../models/models';

@Component({
  selector: 'notice-v',
  templateUrl: './notice-v.component.html',
  styleUrls: ['./notice-v.component.scss'],
})
export class NoticeVComponent {
  noticese: BoardNotice[] = [];
  
  constructor(private ApiService: ApiService){}

  columnsToDisplay: string[] = [
    // 'id',
    'noticeB'
  ];

  ngOnInit(): void {
    this.ApiService.getAllNotices().subscribe({
      next: (res: BoardNotice[]) => {
        this.noticese = [];
        this.noticese = res;
      },
      error: (err: any) => console.log(err),
    });
  }
}
