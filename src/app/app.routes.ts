import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeefComponent } from './beef/beef.component';
import { DessertComponent } from './dessert/dessert.component';
import { ChickenComponent } from './chicken/chicken.component';
import { GoatComponent } from './goat/goat.component';
import { LambComponent } from './lamb/lamb.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { ParkComponent } from './park/park.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { PastaComponent } from './pasta/pasta.component';

export const routes: Routes = [
    {path:'all',component:HomeComponent,title:"All recepie"},
    {path:'beef',component:BeefComponent,title:"beef recepie"},
    {path:'',redirectTo:'all',pathMatch:'full',title:"Recepie"},
    {path:'breakfast',component:BreakfastComponent,title:"breakfast recepie"},
    {path:'chicken',component:ChickenComponent,title:"beef recepie"},
    {path:'dessert',component:DessertComponent,title:"beef recepie"},
    {path:'goat',component:GoatComponent,title:"beef recepie"},
    {path:'lamb',component:LambComponent,title:"beef recepie"},
    {path:'miscellenus',component:MiscellaneousComponent,title:"beef recepie"},
    {path:'pasta',component:PastaComponent,title:"beef recepie"},
    {path:'park',component:ParkComponent,title:"beef recepie"},
    {path:'seafood',component:SeafoodComponent,title:"beef recepie"},
    {path:'side',component:BeefComponent,title:"beef recepie"},
    {path:'starter',component:BeefComponent,title:"beef recepie"},
    {path:'vegan',component:BeefComponent,title:"beef recepie"},
    {path:'vegetrianr',component:BeefComponent,title:"beef recepie"},

];
