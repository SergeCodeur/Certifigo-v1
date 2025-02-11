import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CertificateEditorComponent } from './components/certificate-editor/certificate-editor.component';
import { HomeComponent } from './components/home/home.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, CertificateEditorComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
