import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, IonSelect, IonSelectOption} from '@ionic/angular'
//import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

 // createForm: FormGroup;

  @ViewChild('mySlider') slides: IonSlides


  //Slider Controls
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

  public volksmotion: boolean = true;
  testVar: any;

  test() {
    console.log("test")
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
