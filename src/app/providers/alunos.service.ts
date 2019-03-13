import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { aluno } from '../Info/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http:HttpClient) { }

  lista(){
    return this.http.get<aluno[]>('https://gilsonpolito-api.herokuapp.com/alunos')
  }
}
