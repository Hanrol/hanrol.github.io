import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    workers: 2,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: 'http://127.0.0.1:5174',
        colorScheme: 'light',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chromium' } },
    ],
    webServer: {
        command: 'npm run dev -- --host 127.0.0.1 --port 5174 --strictPort',
        url: 'http://127.0.0.1:5174',
        reuseExistingServer: false,
    },
})
