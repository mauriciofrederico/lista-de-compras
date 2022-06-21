import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListaComponent } from './lista/lista.component';
import { GerenciamentoListasComponent } from './gerenciamento-listas/gerenciamento-listas.component';
import { GerenciamentoProdutosComponent } from './gerenciamento-produtos/gerenciamento-produtos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'produtos',component: GerenciamentoProdutosComponent},
  {path:'listas',component: GerenciamentoListasComponent},
  {path:'produto',component: ProdutoComponent},
  {path:'lista',component: ListaComponent},
  {path:'lista/item/:id',component: ListaComponent},
  {path:'listas/checklist/:id',component: ChecklistComponent},
  {path:'',component:HomeComponent },
  {path:'**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
