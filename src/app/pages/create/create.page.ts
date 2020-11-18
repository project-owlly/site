import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, IonSelect, IonSelectOption} from '@ionic/angular'
import { promise } from 'selenium-webdriver';
import { resolve } from 'url';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { createData } from "./createInterface";
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

createData: createData = {
  text: '',
  title: '',
  type: '',
  published: '',
  author: '',
  ruleValue: '',
  goals: []
} 
//Variables to read user input  
ebene;
begehren;
//form init
createForm: FormGroup;

  @ViewChild('mySlider') slides: IonSlides


  //Slider Controls

  nextSlide() {
    this.slides.slideNext();
  }
  previousSlide() {
    this.slides.slidePrev();
  }
  //state of page stuff
  progress = 0;
  async currentProgress() {
    const current = await this.slides.getActiveIndex();
    const length = await this.slides.length();
    if (current == 0) {
      this.progress = 0;
    }
    else {
      this.progress = (current+1)/length;
    }

    if((this.ebene == 'national' && this.begehren=='initiative') || (this.ebene == 'national' && this.begehren=='referendum') ) {
      this.createForm.get('published').setValidators(Validators.required);
    }
    else {
      this.createForm.get('published').clearValidators();
    }
    if(this.begehren=='initiative') {
      this.createForm.get('author').setValidators(Validators.required);
    }
    else {
      this.createForm.get('author').clearValidators();
    }
  }
  

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    //TODO: send every goal, not only last one
    this.createForm = this.fb.group({
      text: ['', [Validators.required]],
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      published: [''],
      author: [''],
      ruleValue: ['', [Validators.required]],
      goals1: [''],
      goals2: [''],
      goals3: [''],
      goals4: [''],
    });
    
  }

  

  sendInitiative() {
    this.createData.text = this.createForm.value.text;
    this.createData.title = this.createForm.value.title;
    this.createData.type = this.createForm.value.type;
    this.createData.published = this.createForm.value.published;
    this.createData.author = this.createForm.value.author;
    this.createData.ruleValue = this.createForm.value.ruleValue;
    this.createData.goals.push(this.createForm.value.goals1);
    this.createData.goals.push(this.createForm.value.goals2);
    this.createData.goals.push(this.createForm.value.goals3);
    this.createData.goals.push(this.createForm.value.goals4);
    console.log(this.createData);

    
  }
  
}
