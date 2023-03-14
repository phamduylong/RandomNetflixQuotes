/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	use: {
		browserName: "chromium",
		headless: true,
		permissions: ["clipboard-read"],
	},
	reporter: [['html', { outputFolder: 'playwright-report' }]],
};

export default config;
