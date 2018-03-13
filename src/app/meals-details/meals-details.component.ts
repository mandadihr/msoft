import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.component.html',
  styleUrls: ['./meals-details.component.css']
})
export class MealsDetailsComponent implements OnInit {
  meals: any;
  temp: any;
  dalFry: any;
  constructor(private dataService: DataService, http: Http) { }

  ngOnInit() {
    this.dataService.getMeals()
    .subscribe( meal=>
     {
      this.meals = meal["meals"];
      console.log("meals data from api", this.meals);
      // console.log(this.meals.length);
      // this.dalFry=this.meals[0];
      // this.temp=this.meals[0].strMeal;
      // console.log(this.temp)
      // console.log(this.dalFry)


      }
  )

}
}
