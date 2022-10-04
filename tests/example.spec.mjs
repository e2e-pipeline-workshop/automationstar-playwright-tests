import { test } from "@playwright/test";

const username = "801953";
const password = "Jm659565";
const url = "https://iczv.vsfs.cz/auth/?c=bcas";

test.describe("feature foo", () => {
  test("basic test", async ({ page }) => {
    await page.setDefaultTimeout(0);
    await page.pause();

    await page.goto("https://webdiar.bcas.cz/");
    await page.fill('[name="evidenceNumber"]', username);
    await page.fill('[name="password"]', password);
    await page.click('[type="submit"]');
    await page.goto(url);
    await page.click(".btn-primary");
    await page.click(".ovb2");

    const elm = await page.locator(".float-start .bg-success");

    await page.click(".float-start a >> nth=3");

    const elementHandle = await page.$("iframe");
    const frame = await elementHandle.contentFrame();

    frame.click("button.ytp-large-play-button.ytp-button", {
      delay: 100,
      force: true
    });

    page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.dismiss();
    });

    await page.pause();
  });
});
