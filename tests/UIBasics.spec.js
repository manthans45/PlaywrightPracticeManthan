const {test,expect} = require('@playwright/test')

test("My first test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/") 
       
    //await page.pause();
});

test("My Second test case", async ({browser}) => {

    const browsercontext = await browser.newContext()
    const page = await browsercontext.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/") 
    console.log(await page.title())   
});

test("My Third test", async ({page}) => {
    await page.goto("https://www.google.com") 
    const title = await page.title()
    console.log(title);
    await expect(page).toHaveTitle("Google")
    //await page.pause();
});
 