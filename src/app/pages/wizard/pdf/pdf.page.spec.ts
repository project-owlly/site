import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PdfPage} from './pdf.page';

describe('ReturnPage', () => {
  let component: PdfPage;
  let fixture: ComponentFixture<PdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PdfPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
