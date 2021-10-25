import { Selector, ClientFunction } from 'testcafe';

declare const fixture: FixtureFn;
/**
 * @feature
 */

fixture(`Home Landing page`).page(`https://my-cargo-us.web.app/`);

test('Navbar is transparent when TopBar is Visible', async (t) => {
  const el = await Selector('.ant-layout-header.gx-header-horizontal-main');

  await t.wait(10000).expect(el.getStyleProperty('background-color')).eql('rgba(0, 0, 0, 0)');
});

test('Navbar is Blue when TopBar is not Visible', async (t) => {
  const el = await Selector('.ant-layout-header.gx-header-horizontal-main');
  const footerEl = await Selector('.ant-layout-footer');

  await t
    .wait(10000)
    .scroll(footerEl, 'bottom')
    .wait(1000)
    .expect(el.getStyleProperty('background-color'))
    .eql('rgb(29, 53, 87)');
});
