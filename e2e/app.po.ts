import { concat } from 'rxjs/operators/concat';
import { $a } from 'codelyzer/angular/styles/chars';
import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }


  getlogingButton() {

    browser.debugger();
    browser.pause();
    return element(by.linkText('Log in'));
  }

  getParagraphText() {
    browser.pause();

    return element(by.css('navbar-brand')).getText();
  }

  // getTrvelvelLegTitle() {
  //   console.log(element);
  //   return element(by.css('main-container')).getText();
  // }
}
