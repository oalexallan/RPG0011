import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@NgModule({
declarations: [
AppComponent,
LivroListaComponent,
LivroDadosComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
NgbModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }