import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTabComponent } from './insert-tab/insert-tab.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { DetailsTabComponent } from './details-tab/details-tab.component';
import { EditTabComponent } from './edit-tab/edit-tab.component';
const routes: Routes = [
  {path:'',component:AllStudentsComponent},
  {path:'allstudents',component:AllStudentsComponent},
  {path:'insert',component:InsertTabComponent},
  {path:'details/:id',component:DetailsTabComponent},
  {path:'edit/:id',component:EditTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
