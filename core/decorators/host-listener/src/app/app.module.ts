import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { HostListenerDirective } from './directives/host-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostListenerComponent,
    HostListenerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
