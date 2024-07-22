import { Component } from '@angular/core';

@Component({
  selector: 'app-piece-jointes',
  templateUrl: './piece-jointes.component.html',
  styleUrl: './piece-jointes.component.css'
})
export class PieceJointesComponent {
  selectedSection = 'personnelle';
  constructor() {}

  ngOnInit(): void {}

  selectSection(section: string): void {
    this.selectedSection = section;
  }


  EnregistrerFichier() {

  }
}
