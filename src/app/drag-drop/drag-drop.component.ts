import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  
  public ListaPalabras: String[] = [];
  public Solucion: String = '';

  constructor() { }

  ngOnInit(): void {
    this.getEjercicio()
  }

  getEjercicio(){
    this.ListaPalabras = ['Esta', 'es', 'una','lista','de','palabras','de', 'ejemplo'];
    this.Solucion = 'Solucion de prueba'
  }

}
