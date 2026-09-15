import { expect, test } from '@playwright/test'

test("Api get method", async ({ request }) => {
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags')

    const responseObject = await response.json()

    console.log(responseObject)
})

test("Api Post method @smoke", async ({ request }) => {

    const title = `Automation122323${Date.now()}`;
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        headers: {
            Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNTc0Nn0sImlhdCI6MTc4OTQ2NDgyNiwiZXhwIjoxNzk0NjQ4ODI2fQ.SA1w6_PnjaldserHCmaog1eX1MXLqRB7iTWbC3vnXso"
        },

        data: {
            "article": { title, "description": "API", "body": "Using playwright", "tagList": ["new tag"] }
        }

    })

    const responseObject = await response.json()
    //expect(responseObject.article.author.username).toBe('TestGen');
    //console.log(responseObject.article.author.username);
    console.log(responseObject)
    expect(response.status()).toBe(201)
    console.log('Status Code:', response.status());
})