import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrl: './form-absence.component.css'
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

  onSubmit() {
    if (this.absenceForm.valid) {
      const formData = this.absenceForm.value;
      this.generatePDF(formData);
    }
  }

  generatePDF(data: any) {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Royaume du Maroc', 105, 20, { align: 'center' });
    doc.text('Ministère de l\'Intérieur', 105, 30, { align: 'center' });
    doc.text('Wilaya de la Région Souss-Massa', 105, 40, { align: 'center' });
    doc.text('Préfecture d\'Agadir Ida-Outanane', 105, 50, { align: 'center' });
    doc.text('Secrétariat Général', 105, 60, { align: 'center' });
    doc.text('Service des Ressources Humaines', 105, 70, { align: 'center' });

    doc.text('Demande de congé administratif', 105, 90, { align: 'center' });

    doc.text(`Nom et prénom : ${data.nom_complet}`, 20, 110);
    doc.text(`Remplaçant : ${data.remplacant}`, 20, 120);
    doc.text(`Grade : ${data.grade}`, 20, 130);
    doc.text(`Département : ${data.department}`, 20, 140);
    doc.text(`CIN : ${data.cin}`, 20, 150);
    doc.text(`Durée du congé : ${data.duration} jours`, 20, 160);
    doc.text(`Date de début du congé : ${data.start_date}`, 20, 170);
    doc.text(`Date de reprise du travail : ${data.end_date}`, 20, 180);

    doc.text('La personne concerné(e)', 20, 200);
    doc.text('...........................', 20, 210);
    doc.text('Chef de service', 20, 220);
    doc.text('...........................', 20, 230);
    doc.text('Chef de département', 20, 240);
    doc.text('...........................', 20, 250);

    doc.text('Remarques :', 20, 270);
    doc.text('• La demande doit être déposée dans ce registre avant la date de début du congé, et en cas d\'urgence, il est nécessaire de contacter le service ;', 20, 280);
    doc.text('• Le congé ne peut être retiré le jour suivant la date de son début.', 20, 290);

    doc.save('demande_conge.pdf');
  }

}

