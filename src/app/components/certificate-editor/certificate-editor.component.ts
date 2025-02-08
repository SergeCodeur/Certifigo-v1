import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate-editor',
  templateUrl: './certificate-editor.component.html',
  styleUrls: ['./certificate-editor.component.css']
})
export class CertificateEditorComponent {
  certificateForm: FormGroup;
  previewImageUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.certificateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      completionDate: ['', Validators.required],
      institutionLogo: [''],
      issuerName: ['', Validators.required]
    });

    // Réagir aux changements du formulaire
    this.certificateForm.valueChanges.subscribe(() => {
      // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
    });
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImageUrl = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }

  exportToPDF(): void {
    const certificateElement = document.getElementById('certificate-preview');
    if (certificateElement) {
      html2canvas(certificateElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });
        
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('certificate.pdf');
      });
    }
  }
}