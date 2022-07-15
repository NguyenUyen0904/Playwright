const { test, expect } = require("@playwright/test");

test('test', async ({ page }) => {
  // Go to https://direct-channel-web-git-stg-oyojp.vercel.app/h/B13HNEW
  await page.goto('https://direct-channel-web-git-stg-oyojp.vercel.app/h/B13HNEW');
  // Click button:has-text("大人 1名・子供 0名 / 1室")
  await page.locator('button:has-text("大人 1名・子供 0名 / 1室")').click();
  // Click text=大人1 >> [data-testid="plus-button"]
  await page.locator('text=大人1 >> [data-testid="plus-button"]').click();
  // Click text=大人2 >> [data-testid="plus-button"]
  await page.locator('text=大人2 >> [data-testid="plus-button"]').click();
  // Click text=大人3 >> [data-testid="plus-button"]
  await page.locator('text=大人3 >> [data-testid="plus-button"]').click();
  // Click text=適用
  await page.locator('text=適用').click();
  // Click text=合計価格(税込)96,000 円 〜67,200 円 〜詳細・予約 >> button
  await page.locator('text=合計価格(税込)96,000 円 〜67,200 円 〜詳細・予約 >> button').click();
  await expect(page).toHaveURL('https://direct-channel-web-git-stg-oyojp.vercel.app/b/B13HNEW/configure?room-id=6&plan-id=18448667&checkin-date=2022-07-22&checkout-date=2022-07-23&room-count=1&guest-count=4_0_0_0_0_0_0');
  // Click button:has-text("1泊目のプランを選択してください") >> nth=0
  await page.locator('button:has-text("1泊目のプランを選択してください")').first().click();
  // Click text=選択する >> nth=0
  await page.locator('text=選択する').first().click();
  // Click text=1泊目のプランを確定 >> nth=0
  await page.locator('text=1泊目のプランを確定').first().click();
  // Click button:has-text("予約お申し込み手続きへ")
  await page.locator('button:has-text("予約お申し込み手続きへ")').click();
  await expect(page).toHaveURL('https://direct-channel-web-git-stg-oyojp.vercel.app/b/B13HNEW/customer-detail');
  // Click [placeholder="姓"]
  await page.locator('[placeholder="姓"]').click();
  // Fill [placeholder="姓"]
  await page.locator('[placeholder="姓"]').fill('uyen');
  // Click [placeholder="名"]
  await page.locator('[placeholder="名"]').click();
  // Fill [placeholder="名"]
  await page.locator('[placeholder="名"]').fill('uyen');
  // Click [placeholder="セイ"]
  await page.locator('[placeholder="セイ"]').click();
  // Fill [placeholder="セイ"]
  await page.locator('[placeholder="セイ"]').fill('uyen');
  // Click [placeholder="メイ"]
  await page.locator('[placeholder="メイ"]').click();
  // Fill [placeholder="メイ"]
  await page.locator('[placeholder="メイ"]').fill('uyen');
  // Click [placeholder="〇〇\@tabist\.com"] >> nth=0
  await page.locator('[placeholder="〇〇\\@tabist\\.com"]').first().click();
  // Fill [placeholder="〇〇\@tabist\.com"] >> nth=0
  await page.locator('[placeholder="〇〇\\@tabist\\.com"]').first().fill('uyenntt@tokyotechlab.com');
  // Fill text=メールアドレス再入力再入力のメールアドレスが一致していません >> [placeholder="〇〇\@tabist\.com"]
  await page.locator('text=メールアドレス再入力再入力のメールアドレスが一致していません >> [placeholder="〇〇\\@tabist\\.com"]').fill('u');
  // Click text=メールアドレス再入力再入力のメールアドレスが一致していません >> [placeholder="〇〇\@tabist\.com"]
  await page.locator('text=メールアドレス再入力再入力のメールアドレスが一致していません >> [placeholder="〇〇\\@tabist\\.com"]').click();
  // Fill text=メールアドレス再入力再入力のメールアドレスが一致していません >> [placeholder="〇〇\@tabist\.com"]
  await page.locator('text=メールアドレス再入力再入力のメールアドレスが一致していません >> [placeholder="〇〇\\@tabist\\.com"]').fill('uyenntt@tokyotechlab.com');
  // Click [placeholder="\30 9012345678"]
  await page.locator('[placeholder="\\30 9012345678"]').click();
  // Fill [placeholder="\30 9012345678"]
  await page.locator('[placeholder="\\30 9012345678"]').fill('123456789');
  // Click [placeholder="\30 00000"]
  await page.locator('[placeholder="\\30 00000"]').click();
  // Fill [placeholder="\30 00000"]
  await page.locator('[placeholder="\\30 00000"]').fill('123456');
  // Click [placeholder="都道府県"]
  await page.locator('[placeholder="都道府県"]').click();
  // Fill [placeholder="都道府県"]
  await page.locator('[placeholder="都道府県"]').fill('123456');
  // Click [placeholder="例：港区海岸1-7-1"]
  await page.locator('[placeholder="例：港区海岸1-7-1"]').click();
  // Fill [placeholder="例：港区海岸1-7-1"]
  await page.locator('[placeholder="例：港区海岸1-7-1"]').fill('12345');
  // Click textarea
  await page.locator('textarea').click();
  // Fill textarea
  await page.locator('textarea').fill('123456');
  // Click button:has-text("お支払い方法の選択へ")
  await page.locator('button:has-text("お支払い方法の選択へ")').click();
  await expect(page).toHaveURL('https://direct-channel-web-git-stg-oyojp.vercel.app/b/B13HNEW/payment-selection');
  // Check #pay_later
  await page.locator('#pay_later').check();
  // Click text=ゲストポリシー、プライバシーポリシー、利用規約に同意する >> span >> nth=3
  await page.locator('text=ゲストポリシー、プライバシーポリシー、利用規約に同意する >> span').nth(3).click();
  // Click button:has-text("お支払い手続きへ")
  await page.locator('button:has-text("お支払い手続きへ")').click();
  await expect(page).toHaveURL('https://direct-channel-web-git-stg-oyojp.vercel.app/b/B13HNEW/confirmation');
});