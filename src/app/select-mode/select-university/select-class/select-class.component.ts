import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.scss']
})
export class SelectClassComponent implements OnInit {

  constructor() { }

  claseActual:string = '';

  ngOnInit() {
    this.actualizarClases();
  }
  clases = {
            "UC3M-LEGANÉS":['2.3.A01', '2.3.A02', '2.3.A03', '2.3.B01', '2.3.B01', '2.3.B02', '2.3.B03', '2.3.C01', '2.3.C02'],
            "UC3M-GETAFE":['default'],
            "UPM-CIU":['default'],
            "UPM-CASTELLANA":['default'],
            "UCM-CIU":['default'],
            "UAH-ALCALÁ":['default'],
            "UAM-CANTOBLANCO":['default'],
            "URJC-MÓSTOLES":['default']
          };

  // comunicar la universidad seleccionada (parent -> child)
  @Input() universidadSeleccionada:string = '';
  clasesActuales = this.clases[this.universidadSeleccionada];
  
  @Output() newItemEvent = new EventEmitter<boolean>();

  actualizarClases(){
    // mostrar en el autocompletado clases de la universidad seleccionada 
    this.clasesActuales = this.clases[this.universidadSeleccionada];
  }

  actualizarFormulario(){
    // comunicar si se ha seleccionado una clase válida (child -> parent)
    if (this.clases[this.universidadSeleccionada].includes(this.claseActual)){
      this.newItemEvent.emit(true);
    }
  }
  
  
  

}
