import { expect } from "@playwright/test";

class Home {
  constructor(page) {
    this.page = page;
    this.filterIcon = "//select[@class='product_sort_container']";
    this.filterItems = "//select[@class='product_sort_container']/option";
  }

  async checkCart(item) {
        await this.page.click("//button[@id='add-to-cart-sauce-labs-backpack']")
  }

  async checkFilter() {
    await this.page.click(this.filterIcon);
    const hightolow = await this.page
      .locator(".product_sort_container")
      .selectOption("hilo");

    const productNames = await this.page.$$(
      "//div[@id='inventory_container']//div//div[@id='inventory_container']//a/div",
    );

    for (let i of productNames) {
      const itemName = await i.textContent();
    }

    await expect(await productNames[0].textContent()).toBe(
      "Sauce Labs Fleece Jacket",
    );
    await this.page.waitForTimeout(3000);

  }
}

export default Home;
