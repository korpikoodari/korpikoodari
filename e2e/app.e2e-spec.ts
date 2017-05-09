import { KorpikoodariPage } from './app.po';

describe('korpikoodari App', () => {
  let page: KorpikoodariPage;

  beforeEach(() => {
    page = new KorpikoodariPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
