import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  questions: any[];
  opt: any;
  type: any;
  
  constructor() { 
    this.questions = []
  }

  ngOnInit(): void {
  }


  addQuestion() {
    // this.questions.push({"type": "scc", 
    //                      "question_text": "what is your sex ? ",
    //                      "options": ["male", "female"]})
    console.log(this.type);
    this.questions.push({"type": this.type,
                         "question_text": "",
                         "options": []})


    // 2 THINGS -> 
    // ONLY THIS IS LEFT TO DO -> add question test from input, add options from input - done 
    // IMPROVE CSS  - will do later 
    // PLAN AHEAD -> REACT/APIS FOR APP -> CONNECT DB AND APIS AND ALL - doing 

    // add div to the clicked element - done 
    // store questions in collections and do repeat - done 
    // 

    // drop down for type of question 
    // div will contain conditional show and hide for select dropdown of question_type -3 divs 
    // 
  }

  saveQuestions() {
    console.log(this.questions);
  }

  editQuestion() {

  }

  deleteQuestion(index: any) {
    this.questions.splice(index, 1); 
  }

  addOption(q_index: any) {
    // let option = this.form.get('reason').value;
    this.questions[q_index].options.push(this.opt)
  }

  deleteOption(q_index: any, index: any) {
    this.questions[q_index].options.splice(index, 1); 
  }

}
