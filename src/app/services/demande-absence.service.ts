import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandeAbsenceService {

  constructor(private http: HttpClient) { }

  public getDossierAbsence(): Observable<any>{
    return this.http.get<Array<any>>('http://localhost:8089/demande-absence')
  }
}



