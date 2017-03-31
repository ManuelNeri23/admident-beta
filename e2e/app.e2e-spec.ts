import { AdmidentBetaPage } from './app.po';

describe('admident-beta App', function() {
  let page: AdmidentBetaPage;

  beforeEach(() => {
    page = new AdmidentBetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
