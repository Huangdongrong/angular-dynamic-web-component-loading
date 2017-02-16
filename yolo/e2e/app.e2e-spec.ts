import { YoloPage } from './app.po';

describe('yolo App', function() {
  let page: YoloPage;

  beforeEach(() => {
    page = new YoloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
