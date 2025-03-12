import { expect } from 'expect-webdriverio';

describe('BrowserStack Demo Test Suite', () => {
    it('should log in, filter Samsung devices, favorite Galaxy S20+, and verify on the favorites page', async () => {
        // Step 1: Navigate to the website
        await browser.url('https://www.bstackdemo.com/');
        
        // Step 2: Click on 'Sign In' link
        const signInLink = await $('#signin');
        await signInLink.click();
        
        // Step 3: Select username/password from dropdowns and Login
        await $('#username').waitForClickable({ timeout: 5000 });
        await $('#username').click();
        const usernameOption = await $('//div[text()="demouser"]');
        await browser.execute("arguments[0].click();", usernameOption);
        
        await $('#password input').waitForExist({ timeout: 5000 });
        await $('#password').click();
        const passwordOption = await $('//div[text()="testingisfun99"]');
        await browser.execute("arguments[0].click();", passwordOption);
        
        // Click Log In button & Verify that we successfully logged in
        const loginButton = await $('#login-btn');
        await loginButton.click();

        const loggedInUser = await $('span.username');
        await loggedInUser.waitForDisplayed({ timeout: 5000 });
        await expect(loggedInUser).toHaveTextContaining('demouser');

        // Step 4: Filter products to show only Samsung devices
        const samsungFilter = await $('span.checkmark*=Samsung');
        await samsungFilter.click();
        
        // Step 5: Find and favorite Galaxy S20+
        const galaxyS20Title = await $('p.shelf-item__title=Galaxy S20+');
        await galaxyS20Title.waitForExist({ timeout: 5000 });

        // Find the favorite button and click it
        const shelfItem = await galaxyS20Title.$('..');
        const favoriteButton = await shelfItem.$('.shelf-stopper button');
        await favoriteButton.waitForClickable({ timeout: 5000 });
        await favoriteButton.click();
 
        // Step 6: Navigate to the Favorites page & Verify that Samsung S20+ is present in Favorites
        const favoritesLink = await $('#favourites');
        await favoritesLink.click();
        
        const galaxyS20OnFavorite = await $('p.shelf-item__title=Galaxy S20+');
        await expect(galaxyS20OnFavorite).toBeDisplayed({ timeout: 5000, timeoutMsg: 'Galaxy S20+ was not found' });

    });
});
