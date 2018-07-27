import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioAgregarComponent } from './usuario-agregar/usuario-agregar.component';
import { UsuarioModificarComponent } from './usuario-modificar/usuario-modificar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioAgregarComponent,
    UsuarioModificarComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
