import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    {codigo: 1, codEditora: 1, titulo: 'Titulo 1', resumo: 'Resumo 1', autores: ['Alex Allan']},
    {codigo: 2, codEditora: 2, titulo: 'Titulo 2', resumo: 'Resumo 2', autores: ['Allan Alex']},
    {codigo: 3, codEditora: 3, titulo: 'Titulo 3', resumo: 'Resumo 3', autores: ['Alex Allan GS']},
  ];

  constructor() { }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}