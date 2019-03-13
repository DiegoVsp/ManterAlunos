import { Component, OnInit } from '@angular/core';
import { aluno } from '../Info/alunos';
import {HttpClient} from '@angular/common/http';
import { LoadingController, AlertController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';


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

    ).add(
      ()=>{
        loading.dismiss();
      }        
    )
    


    
    
      }
      
    
  }


