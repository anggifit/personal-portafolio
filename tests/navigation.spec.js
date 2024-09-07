// @ts-check
import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://personal-portafolio-pi.vercel.app/");
  });

  test("should load the homepage", async ({ page }) => {
    await page.goto("https://personal-portafolio-pi.vercel.app/");
    await expect(page).toHaveTitle(/Anggi's Portfolio/);
  });
});
