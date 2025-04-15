# IndiaRunning-App
India Running is a Race registration platform powered by the Organiser dashboard which is used to provide the details about the Race and the configuration. I just need to write an Automation script which will enable adding a race to the platform using the Organiser dashboard and verify that the race is listed on India Running Staging website.

This project contains end-to-end UI test automation for the IndiaRunning web application using **Playwright with TypeScript**, along with **Allure Reports** for rich visual test reporting.

Setup & Execution
1. Clone the repository : - 
git clone https://github.com/Rohan-Dubey96/IndiaRunning-App.git
cd IndiaRunning-App

2. Install dependencies
Make sure you have Node.js (v16+) and npm installed.

npm install playwright

npm install @playwright/test

Setup Playwright Browser Dependencies : -

npx playwright install

For execute any browser specific test command - 
npx playwright test ./src/tests/createEventScenario.spec --project="Frontend Tests [Positive + Negative] by chromium" --headed

For execute for cross browser execution just hitted this below command -
npx playwright test ./src/tests/createEventScenario.spec --headed

For Allure Report Genaration command -
allure serve allure-results
![image](https://github.com/user-attachments/assets/c4077024-423e-4002-a78e-cb1911198622)
