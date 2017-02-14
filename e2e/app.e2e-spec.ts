import { Ls2MultiSelectPage } from './app.po';

describe('ls2-multi-select App', function() {
  let page: Ls2MultiSelectPage;

  beforeEach(() => {
    page = new Ls2MultiSelectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
