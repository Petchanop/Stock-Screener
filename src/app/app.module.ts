import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { CustomMaterialModule } from './custom-material.module';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SelectPanelComponent } from './select-panel/select-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResultPanelComponent,
    AdminComponent,
    SearchPanelComponent,
    SelectPanelComponent,
    NavigationPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
