import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [{
  path: '',
  component: SearchPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
