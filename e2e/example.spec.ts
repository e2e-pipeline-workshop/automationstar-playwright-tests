import { test, expect, type Page } from '@playwright/test';

const username = 'jsmith@demo.io';
const password = 'Demo123!';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/digitalbank-2.3.0.local/login');
});

test.describe('feature foo', () => {
  test('basic test', async ({ page }) => {
    await page.fill('[id="username"]', username);

    await page.fill('[id="passwordInput"]', password);
    await page.click('[id="submit"]');

    const title = await page.title();
    console.log('Page title:: ', title);

    expect(title).toEqual('Digital Bank');
  });
});
