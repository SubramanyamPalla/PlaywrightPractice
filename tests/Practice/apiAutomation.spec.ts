
import { test, expect } from "@playwright/test"

let extractToken: string
test.beforeAll(async ({ request }) => {
    const PostResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            user:
            {
                "email": "testgen@test.com",
                "password": "test12345678"
            }
        }
    }
)

    const messageJson = await PostResponse.json()
    console.log(messageJson)

    extractToken = messageJson.user.token
    console.log("The token from the Login api request is: " + extractToken)
})



test("Get API method ", async ({ request }) => {

    const response = await request.get('https://conduit-api.bondaracademy.com/api/tags')
    //console.log(response)

    //print the response in the json format

    const responeJson = await response.json()
    console.log(responeJson)
    //expect(responeJson.tags[3]).toBe('YouTube')
    expect(responeJson.tags).toContain('Git');

    //print respose in the body format
    const responseBody = await response.headers()
    console.log(responseBody)

    // const responseheaders = await response.headersArray()
    // //console.log(responseheaders)

    // const responseStatusCOde = await response.status()
    // console.log(responseStatusCOde)
    // expect(responseStatusCOde).toBe(200)

    // const responseStatusText = await response.statusText()
    // console.log(responseStatusText)
    // expect(responseStatusText).toBe("OK")

})

//Post Method

test("API Post Method", { tag: '@smoke' }, async ({ request }) => {

    const title = `Automation122323${Date.now()}`;

    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        headers: {
            Authorization: `Token ${extractToken}`
        },

        data: {
            "article": { title, "description": "API", "body": "Using playwright", "tagList": ["Test tag"] }
        }

    })

    const postResponse = await response.json()
    console.log(postResponse)
    expect(postResponse.article.description).toContain('API')

    // const postRequest = await response.status()
    // console.log(postRequest)
    // expect(postRequest).toBe(201)

    //Fetch the slug value
    const slugValue = postResponse.article.slug
    console.log("The slug value is added after createing the new branch " + slugValue)

    //use the post method slug value as input for the get method
    const articleResponse = await request.get(`https://conduit-api.bondaracademy.com/api/articles/${slugValue}`)
    const articleResponseJson = await articleResponse.json()
    expect(articleResponseJson.article.description).toContain("API")

})

