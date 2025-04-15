import { Page } from "playwright";
import indiaRunningStagingPageLocator from "../webLocators/indiaRunningStagingPage.Locator";
import { delay } from "../constants/URL";
import { PlayBasePage } from "../constants/PlayBasePage";

export class indiaRunningStagingPage extends PlayBasePage
{
  constructor(page: Page) {
    super(page);
  }

  async searchEvent(event: string):Promise<void>{
  await this.page.isVisible(indiaRunningStagingPageLocator.searchEventBar)
  await this.page.isEnabled(indiaRunningStagingPageLocator.searchEventBar)
  await this.page.fill(indiaRunningStagingPageLocator.searchEventBar, event)
  await this.page.keyboard.press('Enter')
  await delay(5000)
  }

  async waitingTillOnlyOneElementShouldVisibleOnUI():Promise<void>{
    await this.page.isVisible(indiaRunningStagingPageLocator.oneEventFound)
    await this.page.click(indiaRunningStagingPageLocator.oneEventFound)
  }

  async visibilityOfEventName():Promise<String|null>{
    await this.page.isVisible(indiaRunningStagingPageLocator.extractEventTitle)
    await this.page.locator(indiaRunningStagingPageLocator.extractEventTitle).scrollIntoViewIfNeeded();
    let expectedEventName = await this.page.textContent(indiaRunningStagingPageLocator.extractEventTitle)
    await this.page.click(indiaRunningStagingPageLocator.extractEventTitle)
    return expectedEventName;
  }

  async visibilityOfEventOnEventPage():Promise<String|null>{
    await this.page.isVisible(indiaRunningStagingPageLocator.getEvent)
    let getEventName = await this.page.textContent(indiaRunningStagingPageLocator.getEvent)
    await this.page.click(indiaRunningStagingPageLocator.getEvent)
    return getEventName;
  }

}