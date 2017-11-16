import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shared/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipesModule } from './recipes/recipes.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipesModule,
    AppRoutingModule,

  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
