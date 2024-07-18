import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeAbsenceService} from "../services/demande-absence.service";

@Component({
  selector: 'app-demande-absence',
  templateUrl: './demande-absence.component.html',
  styleUrl: './demande-absence.component.css'
})
export class DemandeAbsenceComponent implements OnInit{

  dossiers :Array<any> = [];

  constructor(private da : DemandeAbsenceService){}


  ngOnInit(): void {

    this.da.getDossierAbsence().subscribe({
      next: data => {this.dossiers = data},
      error : err => {console.log(err)}
    });
    }


}
