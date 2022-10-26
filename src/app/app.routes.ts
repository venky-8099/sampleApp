import { HomeComponent } from "./pages/home/components/home.component";
import { AboutusComponent } from "./pages/aboutus/components/aboutus.component";
import { RegisterComponent } from "./register/components/register.component";
import { LoginComponent } from "./login/components/login.component";
import { UserListComponent } from "./pages/userList/components/userList.component";
import { AuthGuard } from './common/guards/auth.guard';
import { ProtectDataGaurd } from './common/guards/protectData.guard';
import { EditUserComponent } from './register/components/editUser.component';
import { ItemListComponent } from "./pages/itemsList/components/itemList.component";
import { ItemCount } from "./pages/itemCount/item.count.component";

export const routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutusComponent },
    { path: "register", component: RegisterComponent,canDeactivate:[ProtectDataGaurd] },
    { path: "login", component: LoginComponent },
    { path: "userList", component: UserListComponent,canActivate:[AuthGuard] },
    { path: "itemList", component:ItemListComponent,canActivate:[AuthGuard]},
    { path: "itemCount", component:ItemCount,canActivate:[AuthGuard]},
    {path:"edit_user/:userId",component:EditUserComponent},
   // {path:"adminHome",loadChildren:'./admin/pages/admin.module#AdminModule'},
    { path: "", component: LoginComponent },
];