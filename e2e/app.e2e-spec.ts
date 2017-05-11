import { VividCiphersWebsiteAngularPage } from './app.po';

describe('vivid-ciphers-website-angular App', () => {
  let page: VividCiphersWebsiteAngularPage;

  beforeEach(() => {
    page = new VividCiphersWebsiteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
