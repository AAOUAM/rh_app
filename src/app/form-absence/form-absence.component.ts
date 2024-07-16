import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { PDFDocument } from 'pdf-lib';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrl: './form-absence.component.css'
})
export class FormAbsenceComponent {
  absenceForm: FormGroup;
  language: string = 'fr'; // Default language

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

  ngOnInit(): void {}

  setLanguage(lang: string) {
    this.language = lang;
  }

  onSubmit() {
    if (this.absenceForm.valid) {
      const formData = this.absenceForm.value;
      console.log(formData);
      this.generatePDF(formData);
    }
  }

  generatePDF(data: any) {
    const doc = new jsPDF();

    const languageTexts: any = {
      fr: {
        title: "Demande d'absence",
        fields: {
          nom_complet: "Nom complet",
          cin: "CIN",
          remplacant: "Remplaçant",
          grade: "Grade",
          department: "Département",
          duration: "Durée",
          start_date: "Date de début",
          end_date: "Date de fin",
          reason: "Motif"
        }
      },
      ar: {
        title: "طلب رخصة ادارية",
        fields: {
          nom_complet: "الاسم الشخصي و العائلي",
          cin: "رقم البطاقة الوطنية",
          remplacant: "الموظف الذي ينوب عنه",
          grade: "الدرجة",
          department: "القسم او المصلحة",
          duration: "مدة الرخصة",
          start_date: "تاريخ مغادرة العمل",
          end_date: "تاريخ استئناف العمل",
          reason: "نوع الغياب"
        }
      }
    };

    const texts = languageTexts[this.language];

    doc.setFontSize(18);
    doc.text(texts.title, 10, 10);

    doc.setFontSize(12);
    let yPosition = 20;
    for (const [key, value] of Object.entries(data)) {
      doc.text(`${texts.fields[key]}: ${value}`, 10, yPosition);
      yPosition += 10;
    }

    doc.save('demande_absence.pdf');
  }
}
