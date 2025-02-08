import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateEditorComponent } from './certificate-editor.component';

describe('CertificateEditorComponent', () => {
  let component: CertificateEditorComponent;
  let fixture: ComponentFixture<CertificateEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateEditorComponent]
    });
    fixture = TestBed.createComponent(CertificateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
