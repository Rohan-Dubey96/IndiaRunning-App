import { Page, BrowserContext, Locator } from "playwright";
import { LocatorUtils } from "./LocatorUtils";
import BasePage from "../BasePage"

export class PlayBasePage implements BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<this> {
    await this.page.goto(url);
    return this;
  }

  async getText(locator: string | Locator): Promise<string | null> {
    let element;
    if (typeof locator === "string")
      element = await this.locateElement(locator);
    else element = locator;
  // async getText(locator: string | Locator): Promise<string | null> {
  //   let element;
  //   if (typeof locator === "string")
  //     element = await this.locateElement(locator);
  //   else element = locator;
    return element ? await element.textContent() : null;
  }
  async click(locator: string | Locator): Promise<this> {
    let element;
    if (typeof locator === "string")
      element = await this.locateElement(locator);
    else element = locator;
    if (element) {
      await element.click();
    } else {
      throw new Error(`Element not found for locator: ${locator}`);
    }
    return this;
  }

  // async uploadFile(locator: string | Locator, filepath: string) {
  //   const located = this.locateElement(locator);
  //   await located.setInputFiles(filepath)
  // }
  
  async uploadFile(locator: string | Locator, filepath: string) {
    const located = this.locateElement(locator);
    await located.setInputFiles(filepath)
  }

  async type(locator: string | Locator, text: string): Promise<this> {
    const element = await this.locateElement(locator);
    if (element) {
      await element.fill(text);
    } else {
      throw new Error(`Element not found for locator: ${locator}`);
    }
    return this;
  }

  async isVisible(locator: string | Locator): Promise<boolean> {
    let element;
    if (typeof locator === "string")
      element = await this.locateElement(locator);
    else element = locator;
    return !!element && (await element.isVisible());
  }


  async isEnabled(locator: string): Promise<boolean> {
    const element = await this.locateElement(locator);
    return !!element && (await element.isEnabled());
  }

  async getAttribute(
    locator: string,
    attribute: string
  ): Promise<string | null> {
    const element = await this.locateElement(locator);
    return element ? await element.getAttribute(attribute) : null;
  }

  async waitForSelector(
    locator: string,
    timeout: number = 80000
  ): Promise<this> {
    await this.page.waitForSelector(locator, { timeout });
    return this;
  }

  async waitForNavigation(): Promise<this> {
    await this.page.waitForNavigation();
    return this;
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async reload(): Promise<this> {
    await this.page.reload();
    return this;
  }

  async setViewport(width: number, height: number): Promise<this> {
    await this.page.setViewportSize({ width, height });
    return this;
  }

  async clearCookies(context: BrowserContext): Promise<this> {
    await context.clearCookies();
    return this;
  }

  async takeScreenshot(path: string): Promise<this> {
    await this.page.screenshot({ path });
    return this;
  }

  async waitForElementCount(
    locator: string,
    count: number,
    timeout: number = 80000
  ): Promise<boolean> {
    try {
      await this.page.waitForSelector(locator, { timeout });
      const elements = await this.page.$$(locator);
      return elements.length === count;
    } catch {
      return false;
    }
  }

  locateElement(locator: string | Locator): Locator {
    let element;
    if (typeof locator === "string") {
      if (LocatorUtils.isXPath(locator)) {
        return PlayBasePage.locateXpath(this.page, locator);
      } else {
        return this.page.locator(locator);
      }
    } else return locator;
  }

  async locateAllElement(locator: string): Promise<Array<Locator>> {
    const located: Locator = this.locateElement(locator);
    await located.first().waitFor({ state: "attached" });
    return located?.all() || [];
  }

  async locateAllElementText(locator: string | Locator): Promise<Array<string>> {
    let located;
    if (typeof locator === "string")
      located = await this.locateElement(locator);
    else located = locator;
    await located.first().waitFor({ state: "attached" });
    return (await located?.allTextContents()) || [];
  }

  async clear(locator: string): Promise<this> {
    const located = await this.locateElement(locator);
    await located.fill("");
    return this;
  }
  static locateXpath(_page: Page, locator: string): Locator {
    return _page.locator("xpath=" + locator);
  }
}
