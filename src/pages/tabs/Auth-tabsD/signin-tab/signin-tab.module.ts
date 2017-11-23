import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninTabPage } from './signin-tab';

@NgModule({
  declarations: [
    SigninTabPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninTabPage),
  ],
})
export class SigninTabPageModule {}
