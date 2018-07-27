import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  texto:string="originalmente el texto se muestra asi";

  constructor() { }

  modTexto(){
    this.texto="al presionar el boton";
  }
  
  ngOnInit() {
  }

}
