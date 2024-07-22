import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DemandeAbsenceService } from "../services/demande-absence.service";

@Component({
  selector: 'app-demande-absence',
  templateUrl: './demande-absence.component.html',
  styleUrls: ['./demande-absence.component.css']
})
export class DemandeAbsenceComponent implements OnInit {
  searchText: string = '';

  dossiers: Array<any> = [];

  constructor(private da: DemandeAbsenceService) {}

  ngOnInit(): void {
    this.da.getDossierAbsence().subscribe({
      next: data => { this.dossiers = data; },
      error: err => { console.log(err); }
    });
  }

  get filteredDossiers() {
    if (!this.searchText) {
      return this.dossiers;
    }
    return this.dossiers.filter(d =>
      d.numerodossier.toLowerCase().includes(this.searchText.toLowerCase()) ||
      d.datedebut.toLowerCase().includes(this.searchText.toLowerCase()) ||
      d.datefin.toLowerCase().includes(this.searchText.toLowerCase()) ||
      d.nombrejours.toString().includes(this.searchText.toLowerCase()) ||
      d.motif.toLowerCase().includes(this.searchText.toLowerCase()) ||
      d.etatdemande.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
