import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {TruncateModule} from '@yellowspot/ng-truncate';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteComponent } from './note/note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        UserComponent,
        NotesComponent,
        CreateNoteComponent,
        NoteComponent,
        EditNoteComponent,
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ColorPickerModule,
        TruncateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
