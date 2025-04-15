import { Page } from "playwright";
import orgDashboardUrlPageLocator from "../webLocators/organizerDashboardUrlPage.Locator";
import { delay } from "../constants/URL";
import { PlayBasePage } from "../constants/PlayBasePage";

export class organizerDashboardUrlPage extends PlayBasePage
{
  constructor(page: Page) {
    super(page);
  }

  async login(email: string, firstName: string, lastName:string, mobileNumber:string, organizationName:string):Promise<void>{
  await this.page.getByRole('textbox', { name: 'Please enter your email' }).click();
  await this.page.getByRole('textbox', { name: 'Please enter your email' }).fill(email);
  await this.page.getByRole('button', { name: 'Get OTP' }).click();
  await this.page.getByRole('spinbutton').first().fill('1');
  await this.page.getByRole('spinbutton').nth(1).fill('2');
  await this.page.getByRole('spinbutton').nth(2).fill('3');
  await this.page.getByRole('spinbutton').nth(3).fill('4');
  await this.page.getByRole('button', { name: 'Verify OTP' }).click();
  await this.page.getByRole('textbox', { name: 'First Name' }).click();
  await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await this.page.getByRole('textbox', { name: 'Last Name' }).click();
  await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  await this.page.getByRole('textbox', { name: 'Mobile number' }).click();
  await this.page.getByRole('textbox', { name: 'Mobile number' }).fill(mobileNumber);
  await this.page.getByRole('textbox', { name: 'Organization Name' }).click();
  await this.page.getByRole('textbox', { name: 'Organization Name' }).fill(organizationName);
  await this.page.getByRole('button', { name: 'Continue' }).click();
  await this.page.getByRole('spinbutton').first().click();
  await this.page.getByRole('spinbutton').first().fill('1');
  await this.page.getByRole('spinbutton').nth(1).fill('2');
  await this.page.getByRole('spinbutton').nth(2).fill('3');
  await this.page.getByRole('spinbutton').nth(3).fill('4');
  await this.page.getByRole('button', { name: 'Verify OTP' }).click();
  await this.page.getByText('My Events').click();
  }

  async loginWithExistingUser(email: string):Promise<void>{
    await this.page.getByRole('textbox', { name: 'Please enter your email' }).click();
    await this.page.getByRole('textbox', { name: 'Please enter your email' }).fill(email);
    await this.page.getByRole('button', { name: 'Get OTP' }).click();
    await this.page.getByRole('spinbutton').first().fill('1');
    await this.page.getByRole('spinbutton').nth(1).fill('2');
    await this.page.getByRole('spinbutton').nth(2).fill('3');
    await this.page.getByRole('spinbutton').nth(3).fill('4');
    await this.page.getByRole('button', { name: 'Verify OTP' }).click();
  }



  async visibilityOfOrganizerDashboardUrlPage(): Promise<String> {
    // await this.page.waitForTimeout(20000)
    await this.page.click(orgDashboardUrlPageLocator.signUPHeading)
    const url = await this.page.url();
    return url;
  }

  async clickingOnCreateEventBtn(): Promise<void> {
    await this.page.isEnabled(orgDashboardUrlPageLocator.createEvent)
    await this.page.click(orgDashboardUrlPageLocator.createEvent)
  }

  async enterEventName(eventName: string): Promise<void> {
    await this.page.isVisible(orgDashboardUrlPageLocator.inputEventNameField)
    await this.page.fill(orgDashboardUrlPageLocator.inputEventNameField, eventName)
  }

  async clickingOnGroundEventType(): Promise<void> {
    await this.page.isVisible(orgDashboardUrlPageLocator.selectOnGroundEvent)
    await this.page.click(orgDashboardUrlPageLocator.selectOnGroundEvent)
  }

