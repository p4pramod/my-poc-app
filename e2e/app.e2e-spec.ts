import { AppPage } from './app.po';

describe('my-poc-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();

    page.getlogingButton().click();

    //page.getlogingButton().click();

    expect(page.getParagraphText()).toEqual('SB Admin BS4 Angular4');
  });

  // it('travel leg should load', () => {
  //   page.navigateTo();
  //   expect(page.getTrvelvelLegTitle()).toEqual('Travel Leg Component Works!');
  // });
});
