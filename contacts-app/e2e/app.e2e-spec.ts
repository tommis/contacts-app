import { ContactsappPage } from './app.po';

describe('contactsapp App', () => {
  let page: ContactsappPage;

  beforeEach(() => {
    page = new ContactsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
