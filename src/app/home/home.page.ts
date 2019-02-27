import { Component, OnInit } from '@angular/core';
import { informacoes } from '../Info/Informacoes';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public informacoes: informacoes[];

  constructor(public http:HttpClient){

  }

  ngOnInit(): void{
    this.http.get<informacoes[]>('https://gilsonpolito-api.herokuapp.com/alunos')
    .subscribe(
      (Informacoes)=>{
        this.informacoes = this.informacoes;
      }
    )
  }

}
