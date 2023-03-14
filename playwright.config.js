/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	use: {
		browserName: "chromium",
		headless: false,
		permissions: ["clipboard-read"],
	}
};

export default config;
