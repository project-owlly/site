import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';

import {Plugins} from '@capacitor/core';

interface Owlly {
  id: string;
  published: Date;
  title: string;
  link: string;
  level: string;
  supporters: string;
  goals: any;
  organisation: string;
  ruleName: string;
  text: string;
  campaignerEmail: string;
  type: string;
  ruleValue: string;
  campaignerName: string;
}

const {Browser} = Plugins;

@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.page.html',
  styleUrls: ['./infosite.page.scss'],
})
export class InfositePage implements OnInit {
  showMore = false;
  showMoreU = false;

  public initiativData: Owlly = {
    text:
      ' Velounfälle verhindern  Seit 2011 haben sich die Velounfälle mehr als verdoppelt! Autofreie Velorouten entflechten Auto- und Veloverkehr und schaffen so mehr Sicherheit für alle. Schluss mit Stillstand  Seit Jahren herrscht in der Stadt Zürich in Sachen Velo Stillstand. Mit der Velorouten-Initiative sorgen wir dafür, dass die Stadt einen Gang hochschaltet und wir endlich vorwärts kommen! Sicher auf dem Velo und zu Fuss  Die Velorouten-Initiative macht schluss mit den unsäglichen «Mischverkehrsflächen», die für Fussgänger/-innen gefährlich sind. Sichere Velowege auf den Strassen bedeuten gleichzeitig, dass die Trottoirs endlich wieder nur für Fussgänger/-innen sind und sich alle sicher fühlen können. Ein Beitrag zum Klimaschutz  Nur wer sich auf dem Velo sicher fühlt, nimmt statt dem Auto auch mal schnell das Velo. Sichere Velorouten leisten also auch einen wichtigen Beitrag zur Erreichung unserer Klimaziele.',
    type: 'initiative',
    campaignerEmail: 'campaigner@owlly.ch',
    ruleName: 'canton',
    link: '/infosite',
    supporters: 'Darum unterstützen SP, Grüne, GLP, AL, EVP, Pro Velo, VCS, Greenpeace und Pro Velo die Velorouten-Initiative.',
    organisation: 'Initiativkomitee «Sichere Velorouten für Zürich»',
    goals: ['Velounfälle verhindern', 'Schluss mit Stillstand', 'Sicherheit auf dem Velo und zu Fuss', 'Beitrag zum Klimaschutz'],
    ruleValue: 'zh',
    title: 'Velorouten-Initiative',
    campaignerName: 'owlly',
    published: new Date(),
    level: 'canton',
    id: 'vrrYZoolx2XSy23RW63f',
  };

  constructor(private oidcService: OidcService) {}

  ngOnInit() {}

  sign() {
    console.log('sign');

    this.oidcService.getAuthUrl(this.initiativData.id).subscribe(
      (urlData) => {
        console.log(JSON.stringify(urlData));

        Browser.open({
          url: urlData.url,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  trimString(str: string, length: number): string {
    return str?.length > length ? str.substring(0, length) + '...' : str;
  }
}
