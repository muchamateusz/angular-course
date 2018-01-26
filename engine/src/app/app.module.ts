import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './root/header/header.component';
import { ListComponent } from './root/body/shopping-list/list.component';
import { ListEditComponent } from './root/body/shopping-list/shopping-list-edit/list.edit.component';
import { RecipeListComponent } from './root/body/recipes/recipe-list/recipe.list.component';
import { RecipeItemComponent } from './root/body/recipes/recipe-list/recipe-item/recipe.item.component';
import { RecipeDetailsComponent } from './root/body/recipes/recipe-details/recipe.details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
