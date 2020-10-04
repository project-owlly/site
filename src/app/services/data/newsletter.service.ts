import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(public firestore: AngularFirestore) {}

  joinNewsletter(record) {
    return this.firestore.collection('newsletter').add(record);
  }
  
}
