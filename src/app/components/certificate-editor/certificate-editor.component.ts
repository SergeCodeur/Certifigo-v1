import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificate-editor',
  templateUrl: './certificate-editor.component.html',
  styleUrls: ['./certificate-editor.component.css'],
  providers: [DatePipe],
})
export class CertificateEditorComponent implements OnInit {
  certificateForm: FormGroup;
  previewImageUrl: string | ArrayBuffer | null = null;
  previewQrCodeImageUrl: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private certificateService: CertificateService
  ) {
    this.certificateForm = this.fb.group({
      firstName: ['Prénom', Validators.required],
      lastName: ['Nom', Validators.required],
      completionDate: ['', Validators.required],
      description: [
        'a suivi avec succès le cours de perfectionnement professionnel organisé par le centre de formation de Salford & Co. Training Centre le',
        Validators.required,
      ],
      institutionLogo: [''],
      qrCodeImage: [''],
      issuerName: ['Nom du signataire', Validators.required],
      issuerJob: ['Post du signataire', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadFromLocalStorage();
    this.certificateForm.valueChanges.subscribe(() =>
      this.saveToLocalStorage()
    );
  }

  saveToLocalStorage(): void {
    const formData = this.certificateForm.value;
    formData.institutionLogo = this.previewImageUrl;
    formData.qrCodeImage = this.previewQrCodeImageUrl;
    this.certificateService.saveData(formData);
  }

  loadFromLocalStorage(): void {
    const savedData = this.certificateService.loadData();
    if (savedData) {
      this.certificateForm.patchValue(savedData);
      this.previewImageUrl = savedData.institutionLogo || null;
      this.previewQrCodeImageUrl = savedData.qrCodeImage || null;
    }
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImageUrl = e.target?.result || null;
        this.saveToLocalStorage();
      };
      reader.readAsDataURL(file);
    }
  }

  onQrCodeSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewQrCodeImageUrl = e.target?.result || null;
        this.saveToLocalStorage();
      };
      reader.readAsDataURL(file);
    }
  }

  exportToPDF(): void {
    const certificateElement = document.getElementById('certificate-content');
    if (certificateElement) {
      html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('certificate.pdf');
      });
    }
  }

  get formattedCompletionDate(): string {
    const completionDate = this.certificateForm.get('completionDate')?.value;
    return this.datePipe.transform(completionDate, 'd MMMM yyyy') || '';
  }

  get todayFormattedDate(): string {
    const today = new Date();
    return this.datePipe.transform(today, 'd MMMM yyyy') || '';
  }
}
