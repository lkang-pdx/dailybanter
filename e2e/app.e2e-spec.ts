import { DailybanterPage } from './app.po';

describe('dailybanter App', () => {
  let page: DailybanterPage;

  beforeEach(() => {
    page = new DailybanterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
