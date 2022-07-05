import { Component } from "@angular/core"
import { Routes } from "@angular/router"
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component"
import { LoggedinguardService } from "./loggedinguard.service";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { SnakeComponent } from "./snake/snake.component";
import { StarwarsComponent } from "./starwars/starwars.component";

export const ROUTES:Routes =[
    {path:'', component:HomeComponent},
    {path:'StarWars', component:StarwarsComponent},
    {path:'Snake', component:SnakeComponent},
    {path:'Admin', component:AdminComponent, canActivate:[LoggedinguardService]},
    {path:'Login', component:LoginComponent},
    {path:'Logout', component:LogoutComponent}
]