import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  collectionName ='newsletter'

  constructor(public firestore: AngularFirestore) {}

  create_nlUser(record) {
    return this.firestore.collection(this.collectionName).doc(record.Email).set(record);;
  }
  
}
