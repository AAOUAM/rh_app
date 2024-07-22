import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrls: ['./form-absence.component.css']
})
export class FormAbsenceComponent {
  absenceForm: FormGroup;
  language: string = 'fr';

  constructor(private fb: FormBuilder) {
    this.absenceForm = this.fb.group({
      nom_complet: ['', Validators.required],
      cin: ['', Validators.required],
      remplacant: ['', Validators.required],
      grade: ['', Validators.required],
      department: ['', Validators.required],
      duration: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  setLanguage(lang: string) {
    this.language = lang;
  }

  async onSubmit() {
    if (this.absenceForm.valid) {
      const formData = this.absenceForm.value;
      const pdfBytes = await this.generatePDF(formData);
      this.downloadPDF(pdfBytes);
    }
  }

  async generatePDF(data: any): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;
    const textColor = rgb(0, 0, 0);

    let yPosition = height - 50;

    const addText = (text: string, offsetX: number = 50, offsetY: number = 20) => {
      yPosition -= offsetY;
      page.drawText(text, {
        x: offsetX,
        y: yPosition,
        size: fontSize,
        font: timesRomanFont,
        color: textColor,
      });
    };

    addText('Royaume du Maroc');
    addText("Ministère de l'Intérieur");
    addText('Wilaya de la Région Souss-Massa');
    addText("Préfecture d'Agadir Ida-Outanane");
    addText('Secrétariat Général');
    addText('Service des Ressources Humaines');
    addText('Demande de congé administratif', 50, 40);

    addText(`Nom et prénom : ${data.nom_complet}`);
    addText(`Remplaçant : ${data.remplacant}`);
    addText(`Grade : ${data.grade}`);
    addText(`Département : ${data.department}`);
    addText(`CIN : ${data.cin}`);
    addText(`Durée du congé : ${data.duration} jours`);
    addText(`Date de début du congé : ${data.start_date}`);
    addText(`Date de reprise du travail : ${data.end_date}`);

    addText('La personne concerné(e)', 50, 40);
    addText('...........................');
    addText('Chef de service');
    addText('...........................');
    addText('Chef de département');
    addText('...........................');

    addText('Remarques :', 50, 40);
    addText("• La demande doit être déposée dans ce registre avant la date de début du congé et en cas d'urgence il est nécessaire de contacter le service ;", 50, 20);
    addText("• Le congé ne peut être retiré le jour suivant la date de son début.", 50, 20);

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  }

  downloadPDF(pdfBytes: Uint8Array) {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'demande_congé_administratif.pdf');
  }
}
