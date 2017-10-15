import { ATLAppPage } from './app.po';

describe('atlapp App', function() {
  let page: ATLAppPage;

  beforeEach(() => {
    page = new ATLAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
