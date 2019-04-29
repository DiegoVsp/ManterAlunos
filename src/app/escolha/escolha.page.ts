import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../Info/Alunos';
import { Materias } from '../Info/Materias';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  private aluno: Aluno
  private materias: Materias[];
  private aulasTotal: number;

  constructor(private navCtrl: NavController,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
    .subscribe(params => {
      this.aluno = <Aluno>JSON.parse(params['alunoSelecionado']);

      console.log("O aluno chegou na página de escolha foi: " + this.aluno.nome);

    });   
    
      

    this.materias = [
      {nome: "Português", tipo:1},
      {nome: "Matemática", tipo:1},
      {nome: "Inglês", tipo:1},
      {nome: "Ciência", tipo:1},

    ];
 
    
    }
    atualizarMaterias(ativo:boolean, materias: Materias){
      ativo ? this.aulasTotal += materias.tipo : this.aulasTotal -= materias.tipo
    }
  }
