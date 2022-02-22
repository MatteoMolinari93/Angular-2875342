import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { ErrorMetadataService } from './services/error-metadata.service';
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { LocationFilterPipe } from './pipes/location-filter.pipe';
import { UserListInterceptorService } from './mocks/user-list-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HighlightTextPipe,
    LocationFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: ErrorMetadataService},
    { provide: HTTP_INTERCEPTORS, useClass: UserListInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
