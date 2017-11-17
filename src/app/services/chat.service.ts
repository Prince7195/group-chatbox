import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatService {

  user: firebase.User;
  chatMessage: ChatMessage;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  userName: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { 
      this.afAuth.authState.subscribe(auth => {
        if(auth !== undefined && auth !== null) {
          this.user = auth;
        }

        this.getUser().subscribe(a => {
          this.userName = a.displayName;
        });
      });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = `/users`;
    return this.db.object(path);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    // const email = 'test@email.com';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timestamp: timestamp,
      userName: this.userName,
      // userName: 'test-user',
      email: email
    });

  }

  getTimeStamp() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return (date + ' ' + time);
  }

  getMessages(): FirebaseListObservable<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages', {
        query: {
          limitToLast: 25,
          orderByKey: true
        }
    });
  }

}
