import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

// domain slash nothing... So we add a default path
const appRoutes: Routes = [
    // Only redirect if the full path isn't empty
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent }, // order in routes matter.
        { path: ':id', component: RecipeDetailComponent },
        { path: 'id/edit', component: RecipeEditComponent }
    ]
    },
    { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

// Bundles all the routing functionality
export class AppRoutingModule {

}
