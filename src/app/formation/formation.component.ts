import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  formations = [
    { id: 1, theme: 'La maitrise de l\'Excel', description: 'Objectifs de la formation', date: '2024-07-01' , domaine :'Informatique'},
    { id: 2, theme: 'La rédaction administrative', description: 'Objectifs de la formation', date: '2024-08-15' , domaine :'Communication'},
    { id: 3, theme: 'Planification stratégique', description: 'Objectifs de la formation', date: '2024-08-15' , domaine :'Management'},
    { id: 4, theme: 'La Gestion physique et Electronique des Documents', description: 'Objectifs de la formation', date: '2024-08-15' , domaine :'Communication et gestion documentaire'},


  ];
  showAddForm = false;
  formationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formationForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  addFormation() {
    if (this.formationForm.valid) {
      const newFormation = { id: Date.now(), ...this.formationForm.value };
      this.formations.push(newFormation);
      this.formationForm.reset();
      this.showAddForm = false;
    }
  }

  deleteFormation(id: number) {
    this.formations = this.formations.filter(formation => formation.id !== id);
  }
}
