import {Component, OnInit} from '@angular/core';
import {PdfService} from '../../services/pdf.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {TestData} from './testInterface';
import {Plugins} from '@capacitor/core';
import {LoadingController} from '@ionic/angular';
const {Browser} = Plugins;

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  testForm: FormGroup;

  //you can use this data to initialize the form!
  testData: TestData = {
    owllyId: 'test', //vrrYZoolx2XSy23RW63f für echtdaten von datenbank / "test" für demodaten via post
    owllyData: {
      //optional owllydata -> wird anhand owllyId im backend gelesen.

      level: 'canton',
      supporters: 'Darum unterstützen SP, Grüne, GLP, AL, EVP, Pro Velo, VCS, Greenpeace und Pro Velo die Velorouten-Initiative.',
      text:
        ' Velounfälle verhindern  Seit 2011 haben sich die Velounfälle mehr als verdoppelt! Autofreie Velorouten entflechten Auto- und Veloverkehr und schaffen so mehr Sicherheit für alle. Schluss mit Stillstand  Seit Jahren herrscht in der Stadt Zürich in Sachen Velo Stillstand. Mit der Velorouten-Initiative sorgen wir dafür, dass die Stadt einen Gang hochschaltet und wir endlich vorwärts kommen! Sicher auf dem Velo und zu Fuss  Die Velorouten-Initiative macht schluss mit den unsäglichen «Mischverkehrsflächen», die für Fussgänger/-innen gefährlich sind. Sichere Velowege auf den Strassen bedeuten gleichzeitig, dass die Trottoirs endlich wieder nur für Fussgänger/-innen sind und sich alle sicher fühlen können. Ein Beitrag zum Klimaschutz  Nur wer sich auf dem Velo sicher fühlt, nimmt statt dem Auto auch mal schnell das Velo. Sichere Velorouten leisten also auch einen wichtigen Beitrag zur Erreichung unserer Klimaziele.',
      title: 'Velorouten-Initiative',
      type: 'initiative',
      published: new Date().toISOString(),
      author: 'urheber der initiative',
      ruleName: 'canton',
      ruleValue: 'sh',
    },
    userData: {
      sub: '0x8870e311Fa7C3B75934C443d3aD56262812B3f8D',
      given_name: 'Sandro Bruno',
      family_name: 'Scalco',
      birth_date: '03.06.1988',
      locality: 'Schaffhausen',
      postal_code: '8200',
      street_address: 'Villenstrasse 4',
    },
  };

  constructor(private pdfService: PdfService, public fb: FormBuilder, public loadingController: LoadingController) {}

  ngOnInit() {
    this.testForm = this.fb.group({
      title: ['', [Validators.required]],
      date: ['', [Validators.required]],
      iText: ['', [Validators.required]],
      urheber: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      adress: ['', [Validators.required]],
    });
  }

  readableDate(date: Date) {
    return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
  }

  async generatePDF() {
    //Loading Animation
    const loading = await this.loadingController.create({
      message: 'Dein PDF wird generiert...',
    });
    await loading.present();
    //pdf stuff
    this.testData.owllyId = 'test';
    this.testData.owllyData.level = 'canton';
    this.testData.owllyData.supporters = 'Darum unterstützen SP, Grüne, GLP, AL, EVP, Pro Velo, VCS, Greenpeace und Pro Velo die Velorouten-Initiative.';
    this.testData.owllyData.text = this.testForm.value.iText;
    this.testData.owllyData.title = this.testForm.value.title;
    this.testData.owllyData.type = 'initiative';
    this.testData.owllyData.published = this.testForm.value.date;
    this.testData.owllyData.author = this.testForm.value.urheber;
    this.testData.owllyData.ruleName = 'canton';
    this.testData.owllyData.ruleValue = 'sh';
    //this.testInterface.userData.sub = this.demoData.userData.sub;
    this.testData.userData.given_name = this.testForm.value.surname;
    this.testData.userData.family_name = this.testForm.value.name;
    this.testData.userData.birth_date = this.testForm.value.birthday;
    this.testData.userData.locality = 'Schaffhausen';
    this.testData.userData.postal_code = '8200';
    this.testData.userData.street_address = this.testForm.value.adress;

    //console.log(this.testData);

    this.pdfService.generatePDF(this.testData).subscribe(async (data) => {
      Browser.open({url: data.url}).then(() => {
        loading.dismiss();
      });
    });
  }
}
