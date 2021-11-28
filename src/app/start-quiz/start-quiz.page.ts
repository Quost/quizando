import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ToastController } from '@ionic/angular';
import { DatabaseService, Question, Answer } from '../services/storage.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.page.html',
  styleUrls: ['./start-quiz.page.scss'],
})

export class StartQuizPage {


  questions: Question[] = []
  question = {}
  answers: Answer[] = []
  answer = {}

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(private router: Router, private db: DatabaseService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit() {

    this.db.getStatus().subscribe(rdy => {

      if (rdy) {

        this.db.getQuestions().subscribe(result => {

          this.questions = result;

        })

        this.db.getAnswers().subscribe(result => {
          this.answers = result;
        })

      }

    });

    this.slides.lockSwipes(true);

  }

  async exibeAlert(msg, header, css) {
    const alert = await this.alertCtrl.create({
      cssClass: css,
      header: header,
      message: msg,
      buttons: ['Próxima pergunta']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    console.log(role, alert)

    return alert;
  }

  async exibeToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  onDidDismiss(event) {
    console.log('AQUI')
  }

  checkAnswer(answer, event) {
    console.log('answer: ')
    console.log(answer)
    console.log('event: ')
    console.log(event)
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target?.attributes?.id;
    var value = idAttr?.nodeValue;

    var msg = this.questions[answer.questionId].explanation, header, css;

    if (answer.isCorrect == 1) {
      header = 'Resposta Correta!'
      css = 'correct-answer'
    } else {
      header = 'Resposta Errada!'
      css = 'wrong-answer'
    }

    let alert = this.exibeAlert(msg, header, css);

    console.log(alert)

    

    console.log(target, idAttr, value)
  }

}
