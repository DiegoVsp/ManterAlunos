import { Component, OnInit } from '@angular/core';
import { aluno } from '../Info/alunos';
import { LoadingController, AlertController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public alunos: aluno[];

  constructor(private loadingCtrl:LoadingController,
              private alertCtrl:AlertController,
              private alunosService:AlunosService,
               ){

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
      
    
  }


