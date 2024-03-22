import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Fire
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './general/general.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LineCartComponent } from './line-cart/line-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    GeneralComponent,
    LineCartComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [LineCartComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
