import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss', '../app.component.scss']
})
export class SelectModeComponent implements OnInit {

  loadingText:string = 'some text';

  constructor() { }

  ngOnInit() {
  }

}
