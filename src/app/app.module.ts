import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/components/menu.component';
import { RegisterComponent } from './register/components/register.component';
import { HomeComponent } from './pages/home/components/home.component';
import { AboutusComponent } from './pages/aboutus/components/aboutus.component';
import { LoginComponent } from './login/components/login.component';
//import { AdminModule } from './admin/pages/admin.module';
import { UserService } from './common/services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './pages/userList/components/userList.component';
import { AuthGuard } from './common/guards/auth.guard';
import { ProtectDataGaurd } from './common/guards/protectData.guard';
import { EditUserComponent } from './register/components/editUser.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { disableInputDirective } from './common/directives/disableInput.directive';
import { CapitalPipe } from './common/pipes/capital.pipe';
import { TokenInterceptor } from './common/interceptors/token.interceptor';
import { ItemListComponent } from './pages/itemsList/components/itemList.component';
import { AddItemComponent } from './pages/items/components/addItem.component';
import { ItemService } from './common/services/item.service';
import { LogoutComponent } from './logout/logout.component';
import { ItemCount } from './pages/itemCount/item.count.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, RegisterComponent, HomeComponent, AboutusComponent, LoginComponent, UserListComponent, EditUserComponent, disableInputDirective, CapitalPipe,ItemListComponent,AddItemComponent,LogoutComponent, ItemCount
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ],
  providers: [UserService, AuthGuard, ProtectDataGaurd, { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },ItemService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
