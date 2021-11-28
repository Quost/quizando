import { Injectable } from '@angular/core';

import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';

import { BehaviorSubject, Observable } from 'rxjs';

import { Platform } from '@ionic/angular';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

import { HttpClient } from '@angular/common/http';



// criação de uma interface para manipular os campos da tabela quiz

export interface Quiz {

  id: number,

  title: string

}

export interface Question {

  id: number,

  title: string,

  explanation: string,

  quizTitle: string,

  quizId: number

}

export interface Answer {

  id: number,

  title: string,

  isCorrect: number,

  questionId: number

}

@Injectable({

  providedIn: 'root'

})

export class DatabaseService {

  private database: SQLiteObject;

  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);



  quizes = new BehaviorSubject([]);

  questions = new BehaviorSubject([]);

  answers = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {



    //criação do banco de dados, chamando a função o método banco,

    //que fará a criação da tabela e inserção dos dados iniciais

    this.plt.ready().then(() => {

      this.sqlite.create({

        name: 'quiz.db',

        location: 'default'

      })

        .then((db: SQLiteObject) => {

          this.database = db;

          this.dataBase();

        });

    });

  }

  // usará o arquivo criado no passo anterior para criação das tabelas

  dataBase() {

    this.http.get('assets/banco.sql', { responseType: 'text' })

      .subscribe(sql => {

        this.sqlitePorter.importSqlToDb(this.database, sql)

          .then(_ => {

            this.loadAnswers();

            this.loadQuestions();

            this.loadQuizes();

            this.dbReady.next(true);

          })

          .catch(e => console.error(e));

      });

  }



  //observable para o banco de dados

  getStatus() {

    return this.dbReady.asObservable();

  }

  getQuizes(): Observable<Quiz[]> {

    return this.quizes.asObservable();

  }

  getQuestions(): Observable<Question[]> {

    return this.questions.asObservable();

  }

  getAnswers(): Observable<Answer[]> {

    return this.answers.asObservable();

  }

  getQuiz(id): Promise<Quiz> {

    return this.database.executeSql('SELECT * FROM quiz WHERE id = ?', [id]).then(data => {

      return {

        id: data.rows.item(0).id,

        title: data.rows.item(0).title

      }

    });

  }

  deleteQuiz(id) {

    return this.database.executeSql('DELETE FROM quiz WHERE id = ?', [id]).then(_ => {

      this.loadQuizes();

    });

  }


  updateQuiz(quiz: Quiz) {

    let data = [quiz.title];

    return this.database.executeSql(`UPDATE quiz SET title = ? WHERE id = ${quiz.id}`, data).then(data => {

      this.loadQuizes();

    })

  }

  addQuiz(title) {

    let data = [title];

    return this.database.executeSql('INSERT INTO quiz (title) VALUES (?)', data).then(data => {

      this.loadQuizes();

    });

  }

  loadQuizes() {

    return this.database.executeSql('SELECT * FROM quiz', []).then(data => {

      let quizes: Quiz[] = [];

      if (data.rows.length > 0) {

        for (var i = 0; i < data.rows.length; i++) {

          quizes.push({

            id: data.rows.item(i).id,

            title: data.rows.item(i).title

          });

        }

      }

      this.quizes.next(quizes);

    });

  }

  getQuestion(id): Promise<Question> {

    return this.database.executeSql('SELECT question.id, question.title, question.explanation, question.quizId, quiz.title AS quizTitle FROM question JOIN quiz ON question.quizId = quiz.id WHERE question.id = ?', [id]).then(data => {

      return {

        id: data.rows.item(0).id,

        title: data.rows.item(0).title,

        explanation: data.rows.item(0).explanation,

        quizTitle: data.rows.item(0).quizTitle, 

        quizId: data.rows.item(0).quizId

      }

    });

  }

  deleteQuestion(id) {

    return this.database.executeSql('DELETE FROM question WHERE id = ?', [id]).then(_ => {

      this.loadQuestions();

    });

  }


  updateQuestion(question: Question) {

    let data = [question.title, question.explanation];

    return this.database.executeSql(`UPDATE question SET title = ?, explanation = ? WHERE id = ${question.id}`, data).then(data => {

      this.loadQuestions();

    })

  }

  addQuestion(title, explanation, quizId) {

    let data = [title, explanation, quizId];

    return this.database.executeSql('INSERT INTO question (title, explanation, quizId) VALUES (?, ?, ?)', data).then(data => {

      this.loadQuestions();

    });

  }

  loadQuestions() {

    return this.database.executeSql('SELECT question.id, question.title, question.explanation, question.quizId, quiz.title AS quizTitle FROM question JOIN quiz ON question.quizId = quiz.id', []).then(data => {

      let questions: Question[] = [];

      if (data.rows.length > 0) {

        for (var i = 0; i < data.rows.length; i++) {

          questions.push({

            id: data.rows.item(i).id,

            title: data.rows.item(i).title,

            explanation: data.rows.item(i).explanation,

            quizTitle: data.rows.item(0).quizTitle, 

            quizId: data.rows.item(i).quizId

          });

        }

      }

      this.questions.next(questions);

    });

  }

  getAnswer(id): Promise<Answer> {

    return this.database.executeSql('SELECT * FROM answer WHERE id = ?', [id]).then(data => {

      return {

        id: data.rows.item(0).id,

        title: data.rows.item(0).title,

        isCorrect:  data.rows.item(0).isCorrect,

        questionId: data.rows.item(0).quizId

      }  

    });

  }

  deleteAnswer(id) {

    return this.database.executeSql('DELETE FROM answer WHERE id = ?', [id]).then(_ => {

      this.loadAnswers();

    });

  }


  updateAnswer(answer: Answer) {

    let data = [answer.title, answer.isCorrect];

    return this.database.executeSql(`UPDATE question SET title = ?, isCorrect = ? WHERE id = ${answer.id}`, data).then(data => {

      this.loadAnswers();

    })

  }

  addAnswer(title, isCorrect, questionId) {

    let data = [title, isCorrect, questionId];

    return this.database.executeSql('INSERT INTO answer (title, isCorrect,questionId) VALUES (?, ?, ?)', data).then(data => {

      this.loadAnswers();

    });

  }

  loadAnswers() {

    return this.database.executeSql('SELECT answer.id, answer.title, answer.isCorrect, answer.questionId FROM answer JOIN question ON question.id = answer.questionId JOIN quiz ON quiz.id = question.quizId', []).then(data => {

      let answers: Answer[] = [];

      if (data.rows.length > 0) {

        for (var i = 0; i < data.rows.length; i++) {

          let tags = [];

          answers.push({

            id: data.rows.item(i).id,

            title: data.rows.item(i).title,

            isCorrect: data.rows.item(i).isCorrect,

            questionId: data.rows.item(i).questionId

          });

        }

      }

      this.answers.next(answers);

    });

  }

}