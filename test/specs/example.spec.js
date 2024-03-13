import homePage from '../pageObjects/home-page.js';
import data from '../test-data/navigationButtons.json' assert {type: 'json'};

describe('WebdriverIO', () => {
	it('should launch the Url', async () => {
		await homePage.openUrl();
		expect(await homePage.$header('Next-gen browser and mobile automation test framework for Node.js').isDisplayed())
			.withContext('Expect Header to be displayed')
			.toBe(true);
	});

	it('should validate the buttons present in the landing page', async () => {
		for (let item of data.navigationButtons) {
			expect(await homePage.$buttons(item).isDisplayed())
				.withContext('Expect Navigations buttons to be displayed')
				.toBe(true);
		}
	});
});
