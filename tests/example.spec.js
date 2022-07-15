const { test, expect } = require("@playwright/test");

//FIRST TEST
test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/"); // đến page mình cho sẵn
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright"); // đợi đến khi có title có chứa sub-string Playwright
});

//WRITING ASSERTIONS

test("my test", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.// đợi đến khi định vị của cái text = Get started có thuộc tính href=/docs/intro
  await expect(page.locator("text=Docs").first()).toHaveAttribute(
    "href",
    "/docs/intro"
  );

  await page.click("text=Docs"); // click vào element có text= Get started
  // Expect some text to be visible on the page.- đợi đến khi có text Introduction hiển thị
  await expect(page.locator("text=Introduction").first()).toBeVisible();
});

//USING TEST HOOKS
test.describe("feature foo", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://playwright.dev/");
  });

  test("correct page", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://playwright.dev/");
  });

  test("button Docs", async ({ page }) => {
    // Expect an attribute "to be strictly equal" to the value.// đợi đến khi định vị của cái text = Get started có thuộc tính href=/docs/intro
    await expect(page.locator("text=Docs").first()).toHaveAttribute(
      "href",
      "/docs/intro"
    );

    await page.click("text=Docs"); // click vào element có text= Get started
    // Expect some text to be visible on the page.- đợi đến khi có text Introduction hiển thị
    await expect(page.locator("text=Introduction").first()).toBeVisible();
  });
});
