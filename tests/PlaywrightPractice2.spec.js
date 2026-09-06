const {test,expect} = require('@playwright/test')

test("Practice WEb Automation 1", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill('mtms@yopmail.com')
    await page.locator("#userPassword").fill('Admin@123456')
    
})