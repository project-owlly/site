import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FinishPage} from './finish.page';

describe('FinishPage', () => {
  let component: FinishPage;
  let fixture: ComponentFixture<FinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinishPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
