import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {BoardNotice} from '../models/models';

@Component({
  selector: 'notice-updates',
  templateUrl: './notice-updates.component.html',
  styleUrls: ['./notice-updates.component.scss']
})
export class NoticeUpdatesComponent {

  msg: string = '';
  addNotice:  FormGroup 
  noticese: BoardNotice[] = [];
  
  constructor(private fb: FormBuilder, private ApiService: ApiService, route:ActivatedRoute) { 
    this.addNotice = this.fb.group({
      noticeB: this.fb.control(''),
    });
  }

  collectNotice(){
    let n = this.NoticeB.value;

    this.ApiService.createNotice(n).subscribe({
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
    return this.addNotice.get('noticeB') as FormControl;
  }

  columnsToDisplay: string[] = [
    'id',
    'noticeB',
    'Operations'
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

  deleteNotice(item: number){
    this.noticese.splice(item-1,1)
    console.warn(this.noticese)
    this.ApiService.deleteNotice(item).subscribe((result)=>{
      console.warn(result);
    })
  }
}

