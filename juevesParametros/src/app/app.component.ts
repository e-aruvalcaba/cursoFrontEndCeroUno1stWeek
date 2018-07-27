import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cumpleanios: number;
  regreso: number;  
  color: string;
  color1:number;
  color2:number;
  color3:number;

  Nombre:string;

  pasarCumpleanios(){
    this.cumpleanios = Math.floor(Math.random()*100);
    return this.cumpleanios;
  }

  regresar(){
    this.regreso = this.cumpleanios =5*5;
    return this.regreso;
  }

  pasaObjeto( Nombres, Edads, Generos){

    let objeto = {Name: Nombres, Edad: Edads, Genero: Generos};
    return objeto ;
    //return "El nombre almacenado en el objeto es: "+objeto.Name + " la edad almacenada en el objeto es: "+this.Edad + " el genero almacenado en el objeto es: "+this.Genero ;
  }

  miRGB(){

    this.color1 = this.ruletaColores();
    this.color2 = this.ruletaColores();
    this.color3 = this.ruletaColores();
 
    console.log('rgba('+this.color1 +','+this.color2 +','+this.color3 +')');
    return 'rgba('+this.color1 +','+this.color2 +','+this.color3 +')';

  }
  ruletaColores(){
    //Math.floor(Math.random()*255);
    return Math.floor(Math.random()*255);;
  }

}
