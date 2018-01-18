import { MyBlogPage } from './app.po';

describe('my-blog App', () => {
  let page: MyBlogPage;

  beforeEach(() => {
    page = new MyBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
