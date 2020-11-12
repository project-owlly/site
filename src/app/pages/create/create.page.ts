import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, IonSelect, IonSelectOption} from '@ionic/angular'
import { promise } from 'selenium-webdriver';
import { resolve } from 'url';
//import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
//Variables to read user input  
ebene;
begehren;
 // createForm: FormGroup;

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
  }
  

  constructor(/*public fb: FormBuilder*/) { }

  ngOnInit() {
    /*
    this.createForm = this.fb.group({
      level: ['', [Validators.required]],
      
    });
    */
  }

  
}
