import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MealsComponent } from './components/meals/meals.component';
import { DataService } from './service/data.service';
import { AppRoutingModule } from './app-routing.module';
import { MealsDetailsComponent } from './meals-details/meals-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
