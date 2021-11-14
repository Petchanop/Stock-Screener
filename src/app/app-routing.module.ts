import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPanelComponent } from './search-panel/search-panel.component';

const routes: Routes = [
  {
    path: "search",
    component: SearchPanelComponent
  },
  {
    path: '',
    redirectTo: "/search",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
