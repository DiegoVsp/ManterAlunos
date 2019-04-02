import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../Info/Alunos';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  constructor(private navCtrl: NavController,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
    .subscribe(params => {
      let aluno = <Aluno>JSON.parse(params['alunoSelecionado']);

      console.log('O aluno chegou na página de escolha foi: ' + aluno.nome);

    });   
  }
  voltar(){
    this.navCtrl.back();
  }

}
