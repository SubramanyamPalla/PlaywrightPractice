import { expect, test } from '../fixtures/api.fixture'

test("Api get method", async ({ request, apiToken }) => {
    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags', {
        headers: {
            Authorization: `Token ${apiToken}`
        }
    })

    const responseObject = await response.json()

    console.log(responseObject)
})

test("Api Post method ", { tag: '@smoke' }, async ({ request, apiToken }) => {

    const title = `Automation122323${Date.now()}`;

    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        headers: {
            Authorization: `Token ${apiToken}`
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