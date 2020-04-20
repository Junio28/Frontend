import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent } from './componenets/user/list-user/list-user.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';
import { InfoComponent } from './componenets/layouts/main/content/info/info.component';
import { ListClientComponent } from './componenets/client/list-client/list-client.component';
import { CreateClientComponent } from './componenets/client/create-client/create-client.component';
import { ListProductComponent } from './componenets/product/list-product/list-product.component';
import { CreateProductComponent } from './componenets/product/create-product/create-product.component';
import { ListTypeproductComponent } from './componenets/typeproduct/list-typeproduct/list-typeproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormLoginComponent,
    ListUserComponent,
    CopyrightComponent,
    CreateUserComponent,
    InfoComponent,
    ListClientComponent,
    CreateClientComponent,
    ListProductComponent,
    CreateProductComponent,
    ListTypeproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
