import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from  '../../app/components/home/home.component';
import {PredictorComponent} from '../../app/components/predictor/predictor.component';
import {StatisticsComponent} from '../../app/components/statistics/statistics.component';
import {GoalsComponent} from '../../app/components/goals/goals.component';
import {CentreComponent} from '../../app/components/centre/centre.component';
import {Routes,RouterModule} from '@angular/router';
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'predictor',component:PredictorComponent},
  {path:'stats',component:StatisticsComponent},
  {path:'goals',component:GoalsComponent},
  {path:'centre',component:CentreComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

]

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
})
export class AppRoutingModule { }
