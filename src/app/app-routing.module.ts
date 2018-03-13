import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './components/meals/meals.component';
import { MealsDetailsComponent } from './meals-details/meals-details.component'



const routes: Routes = [
  {path: 'meals', component: MealsComponent},
  {path: 'meals/meals-details', component: MealsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
