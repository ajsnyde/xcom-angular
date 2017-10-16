import { XcomAppPage } from './app.po';

describe('xcom-app App', () => {
  let page: XcomAppPage;

  beforeEach(() => {
    page = new XcomAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
