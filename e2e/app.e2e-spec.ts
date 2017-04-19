import { DefaultroutePage } from './app.po';

describe('defaultroute App', function() {
  let page: DefaultroutePage;

  beforeEach(() => {
    page = new DefaultroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
