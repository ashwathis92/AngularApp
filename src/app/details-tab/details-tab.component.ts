import { Component,OnInit,Input} from '@angular/core';
import { MyServiceService,WebAPITab}  from '../my-service.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-details-tab',
  templateUrl: './details-tab.component.html',
  styleUrls: ['./details-tab.component.css']
})
export class DetailsTabComponent implements OnInit {
  Getdata:WebAPITab | undefined;
  id:number = 0;
  constructor(public details:MyServiceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    var paramid = this.route.snapshot.paramMap.get("id");
    if(paramid !== null && paramid !== undefined){
      this.id =+ paramid;
    }
    this.details.getWebAPITab(this.id).subscribe(
      (data: WebAPITab) => this.Getdata = {...data}
      );
  }
  
  
}
