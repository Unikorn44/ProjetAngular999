import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { SnakeComponent } from './snake/snake.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
//Import router
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    SnakeComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
