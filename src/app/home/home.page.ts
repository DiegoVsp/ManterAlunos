import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { Aluno } from '../Info/Alunos';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public alunos: Aluno[];

  constructor(private loadingCtrl:LoadingController,
              private alertCtrl:AlertController,
              private alunosService:AlunosService,
              private navCtrl: NavController){

  }

  async ngOnInit(){
    const loading = await this.loadingCtrl.create({
        message: 'Aguarde o carregamento...'
  });

    await loading.present();

    this.alunosService.lista()
    .subscribe(
      (alunos)=>{
        this.alunos=alunos;
      },      
      async (err: HttpErrorResponse)=>{
        console.log('Erro'+err.status);
        const al = await   this.alertCtrl.create({
          header:'Erro!',
          message:'Error ao listar carros',
          buttons:[{text:'OK'}]
        });
        await al.present();
      }
    ).add(
      ()=>{
        loading.dismiss();
    }        
  )
}
     selecionaAluno(aluno:Aluno){
       console.log("Aluno Selecionado: " + aluno.nome);

       let extras: NavigationExtras = {
         queryParams:{
           alunoSelecionado: JSON.stringify(aluno)
         }
       };
       this.navCtrl.navigateForward(['escolha', extras]);
     } 
    
  }


