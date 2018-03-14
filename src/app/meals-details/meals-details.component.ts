import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.component.html',
  styleUrls: ['./meals-details.component.css']
})
export class MealsDetailsComponent implements OnInit {
  meals: any;
  temp: any;
  dalFry: any;
  id: any;
  index: number;
  data: any;
  displayData:any;
  errorMessage: String;
  //dataMap  = new Map();
  constructor(private dataService: DataService, private http: Http, private route: ActivatedRoute) {
    if(this.route.params){
     // console.log('Route Params: ==> ' + JSON.stringify(this.route.params));
     this.route.params.subscribe(params => {
      this.index = params['index'];
     })
    }
  }

  ngOnInit() {
    this.dataService.getMeals()
    .subscribe( meal=>
     {
      this.meals = meal["meals"];
      //console.log("meals data from meals details", this.meals[0].idMeal);
      //this.id = this.meals[0].idMeal;
      this.data = this.meals[this.index];



      // Object.keys(this.data).forEach(key => {
      //     console.log(JSON.stringify(this.data[key]));
      // })
      //   error => this.errorMessage = <any>error
      // console.log(this.meals.length);
      // this.dalFry=this.meals[0];
      // this.temp=this.meals[0].strMeal;
      // console.log(this.temp)
      // console.log(this.dalFry)


      }
  )

}
}
