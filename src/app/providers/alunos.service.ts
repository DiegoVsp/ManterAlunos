import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../Info/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http:HttpClient) { }

  lista(){
    return this.http.get<Aluno[]>('https://gilsonpolito-api.herokuapp.com/alunos')
  }
}
