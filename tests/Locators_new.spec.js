const { test, expect } = require('@playwright/test');
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "mtms@yopmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Admin@123");
   await page.getByRole("button", { name: "Login" }).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   await page.locator(".card-body")
   .filter({hasText:productName})
   .getByRole("button", { name: "Add To Cart" })
   .click();
  
   await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
   await page.locator(".items").waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button", { name: "Checkout" }).click();
    await page.getByPlaceholder("Select Country").type("Ind");   
    await page.locator(".ta-results").waitFor(); 
    
    await page.getByRole("button", { name: "India" }).nth(1).click();    
    await page.getByText("PLACE ORDER").click();
    await page.locator(".hero-primary").waitFor();
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderID);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();  
    const rows = await page.locator("tbody tr");
    const rowsCount = await rows.count();
    for (let i=0;i<rowsCount;i++){
        const rowText = await rows.nth(i).locator("th").textContent();
        if (rowText.includes(orderID)) {
            console.log("Order found in the list: " + rowText);
            expect(rowText).toContain(orderID);
            await rows.nth(i).locator("button").first().click();
            await page.locator(".order-details").waitFor();
            const orderDetails = await page.locator(".order-details").textContent();
            console.log("Order Details: " + orderDetails);
            break;
        }
    }
})