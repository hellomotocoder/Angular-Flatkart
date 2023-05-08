import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'buy-property', component: AddPropertyComponent },
  { path: 'rent-property', component: AddPropertyComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: 'property-details/:id/abc', component: PropertyListComponent },
  { path: '', component: PropertyListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
