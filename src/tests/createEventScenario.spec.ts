import { test, expect, Page } from "@playwright/test";
import { RandomGenerator } from "../Utills/RandomGenerator";
import { organizerDashboardUrlPage } from "../webPages/organizerDashboardUrlPage";
import {indiaRunningStagingPage} from "../webPages/indiaRunningStagingPage";
import { delay, Urls } from "../constants/URL"
import Credentials from "../constants/Credentials";
import { faker } from '@faker-js/faker';


test.describe("Login Page Tests", () => {
  let orgDashboardUrlPage: organizerDashboardUrlPage;
  let IndiaRunningStagingPage : indiaRunningStagingPage;

  test.beforeEach(async ({ page }) => {
    orgDashboardUrlPage = new organizerDashboardUrlPage(page);
    IndiaRunningStagingPage = new indiaRunningStagingPage(page);
    await page.goto(Urls.BasicUrl+Urls.LoginPage)
    let expUrl = await orgDashboardUrlPage.visibilityOfOrganizerDashboardUrlPage()
    await expect(expUrl).toStrictEqual(Urls.organizerDashboardLoginUrl)
  });

  test("To verify if organizer able to create event & publish or not ", async ({page}) => {
    let user = faker.person.firstName + "gmail.com"
    const randomEmail = RandomGenerator.getRandomEmail();
    const RandomFirstName = faker.person.firstName();
    const RandomLastName = RandomGenerator.getRandomString(5)
    const RandomAutheticateOrganizationName = RandomGenerator.getRandomString(8)
    await orgDashboardUrlPage.login(randomEmail, RandomFirstName, RandomLastName, '+91 78286-054454', RandomAutheticateOrganizationName);
    await orgDashboardUrlPage.clickingOnCreateEventBtn()
    let eventname = faker.person.firstName()
    await orgDashboardUrlPage.enterEventName(eventname)
    await orgDashboardUrlPage.clickingOnGroundEventType()
    await orgDashboardUrlPage.selectStartDate('2025-05-29')
    await orgDashboardUrlPage.selectEndDate('2025-05-31')
    await orgDashboardUrlPage.enterLocation("Indianapolis, IN")
    await orgDashboardUrlPage.enterPincode('254789')
    await orgDashboardUrlPage.selectCountryItem()
    for(let i=0; i<2; i++ )
      await orgDashboardUrlPage.clickingOnSaveAndProceedBtn()
    await orgDashboardUrlPage.selectRunningActivityType()
    await orgDashboardUrlPage.selectDistance()
    await orgDashboardUrlPage.enterNameOfCategory("Integration")
    await orgDashboardUrlPage.enterPrice('250')
    await orgDashboardUrlPage.enterMinimumAgeLimit('14')
    await orgDashboardUrlPage.enterMaximumAgeLimit('45')
    await orgDashboardUrlPage.enterInclusives("Medal")
    await orgDashboardUrlPage.clickingOnNowBtnInRegistrationDate()
    await orgDashboardUrlPage.clickingOnTicketBtn()
    await orgDashboardUrlPage.clickingOnListingBtn()
    await orgDashboardUrlPage.enterRegistrationUrl(Urls.sampleSignupUrl)
    await orgDashboardUrlPage.clickingOnPublishBtn()
    await orgDashboardUrlPage.clickingOnYesConfirmBtn()

    // Here validated & assert event name on staging site

    await page.goto(Urls.stagingBombayRunningUrl)
    await IndiaRunningStagingPage.searchEvent(eventname)    
    let expectedEventName = await IndiaRunningStagingPage.visibilityOfEventName()
    await expect(expectedEventName).toEqual(eventname)
    let expectedVisibilityOfEventOnPage = await IndiaRunningStagingPage.visibilityOfEventOnEventPage()
    await expect(expectedVisibilityOfEventOnPage).toEqual(eventname)

  })

  test("To verify if exiting-organizer able to create event & publish or not ", async ({page}) => {
    await orgDashboardUrlPage.loginWithExistingUser(Credentials.ValidAccount.Email);
    await orgDashboardUrlPage.clickingOnCreateEventBtn()
    let eventname = faker.person.firstName()
    console.log("Event Name------->",eventname)
    await orgDashboardUrlPage.enterEventName(eventname)
    await orgDashboardUrlPage.clickingOnGroundEventType()
    await orgDashboardUrlPage.selectStartDate('2025-05-29')
    await orgDashboardUrlPage.selectEndDate('2025-05-31')
    await orgDashboardUrlPage.enterLocation("Indianapolis, IN")
    await orgDashboardUrlPage.enterPincode('254789')
    await orgDashboardUrlPage.selectCountryItem()
    for(let i=0; i<2; i++ )
      await orgDashboardUrlPage.clickingOnSaveAndProceedBtn()
    await orgDashboardUrlPage.selectRunningActivityType()
    await orgDashboardUrlPage.selectDistance()
    await orgDashboardUrlPage.enterNameOfCategory("Integration")
    await orgDashboardUrlPage.enterPrice('250')
    await orgDashboardUrlPage.enterMinimumAgeLimit('14')
    await orgDashboardUrlPage.enterMaximumAgeLimit('45')
    await orgDashboardUrlPage.enterInclusives("Medal")
    await orgDashboardUrlPage.clickingOnNowBtnInRegistrationDate()
    await orgDashboardUrlPage.clickingOnTicketBtn()
    await orgDashboardUrlPage.clickingOnListingBtn()
    await orgDashboardUrlPage.enterRegistrationUrl(Urls.sampleSignupUrl)
    await orgDashboardUrlPage.clickingOnPublishBtn()
    await orgDashboardUrlPage.clickingOnYesConfirmBtn()

    // Here validated & assert event name on staging site


    await page.goto(Urls.stagingBombayRunningUrl)
    await IndiaRunningStagingPage.searchEvent(eventname)    
    let expectedEventName = await IndiaRunningStagingPage.visibilityOfEventName()
    await expect(expectedEventName).toEqual(eventname)
    let expectedVisibilityOfEventOnPage = await IndiaRunningStagingPage.visibilityOfEventOnEventPage()
    await expect(expectedVisibilityOfEventOnPage).toEqual(eventname)

  })

  test("Negative Scenario : To verify all validation messages If we are going with empty fields", async ({page}) => {
    const randomEmail = RandomGenerator.getRandomEmail();
    const RandomFirstName = faker.person.firstName();
    const RandomLastName = RandomGenerator.getRandomString(5)
    const RandomAutheticateOrganizationName = RandomGenerator.getRandomString(8)
    await orgDashboardUrlPage.login(randomEmail, RandomFirstName, RandomLastName, '+91 78286-054454', RandomAutheticateOrganizationName);
    await orgDashboardUrlPage.clickingOnCreateEventBtn()
    await orgDashboardUrlPage.clickingOnGroundEventType()
    await orgDashboardUrlPage.clickingOnSaveAndProceedBtn()
    const fieldsNames:string[] = ['Event Name', 'Start Date', 'Address', 'Area', 'City', 'State',
       'PinCode', 'Activity Type', 'Distance', 'Name of the Category','Age Limit for Registration',
       'Registration Opens on-Date', 'Time ' ]
    const validationMessages:string[] = [
      "Event Name is required",
      "Start Date is required",
      "Address is required",
      "Area is required",
      "City is required",
      "State is required",
      "PinCode is required",
      "Activity Type is required",
      "Distance is required",
      "Name of the Category is required",
      "Age Limit for Registration is required",
      "Registration Opens on-Date is required",
      "Time is required"
    ]
    for(let i=0;i<7;i++)
    {
      let expectedValidationMsg = await orgDashboardUrlPage.visibilityOfValidationMsgs(fieldsNames[i]);
      await expect(expectedValidationMsg).toEqual(validationMessages[i])
    }
    let eventname = faker.person.firstName()
    await orgDashboardUrlPage.enterEventName(eventname)
    await orgDashboardUrlPage.selectStartDate('2025-05-29')
    await orgDashboardUrlPage.selectEndDate('2025-05-31')
    await orgDashboardUrlPage.enterLocation("Indianapolis, IN")
    await orgDashboardUrlPage.enterPincode('254789')
    await orgDashboardUrlPage.selectCountryItem()
    for(let i=0; i<2; i++ )
      await orgDashboardUrlPage.clickingOnSaveAndProceedBtn()
    await orgDashboardUrlPage.clickingOnTicketBtn()
    for(let i=7;i<13;i++)
      {
        let expectedValidationMsg = await orgDashboardUrlPage.visibilityOfValidationMsgs(fieldsNames[i]);
        await expect(expectedValidationMsg).toEqual(validationMessages[i])
      }
  })

})