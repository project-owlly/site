import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {DocumentReference} from '@angular/fire/firestore/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  collectionName = 'newsletter';

  constructor(public firestore: AngularFirestore) {}

  createNewsletterRecord(record): Promise<void> {
    return this.firestore.collection('newsletter').doc(record.email).set(record);
  }

  createFeedbackRecord(record): Promise<DocumentReference> {
    return this.firestore.collection('feedback').add(record);
  }

  getNewsletterSubscriptions() {
    return this.firestore.collection('newsletter');
  }

  sendNewsletter(recipients) {
    for (let mail of recipients) {
      /*  this.firestore.collection('sendEmail').add({
        to: mail.email,
        template: {
          data: {
            firstName: mail.vorname,
          },
          name: 'newsletterWelcomeMail',
        },
      });*/
      console.log(mail.email);
    }
  }
}
