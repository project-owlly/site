import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular'
//import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  @ViewChild('mySlider') slides: IonSlides

  nextSlide() {
    this.slides.slideNext();
    this.progress += 0.1;
  }
  previousSlide() {
    this.slides.slidePrev();
    this.progress -= 0.1;
  }

  progress = 0;
  
  nextSlideSwipe() {
    this.progress += 0.1;
  }
  previousSlideSwipe() {
    this.progress -= 0.1;
  }

  constructor() { }

  ngOnInit() {
  }

}
