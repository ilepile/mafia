import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { WebsocketService } from './services/websocket';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, HttpClientModule
  ],
  providers: [
    WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
