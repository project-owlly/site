import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {InfositePage} from './infosite.page';

describe('InfositePage', () => {
  let component: InfositePage;
  let fixture: ComponentFixture<InfositePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfositePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InfositePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
