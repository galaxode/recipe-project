import { RecipeProjectPage } from './app.po';

describe('recipe-project App', () => {
  let page: RecipeProjectPage;

  beforeEach(() => {
    page = new RecipeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
