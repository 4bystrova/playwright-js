import {test,expect} from "@playwright/test";




test.describe("Registration successfully", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("")
    })

    test("Registration positive", async ({page})=>{
        const signUpBtn = page.locator('button', {hasText: 'Sign up'})
        await signUpBtn.click()
        const popup = page.locator('.modal-content')
        const signupNameInput = popup.locator('#signupName')
        await signupNameInput.focus()
        signupNameInput.fill("Elena")
        const signupLastNameInput = popup.locator('#signupLastName')
        await signupLastNameInput.focus()
        signupLastNameInput.fill("Bystrova")
        const signupEmailInput = popup.locator('#signupEmail')
        await signupEmailInput.focus()
        signupEmailInput.fill("aqa-elenatest@test.com")
        const signupPasswordInput = popup.locator('#signupPassword')
        await signupPasswordInput.focus()
        signupPasswordInput.fill("Password123")
        const signupRepeatPasswordInput = popup.locator('#signupRepeatPassword')
        await signupRepeatPasswordInput.focus()
        signupRepeatPasswordInput.fill("Password123")
        const registerBtn = page.locator('button', {hasText: 'Register'})
        await registerBtn.click()
        const myProfileButton = page.locator('#userNavDropdown')
        await expect(myProfileButton).toBeVisible()

    })


})

    test.describe("Registration negative", ()=>{
        test.beforeEach(async ({page})=>{
            await page.goto("")
        })

        test("Empty name field", async ({page})=>{
            const signUpBtn = page.locator('button', {hasText: 'Sign up'})
            await signUpBtn.click()
            const popup = page.locator('.modal-content')
            const signupNameInput = popup.locator('#signupName')
            await signupNameInput.focus()
            const signupLastNameInput = popup.locator('#signupLastName')
            await signupLastNameInput.focus()
            signupLastNameInput.fill("Bystrova")
            const signupEmailInput = popup.locator('#signupEmail')
            await signupEmailInput.focus()
            signupEmailInput.fill("aqa-elenatest@test.com")
            const signupPasswordInput = popup.locator('#signupPassword')
            await signupPasswordInput.focus()
            signupPasswordInput.fill("Password123")
            const signupRepeatPasswordInput = popup.locator('#signupRepeatPassword')
            await signupRepeatPasswordInput.focus()
            signupRepeatPasswordInput.fill("Password123")
            const emptyEmailValidationText = popup.locator('p', {hasText: 'Name required'})
            await expect(emptyEmailValidationText).toBeVisible()

        })

        test("Invalid last name field", async ({page})=>{
            const signUpBtn = page.locator('button', {hasText: 'Sign up'})
            await signUpBtn.click()
            const popup = page.locator('.modal-content')
            const signupNameInput = popup.locator('#signupName')
            await signupNameInput.focus()
            const signupLastNameInput = popup.locator('#signupLastName')
            await signupLastNameInput.focus()
            signupLastNameInput.fill("1")
            const signupEmailInput = popup.locator('#signupEmail')
            await signupEmailInput.focus()
            signupEmailInput.fill("aqa-elenatest@test.com")
            const signupPasswordInput = popup.locator('#signupPassword')
            await signupPasswordInput.focus()
            signupPasswordInput.fill("Password123")
            const signupRepeatPasswordInput = popup.locator('#signupRepeatPassword')
            await signupRepeatPasswordInput.focus()
            signupRepeatPasswordInput.fill("Password123")
            const invalidLastNameValidationText = popup.locator('p', {hasText: 'Last name is invalid'})
            await expect(invalidLastNameValidationText).toBeVisible()

        })

        test("Incorrect email field", async ({page})=>{
            const signUpBtn = page.locator('button', {hasText: 'Sign up'})
            await signUpBtn.click()
            const popup = page.locator('.modal-content')
            const signupNameInput = popup.locator('#signupName')
            await signupNameInput.focus()
            const signupLastNameInput = popup.locator('#signupLastName')
            await signupLastNameInput.focus()
            signupLastNameInput.fill("Bystrova")
            const signupEmailInput = popup.locator('#signupEmail')
            await signupEmailInput.focus()
            signupEmailInput.fill("test.com")
            const signupPasswordInput = popup.locator('#signupPassword')
            await signupPasswordInput.focus()
            signupPasswordInput.fill("Password123")
            const signupRepeatPasswordInput = popup.locator('#signupRepeatPassword')
            await signupRepeatPasswordInput.focus()
            signupRepeatPasswordInput.fill("Password123")
            const incorrectEmailValidationText = popup.locator('p', {hasText: 'Email is incorrect'})
            await expect(incorrectEmailValidationText).toBeVisible()

        })


})