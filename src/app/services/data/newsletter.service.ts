import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  collectionName = 'newsletter';

  constructor(public firestore: AngularFirestore) {}

  createNewsletterRecord(record) {
    return this.firestore.collection('newsletter').doc(record.email).set(record);
  }
  createFeedbackRecord(record) {
    return this.firestore.collection('feedback').add(record);
  }
}