  async selectStartDate(startDate:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.startDateEvent)
    await this.page.fill(orgDashboardUrlPageLocator.startDateEvent, startDate)
  }

  async selectEndDate(endDate:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.endDateEvent)
    await this.page.fill(orgDashboardUrlPageLocator.endDateEvent, endDate)
  }

  async enterLocation(location:string): Promise<void> {
    await this.page.isVisible(orgDashboardUrlPageLocator.inputLocationField)
    await this.page.fill(orgDashboardUrlPageLocator.inputLocationField, location)
    await this.page.isVisible(orgDashboardUrlPageLocator.clickOnLocationItem)
    await this.page.click(orgDashboardUrlPageLocator.clickOnLocationItem)
    await delay(3000)
  }

  async enterPincode(pinCode:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.inputPincode)
    await this.page.fill(orgDashboardUrlPageLocator.inputPincode, pinCode)
    await delay(2000)
  }

  async selectCountryItem(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.selectCountry)
    await this.page.click(orgDashboardUrlPageLocator.selectCountry)
    await delay(1000);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    // await this.page.isEnabled(orgDashboardUrlPageLocator.selectCountryItem)
    // await this.page.click(orgDashboardUrlPageLocator.selectCountryItem)
    // await this.page.selectOption(orgDashboardUrlPageLocator.selectCountryItem, "India")
  }

  async clickingOnSaveAndProceedBtn(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.saveAndProceedBtn)
    await this.page.isEnabled(orgDashboardUrlPageLocator.saveAndProceedBtn)
    await this.page.click(orgDashboardUrlPageLocator.saveAndProceedBtn)
    await delay(1000)
  }

  async selectRunningActivityType(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.runningActivityType)
    await this.page.click(orgDashboardUrlPageLocator.runningActivityType)
  }

  async selectDistance(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.selectDistance)
    await this.page.click(orgDashboardUrlPageLocator.selectDistance)
    await this.page.keyboard.press("ArrowDown")
    await this.page.keyboard.press("Enter")
  }

  async enterNameOfCategory(category:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.inputNameOfCategory)
    await this.page.fill(orgDashboardUrlPageLocator.inputNameOfCategory, "Integration")
  }

  async enterPrice(price:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.inputTicketPrice)
    await this.page.fill(orgDashboardUrlPageLocator.inputTicketPrice, price)
  }

  async enterMinimumAgeLimit(minimumAge:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.minimumAgeLimit)
    await this.page.fill(orgDashboardUrlPageLocator.minimumAgeLimit, minimumAge)
  }

  async enterMaximumAgeLimit(maximumAge:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.maximumAgeLimit)
    await this.page.fill(orgDashboardUrlPageLocator.maximumAgeLimit, maximumAge)
  } 

  async enterInclusives(Inclusive:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.addInclusives)
    await this.page.fill(orgDashboardUrlPageLocator.addInclusives, Inclusive)
    await delay(1000)
    await this.page.keyboard.press('ArrowDown')
    await this.page.keyboard.press('Enter')
  }

  async clickingOnNowBtnInRegistrationDate(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.NowBtn)
    await this.page.click(orgDashboardUrlPageLocator.NowBtn)
  }

  async clickingOnTicketBtn(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.createTicketBtn)
    await this.page.click(orgDashboardUrlPageLocator.createTicketBtn)
    await delay(2000)
  }

  async clickingOnListingBtn(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.selectListingBtn)
    await this.page.click(orgDashboardUrlPageLocator.selectListingBtn)
  }

  async enterRegistrationUrl(signupUrl:string): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.inputRegistration)
    await this.page.fill(orgDashboardUrlPageLocator.inputRegistration, signupUrl)
    await delay(1000)
  }

  async clickingOnPublishBtn(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.publishNowBtn)
    await this.page.click(orgDashboardUrlPageLocator.publishNowBtn)
    await delay(2000)
  }


  async clickingOnYesConfirmBtn(): Promise<void>{
    await this.page.isVisible(orgDashboardUrlPageLocator.yesConfirmBtn)
    await this.page.click(orgDashboardUrlPageLocator.yesConfirmBtn)
    await delay(2000)
    await this.page.reload()
    await delay(2000)
  }

  async visibilityOfValidationMsgs(fieldName: string): Promise<String|null>{
    await this.page.isVisible(orgDashboardUrlPageLocator.fetchValidationMsg.replace('FieldName', fieldName))
    let expectedValidationMsg = await this.page.textContent(orgDashboardUrlPageLocator.fetchValidationMsg.replace('FieldName', fieldName))
    await this.page.click(orgDashboardUrlPageLocator.fetchValidationMsg.replace('FieldName', fieldName))    
    return expectedValidationMsg
  }

}