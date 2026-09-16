import { expect, request as playwrightRequest, test as base } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()

type ApiWorkerFixtures = {
    apiToken: string
}

export const test = base.extend<{}, ApiWorkerFixtures>({
    apiToken: [async ({}, use) => {
        const email = process.env.CONDUIT_EMAIL
        const password = process.env.CONDUIT_PASSWORD

        if (!email || !password) {
            throw new Error('Set CONDUIT_EMAIL and CONDUIT_PASSWORD before running API tests.')
        }

        const apiContext = await playwrightRequest.newContext({
            baseURL: 'https://conduit-api.bondaracademy.com',
        })

        try {
            const response = await apiContext.post('/api/users/login', {
                data: {
                    user: { email, password },
                },
            })

            expect(response.ok()).toBeTruthy()
            const responseBody = await response.json()
            await use(responseBody.user.token)
        } finally {
            await apiContext.dispose()
        }
    }, { scope: 'worker' }],
})

export { expect } from '@playwright/test'