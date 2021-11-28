import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DatabaseService, Question } from '../services/storage.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.page.html',
  styleUrls: ['./start-quiz.page.scss'],
})

export class StartQuizPage {


  questions: Question[] = []
  question = {}

  constructor(private router: Router, private db: DatabaseService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit() {

    this.db.getStatus().subscribe(rdy => {

      if (rdy) {

        this.db.getQuestions().subscribe(result => {

          this.questions = result;

        })

      }

    });

  }

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
