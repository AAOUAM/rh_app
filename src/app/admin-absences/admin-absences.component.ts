import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-admin-absences',
  templateUrl: './admin-absences.component.html',
  styleUrl: './admin-absences.component.css'
})
export class AdminAbsencesComponent implements OnInit{

  public employees : any;
  public dataSource : any;
  public displayedColumns = ["id","firstName","duration","date","accept"];
  constructor() {
  }
  ngOnInit() {
    this.employees=[];
    for (let i : number = 1; i<100 ; i++){
      this.employees.push(
        {
          id: i,
          firstName: Math.random().toString(20),
          duration: Math.random(),
          date: Math.random(),
        }


      );
    }
    this.dataSource = new MatTableDataSource(this.employees)
  }

  filterEmployees(event: Event) {
    let value= (event.target as HTMLInputElement).value;
    this.dataSource.filter=value;


  }
}
