import {AfterViewInit, Component, OnInit, viewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrl: './admin-employees.component.css'
})
export class AdminEmployeesComponent implements OnInit{


  public employees : any;
  public dataSource : any;
  public displayedColumns = ["id","firstName","lastName","personal","administrative","familial", "formations"];
  constructor() {
  }
  ngOnInit() {
    this.employees=[];
    for (let i : number = 1; i<100 ; i++){
      this.employees.push(
        {
          id: i,
          firstName: Math.random().toString(20),
          lastName: Math.random().toString(20),
          departement : Math.random().toString(20),
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
