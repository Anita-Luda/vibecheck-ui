import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2500 });
  await page.goto('http://localhost:5177');
  await page.waitForTimeout(3000);

  // Click on "Library" tab to verify refined components
  await page.click('button:has-text("Library")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/final_components.png', fullPage: true });

  // Click on "healthcare" to verify a complex mockup
  await page.click('button:has-text("healthcare")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/final_healthcare.png', fullPage: true });

  await browser.close();
})();
