import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire//compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC80aWsPuCNfexaP-DuJltGacA7H1-OpTg',

  authDomain: 'upload-img-44bfd.firebaseapp.com',

  projectId: 'upload-img-44bfd',

  storageBucket: 'upload-img-44bfd.appspot.com',

  messagingSenderId: '441969870197',

  appId: '1:441969870197:web:c6c80e9ecfeab1c1963f3c',

  measurementId: 'G-K8W2Y3E3E7',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
