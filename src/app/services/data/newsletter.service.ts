import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  collectionName ='nlEmails'

  constructor(public firestore: AngularFirestore) {}

  create_nlUser(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }
  
}
