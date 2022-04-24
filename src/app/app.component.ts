import { Component } from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import { filter } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  mostrar = true;
  titulo = "BLINDR";
  pagina = '';
  ruta = '';

  ngOnInit() {
  }

  changeLoadText(CompRef:any) {
    let ChildText:string = CompRef?.loadingText;
    
  }

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof RoutesRecognized))
   .subscribe((event) => {
      this.ruta = event['url'];

      if(this.ruta=='/'){
        this.pagina='Inicio';
      }
      else if (this.ruta=='/mode'){
        this.pagina='Inicio';
      }
      else if (this.ruta=='/mode/search'){
        this.pagina='Lugar';
      }
      else if (this.ruta=='/mode/search/map'){
        this.pagina='Mapa';
      }

   });
  }
  
}
