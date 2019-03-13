import { Component, OnInit } from '@angular/core';
import { aluno } from '../Info/alunos';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public alunos: aluno[];

  constructor(public http:HttpClient){

  }

  ngOnInit(): void{
    this.http.get<aluno[]>('https://gilsonpolito-api.herokuapp.com/alunos')
    .subscribe(
      (alunos)=>{
        this.alunos = alunos;
      }
      
    )
  }

}
