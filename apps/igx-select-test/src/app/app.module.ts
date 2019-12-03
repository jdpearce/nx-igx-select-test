import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxSelectModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { SelectFormComponent } from './select-form/select-form.component';

@NgModule({
  declarations: [AppComponent, SelectFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
