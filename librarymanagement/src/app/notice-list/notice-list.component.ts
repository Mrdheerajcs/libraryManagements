import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BoardNotice } from '../models/models';
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent {

  msg: string = '';
  noticese: BoardNotice[] = [];
  editNotice = new FormGroup({
    noticeB : new FormControl('')
  })
  // noticeB: any;
  

  constructor(private ApiService: ApiService, private routo: ActivatedRoute) {
  }

  updateNotices(){
        this.ApiService.updateNoticeBoard(this.routo.snapshot.params['id'],this.editNotice.value).subscribe({
      next: (res: any) => {
        this.msg = res.toString();
        setInterval(() => (this.msg = ''), 5000);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  get NoticeB(): FormControl {
    return this.editNotice.get('noticeB') as FormControl;
  }

  columnsToDisplay: string[] = [
    'id',
    'noticeB'
  ];

  // @ViewChild('id')
  // id!: ElementRef;
  // @ViewChild('noticeB')
  // noticeB!: ElementRef;
  
  // onEdit(item: number){
  //   console.log(this.noticese[item])
    // this.ApiService.getCNote(item).subscribe((result) => {
    //   console.warn(result);
    // })
  //   this.NoticeB.nativeElement.value = this.noticese[2].noticeB
  // }

  ngOnInit(item: number): void {
    this.ApiService.getAllNotices().subscribe({
      next: (res: BoardNotice[]) => {
        this.noticese = [];
        this.noticese = res;
      },
      error: (err: any) => console.log(err)
    });
    // this.ApiService.getCNote(item).subscribe((result) => {
    //   console.warn(result);
    // })
    // console.log(this.noticese[2])
    // console.log(this.routo.snapshot.params['id'])
    // this.ApiService.getCNote(this.routo.snapshot.params['id']).subscribe((result)=>{
    //   console.log(result)
    //   this.editNotice = new FormGroup({
    //     noticeB: new FormControl(result['noticeB'])
    //   })
    // })
  }

  deleteNotice(item: number) {
    this.noticese.splice(item - 1, 1)
    console.warn(this.noticese)
    this.ApiService.deleteNotice(item).subscribe((result) => {
      console.warn(result);
    })
  }
}
