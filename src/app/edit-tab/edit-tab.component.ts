import { Component,OnInit,Input } from '@angular/core';
import { MyServiceService, WebAPITab}  from '../my-service.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-edit-tab',
  templateUrl: './edit-tab.component.html',
  styleUrls: ['./edit-tab.component.css']
})
export class EditTabComponent implements OnInit {
  @Input() StudData:any = {Name:'',Age:0,Mark:0};
  id:number = 0;
  constructor(public details:MyServiceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    var paramid = this.route.snapshot.paramMap.get("id");
    if(paramid !== null && paramid !== undefined){
      this.id =+ paramid;
    }
    this.details.getWebAPITab(this.id).subscribe((data: {}) => {
        this.StudData = data;
      }
      );
  }

  updateStudent():void{
    this.details.updateWebAPITab(this.id,this.StudData).subscribe((result) =>{
      this.router.navigate(['/']);
    },(err) => {
      console.log(err);
    });
  }

}

