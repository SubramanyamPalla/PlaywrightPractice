import { test, expect } from '@playwright/test';

test.beforeEach("fixtures demo", async ({ }) => {

    console.log("This test will run before every test")
})

test("Test 1", async ({ }) => {
    console.log("This is test1")

})

test("Test 2", async ({ }) => {
    console.log("This is test2")

})