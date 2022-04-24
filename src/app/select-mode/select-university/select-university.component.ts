import { Component, OnInit } from '@angular/core';
import {logo} from '../../globals';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-university',
  templateUrl: './select-university.component.html',
  styleUrls: ['./select-university.component.scss', '../../app.component.scss']
})
export class SelectUniversityComponent implements OnInit {
  logo = logo;
  universidadActual = '';
  formularioRelleno = false;

  constructor() { }

  ngOnInit() {
  }

  listaUniversidades = ["UC3M-LEGANÉS", "UC3M-GETAFE", "UPM-CIU", "UCM-CIU", "UAH-ALCALÁ", "UAM-CANTOBLANCO", "URJC-MÓSTOLES"]

  actualizarFormulario(value: boolean){
    this.formularioRelleno = value;
  }



}
