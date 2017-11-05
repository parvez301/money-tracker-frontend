import { MoneyTrackerFrontEndPage } from './app.po';

describe('money-tracker-front-end App', () => {
  let page: MoneyTrackerFrontEndPage;

  beforeEach(() => {
    page = new MoneyTrackerFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
