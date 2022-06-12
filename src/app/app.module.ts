import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule } from '@angular/forms';
import { GerenciamentoProdutosComponent } from './gerenciamento-produtos/gerenciamento-produtos.component';
import { GerenciamentoListasComponent } from './gerenciamento-listas/gerenciamento-listas.component';
import { HomeComponent } from './home/home.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MenuComponent,
    ProdutoComponent,
    GerenciamentoProdutosComponent,
    GerenciamentoListasComponent,
    HomeComponent,
    MensagemComponent,
    ChecklistComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
