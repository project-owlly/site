import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdftestPage } from './pdftest.page';

describe('PdftestPage', () => {
  let component: PdftestPage;
  let fixture: ComponentFixture<PdftestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdftestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdftestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
