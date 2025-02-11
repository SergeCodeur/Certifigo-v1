import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateEditorComponent } from './components/certificate-editor/certificate-editor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor', component: CertificateEditorComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
