import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment'


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';

import { PostsModule } from './posts/posts.module';

import { FooterComponent } from './footer/footer.component'
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule, 
    PostsModule,  
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
