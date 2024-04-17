import { Component,OnInit,Input } from '@angular/core';
import { MyServiceService}  from '../my-service.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-insert-tab',
  templateUrl: './insert-tab.component.html',
  styleUrls: ['./insert-tab.component.css']
})
export class InsertTabComponent implements OnInit {
  @Input() StudData = {Name:'',Age:0,Mark:0};
  constructor(public rest:MyServiceService,private router:Router){}
  ngOnInit(): void {
    
  }
  addStudent(): void{
    this.rest.addWebAPITab(this.StudData).subscribe((result) => {
      this.router.navigate(['/AllStudents']);
    },(err) =>{
      console.log(err);
    });
  }

}
