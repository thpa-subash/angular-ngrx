import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UserModule } from './user/user.module';
import { AlbumsModule } from './albums/albums.module';
import { PhotoModule } from './photo/photo.module';
import { environment } from '../environments/environment';

import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postReducer } from './posts/store/reducers/post.reducer';
import { counterReducer } from './counter/reducer/counter.reducer';
import { CounterModule } from './counter/counter.module';
import { TestModule } from './test/test.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { postEffects } from './posts/store/effects/post.effect';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AlbumsModule,
    PhotoModule,
    PostsModule,
    TodosModule,
    UserModule,
    CounterModule,
    TestModule,
    StoreModule.forRoot({counter:counterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([postEffects]),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
