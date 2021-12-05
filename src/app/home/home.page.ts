import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DatabaseService, Quiz } from '../services/storage.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  quizes: Quiz[] = []
  quiz = {}

  constructor(private router: Router, private db: DatabaseService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit() {

    this.db.getStatus().subscribe(rdy => {

      if (rdy) {

        this.db.getQuizes().subscribe(result => {

          this.quizes = result;

        })

      }

    });

  }

  // adicionar() {
  //   console.log(this)
  //   if (this.quiz['nome'] == undefined) {
  //     this.exibeAlert('O nome não pode ser vazio')
  //   } else {
  //     if (this.quiz['quantidade'] == undefined) {
  //       this.exibeAlert('A quantidade não pode ser vazia')
  //     } else {
  //       if (this.quiz['valor'] == undefined) {
  //         this.exibeAlert('O valor não pode ser vazio')
  //       } else {
  //         this.db.addQuiz(this.quiz['nome'], this.quiz['quantidade'], this.quiz['valor']).then(_ => {

  //           this.quizes = [];
      
  //         });
          
  //       }
  //     }
  //   }
  // }

  async exibeAlert(msg) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async exibeToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
