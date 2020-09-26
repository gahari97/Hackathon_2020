import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PredictorComponent } from './components/predictor/predictor.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AppRoutingModule } from './components/app-routing.module';
import {MatIconModule} from '@angular/material/icon';

import { CentreComponent } from './components/centre/centre.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PredictorComponent,
    StatisticsComponent,
    GoalsComponent,
    
    CentreComponent,
    
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatButtonModule, AppRoutingModule,MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
