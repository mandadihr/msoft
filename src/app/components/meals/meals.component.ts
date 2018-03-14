import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Http } from '@angular/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: any[];// used for storing meals details locally from api

  constructor(private dataService: DataService, http: Http) {

   }
// do a call to get the meals on init of component
// we manually subscribe to this method and take the meals data
// in our callback
  ngOnInit() {
    this.dataService.getMeals()
    .subscribe( meal=>
     {
      this.meals = meal["meals"];
      localStorage.setItem('meals',JSON.stringify(this.meals))
     // console.log('getItem',JSON.parse(localStorage.getItem('meals')))
      console.log("meals data from api", this.meals);
    //localStorage.removeItem('meals') //write this in ngDestroy
    }
  )

  }

  ngDestroy(){
    localStorage.removeItem('meals');
  }



  // myEvent(){

  //   for(var i=0; i<this.meals.length;i++){
  //     if(this.meals[i].strMeal="Dal Fry"){
  //       console.log(this.meals[i]);
  //       }

  //   }
  // }


}
