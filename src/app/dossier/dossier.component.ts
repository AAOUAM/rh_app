import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.css'
})
export class DossierComponent implements OnInit{
  editingSection: string | null = null;
  editForm!: FormGroup;
  selectedSection = 'personnelle';

  dossier = {
    cin :'J478521',
    nom: 'Dupont',
    prenom: 'Jean',
    sexe: 'Homme',
    dateNaissance: '1980-01-01',
    lieuNaissance: 'TAN-TAN',
    adresse: '123 Rue Principale, 75000 Paris',
    email: 'jean.dupont@example.com',
    numTel: '0687957478',

    nomPere: 'RACHID RACHID',
    nomMere: 'MARIEM MARIEM',
    situationFamiliale: 'Marié',
    dateMariage: '1990-05-15',
    nomConjoint: 'Marie Dupont',
    cinConjoint: 'J789456',
    dateNaissanceConjoint: '1985-04-20',
    fonctionConjoint: 'Infirmière',
    nombreEnfants: 2,
    listEnfants: [
      { prenom: 'Zzzzz', dateNaissance: '2000-01-01' },
      { prenom: 'Aaaaaa', dateNaissance: '2002-02-02' }
    ],

    numeroEmploye: '123456',
    departement: 'Informatique',
    poste: 'Développeur',
    dateEmbauche: '2010-05-15',
    numeroSecuriteSociale: '123-45-6789',
    mutuelle: 'Mutuelle Générale',
    regimeRetraite: 'Régime Complémentaire',

    informationsAdministratives: {
      ppr: 'Numéro d’immatriculation',
      numPosteBudgetaire: 'N° poste budgétaire (PB)',
      dateRecrutement: 'Date de recrutement',
      diplomeRecrutement: 'Diplôme de recrutement',
      adminRecrutement: 'Administration de recrutement',
      dateTitularisation: 'Date titularisation',
      grade: 'Grade et ancienneté grade',
      echelle: 'Échelle et ancienneté échelle',
      echelon: 'Échelon et ancienneté échelon',
      indice: 'Indice',
      statutAdmin: 'Statut administratif',
      situationAdmin: 'Situation administrative',
      typeSortie: 'Type de Sortie',
      dateSortie: 'Date de Sortie',
      mutation: 'Mutation',
      administrationAccueil: 'Administration d’accueil',
      statutActivite: 'Statut d’activité (actif, inactif)',
    },

    informationsPrevoyanceSociale: {
      organismeRetraite: 'Organisme de retraite (CMR ou RCAR)',
      numAffiliationRetraite: 'Numéro d’affiliation de retraite',
      dateAffiliationRetraite: 'Date d’affiliation de retraite',
      organismePrevoyance: 'Organisme de prévoyance sociale',
      numAffiliation: 'N° d’affiliation'
    }
  };

  constructor() {}

  ngOnInit(): void {}

  selectSection(section: string): void {
    this.selectedSection = section;
  }

  editSection(section: string): void {
    this.editingSection = section;
    this.editForm.patchValue(this.dossier);
  }

  saveSection() {
    Object.assign(this.dossier, this.editForm.value);
    this.editingSection = null;
  }

  cancelEdit() {
    this.editingSection = null;
  }
}
