import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userId: string;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}
  getUser(): Promise<firebase.default.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  login(token): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithCustomToken(token);
  }
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
