import { expect } from "@playwright/test";

class Login {
  constructor(page) {
    ((this.page = page),
      (this.username = "//input[@id='user-name']"),
      (this.password = "//input[@id='password']"),
      (this.loginBtn = "//input[@id='login-button']"),
      (this.menuIcon = "//button[@id='react-burger-menu-btn']"));
  }

  async LoginFeature(userName, password) {
    await this.page.fill(this.username, userName);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
   
  }
  async VerifyLoginCheck() {
    await expect(this.page.locator(this.menuIcon)).toBeVisible();
  }
}

export default Login;
