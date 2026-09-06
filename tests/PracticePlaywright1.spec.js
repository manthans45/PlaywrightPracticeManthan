const {test,expect} = require('@playwright/test')

test("Locators Test practice", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator('[name="password"]').fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    // const ErrorText = await page.locator('[style*="block"]').textContent();
    // console.log(ErrorText)
    //await expect(page.locator('[style*="block"]')).toContainText("Incorrrect");
    console.log(await page.locator('.card-body a').nth(0).textContent());
    console.log(await page.locator('.card-body a').nth(1).textContent());
    console.log(await page.locator('.card-body a').first().textContent());
    const allTitles = await page.locator('.card-body a').allTextContents();
    console.log(allTitles)
    // for(let product in productNames){
    //     console.log(await product.textContent())
    // }
})