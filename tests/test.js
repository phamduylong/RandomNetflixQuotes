import { expect, test } from '@playwright/test';
test("Page Title Test", async ({ page }) => {
  // Random Page Title
  await page.goto("/");
  await expect(page).toHaveTitle("Quotes");

  // Stranger Things Page Title
  await page.goto("/Stranger%20Things");
  await expect(page).toHaveTitle("Stranger Things Quotes");

  // Breaking Bad Page Title
  await page.goto("/Breaking%20Bad");
  await expect(page).toHaveTitle("Breaking Bad Quotes");

  // Better Call Saul Page Title
  await page.goto("/Better%20Call%20Saul");
  await expect(page).toHaveTitle("Better Call Saul Quotes");

  // Lucifer Page Title
  await page.goto("/Lucifer");
  await expect(page).toHaveTitle("Lucifer Quotes");
});

test("Copy Button Test", async ({ page }) => {
  await page.goto("/Lucifer");
  await page.getByRole('button', { name: 'copy svg' }).click();
  // to fix: after long dash there are linebreaks. parse the quote according to longdash index
  // await expect(page.locator('#quote_container div')).toHaveText(await page.evaluate("navigator.clipboard.readText()"));
});
