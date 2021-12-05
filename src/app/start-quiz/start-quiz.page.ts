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
  question: Question
  answers: Answer[] = []
  answer = {}

  questionsCount: number = 0
  rightQuestions: number = 0
  isLast: Boolean = false;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(private router: Router, private db: DatabaseService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit() {

    this.db.getStatus().subscribe(rdy => {

      if (rdy) {

        this.db.getQuestions().subscribe(result => {

          this.questions = result;
          console.log(this.embaralhar(this.questions))

        })
        this.question = this.questions[this.questionsCount]

        this.db.getAnswers(this.questions[this.questionsCount].id).subscribe(result => {
          this.answers = result;
          console.log(this.embaralhar(this.answers))
          this.db.getAnswers('undefined').subscribe(result => {
            console.log('---')
            console.log(result)
          })
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
    await alert.onDidDismiss();

    console.log('slides')
    console.log(this.slides)

    // if (this.slides.isEnd()) {
    //   console.log('isEnd......')
    // } else {
    //   console.log('isNotEnd......')
      this.slides.lockSwipes(false);
      this.questionsCount++;
      this.db.getAnswers(this.questions[this.questionsCount].id).subscribe(result => {
        this.answers = result;
        this.question = this.questions[this.questionsCount]
      })
      this.slides.slideNext();      
      this.slides.lockSwipes(true);
    // }
  }

  async exibeToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  slideChanged(event) {
    console.log('change')
    console.log(event)
    console.log(this.slides.isEnd())
  }

  checkAnswer(answer) {
    console.log(answer)
    var msg = this.question.explanation, header, css;

    if (answer.isCorrect == 1) {
      header = 'Resposta Correta!'
      css = 'correct-answer'
      this.rightQuestions++;
    } else {
      header = 'Resposta Errada!'
      css = 'wrong-answer'
    }

    this.exibeAlert(msg, header, css);
  }

  embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 
    while (0 !== indice_atual) {
 
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
 
    return array;
}

}
