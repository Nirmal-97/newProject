import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CockpitComponent } from './cockpit/cockpit.component'
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHIghlightDirective } from './basic-highlight/basic-highlight-directive';
  
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BasicHIghlightDirective,HeaderComponent,
    FooterComponent,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
