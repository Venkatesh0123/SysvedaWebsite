import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { HostBindingDirective } from './directives/host-binding.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostBindingComponent,
    HostBindingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
