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
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PdfComponent } from './pdf/pdf.component';
import { BooksComponent } from './pdf/books/books.component';

const myTitle: ResolveFn<string> = () => Promise.resolve('Flatkart homePage');
const appRoutes: Routes = [
  {
    path: 'pdf',
    component: PdfComponent,
    // children: [{ path: 'books', component: BooksComponent }],
  },
  { path: 'pdf/books', component: BooksComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'buy-property', component: AddPropertyComponent },
  { path: 'rent-property', component: AddPropertyComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: 'property-details/:id/abc', component: PropertyListComponent },
  { path: '', component: PropertyListComponent, title: myTitle },
  { path: '', redirectTo: '/pdf', pathMatch: 'full' }, //requires if we dont want homepade url to be normal localhost:4200/, instead we can send to login page as homepage and URl will be- localhost:4200/Login. [using component direct to the path:'' will show url - localhost:4200/]
  { path: '**', component: NotFoundComponent },
  {
    path: 'testing',
    loadChildren: () => import('./test/test.module').then((x) => x.TestModule),
  },
  {
    path: 'check',
    loadChildren: () =>
      import('./check/check.module').then((x) => x.CheckModule),
  },
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
    PdfComponent,
    BooksComponent,
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
export class AppModule {
  constructor() {
    console.warn('AppModule con Loaded');
  }
}
