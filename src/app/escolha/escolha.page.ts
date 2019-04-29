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
  

  constructor(private navCtrl: NavController,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
    .subscribe(params => {
      this.aluno = <Aluno>JSON.parse(params['alunoSelecionado']);

      console.log("O aluno chegou na página de escolha foi: " + this.aluno.nome);

    });     
    }
    avancarCadastro(){
     this.navCtrl.navigateForward(['cadastro']);
    }
  }
