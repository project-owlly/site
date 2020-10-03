import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnPage } from './return.page';

describe('ReturnPage', () => {
  let component: ReturnPage;
  let fixture: ComponentFixture<ReturnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
