import { Component,OnInit,Input } from '@angular/core';
import { MyServiceService,WebAPITab}  from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  Getdata:WebAPITab[] = [];

  constructor(public details:MyServiceService,private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.GetAllList();
  }
  
  GetAllList():void{
    this.details.getAllWebAPITab().subscribe((resp:any)=> {      
      this.Getdata = resp;
      console.log(this.Getdata);
    });
  }
  deleteStudent(id:number): void{
    this.details.deleteWebAPITab(id).subscribe((result) => {
      this.GetAllList();
    },(err) =>{
      console.log(err);
    });
  }
}
