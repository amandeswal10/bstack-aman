To accomplish this challenge, I cloned the base sample repo found in BrowserStack's documentation.

# Changes Introduced

1. New Test Suite
2. Updated test.conf.js:

# Overview
The test suite is designed to simulate a user's interaction with the BrowserStack demo website. It automates the process of logging in, filtering products, favoriting a device, and verifying that the device appears on the Favorites page.

Steps Covered in the Test --
Login: The test begins by navigating to the BrowserStack demo website and clicking on the 'Sign In' link. It then selects the username ("demouser") and password ("testingisfun99") from dropdown options, logs in, and verifies successful login by checking if the logged-in user's name is displayed.

Filter Samsung Devices: After logging in, the test applies a filter to only show Samsung devices, ensuring that the relevant devices are visible.

Favorite Galaxy S20+: The test locates the Galaxy S20+ device, clicks the favorite button, and adds it to the user's favorites.

Verify Favorites: Finally, the test navigates to the Favorites page and verifies that the Galaxy S20+ is displayed in the favorites list.

# Technologies Used
WebDriverIO: For browser automation and interaction with the webpage.

The configuration file (test.conf.js) has been updated to enable parallel test execution. The configuration now runs tests across three different browser and device configurations:

a. Chrome on Windows 10
b. Firefox on macOS Ventura
c. Samsung Galaxy S22 on Android

BrowserStack Integration: The tests are configured to run on BrowserStack's cloud platform. The credentials (BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY) are securely injected from environment variables, ensuring safe access to BrowserStack services.

# Running the Test Suite with Jenkins
The test suite is set up to be run automatically using Jenkins, a continuous integration tool that helps automate the testing process.

How It Works:
Jenkins Pipeline: The Jenkins pipeline is configured to execute the test suite in multiple stages:

Checkout: It checks out the repository containing the test files.
Install Dependencies: Installs the necessary Node.js dependencies, including WebDriverIO and BrowserStack configurations.
Run Tests: Executes the test suite using WebDriverIO via the npx wdio command.
Jenkins fetches the required credentials (such as BrowserStack username and access key) securely from the Jenkins credentials store, allowing the tests to run on the BrowserStack cloud.

Jenkins Integration:

BrowserStack Plugin: The BrowserStack plugin is integrated into Jenkins, providing a seamless connection between Jenkins and BrowserStack.
Environment Variables: The BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY are stored as Jenkins credentials and injected into the pipeline to authenticate the BrowserStack service securely.

