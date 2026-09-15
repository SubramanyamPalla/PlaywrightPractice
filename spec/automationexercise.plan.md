# Automation Exercise Test Plan

## Application Overview

automationexercise.com is a public e-commerce demo/practice site used for automation testing training. It offers browsing/searching products, category and brand filters, cart and checkout flow, user registration/login/account management, contact us form, newsletter subscription, and a public API testing section. This plan covers core user journeys including happy paths, edge cases, and negative/validation scenarios across these areas, assuming a fresh/blank browser state (no prior session, no items in cart) at the start of each test.

## Test Scenarios

### 1. Account Registration and Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful new user registration

**File:** `tests/automationexercise/registration.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
    - expect: Homepage loads with header nav visible
  2. Click 'Signup / Login' in the header
    - expect: Navigated to /login page showing 'New User Signup!' and 'Login to your account' panels
  3. Enter a unique name and a unique email address in the 'New User Signup!' form
    - expect: Fields accept input
  4. Click the 'Signup' button
    - expect: Redirected to 'ENTER ACCOUNT INFORMATION' page pre-filled with the entered name/email
  5. Fill in title, password, date of birth, and all address/account detail fields (first name, last name, company, address, country, state, city, zipcode, mobile number)
    - expect: All fields accept valid input without validation errors
  6. Click 'Create Account'
    - expect: 'ACCOUNT CREATED!' confirmation message is displayed
  7. Click 'Continue'
    - expect: Redirected to homepage with 'Logged in as [username]' visible in header

#### 1.2. Registration fails when email already exists

**File:** `tests/automationexercise/registration.spec.ts`

**Steps:**
  1. Navigate to /login
    - expect: Signup/Login page loads
  2. Enter a name and an email address that is already registered
    - expect: Fields accept input
  3. Click 'Signup'
    - expect: Page displays error message 'Email Address already exist!' and remains on the login page

#### 1.3. Login with valid credentials

**File:** `tests/automationexercise/login.spec.ts`

**Steps:**
  1. Navigate to /login
    - expect: Login page loads
  2. Enter a valid registered email and correct password in the 'Login' panel
    - expect: Fields accept input
  3. Click 'Login'
    - expect: Redirected to homepage with 'Logged in as [username]' visible in header

#### 1.4. Login fails with incorrect password

**File:** `tests/automationexercise/login.spec.ts`

**Steps:**
  1. Navigate to /login
    - expect: Login page loads
  2. Enter a valid registered email with an incorrect password
    - expect: Fields accept input
  3. Click 'Login'
    - expect: Error message 'Your email or password is incorrect!' is displayed and user remains on the login page

#### 1.5. Login fails with unregistered email

**File:** `tests/automationexercise/login.spec.ts`

**Steps:**
  1. Navigate to /login
    - expect: Login page loads
  2. Enter an email address that has not been registered along with any password
    - expect: Fields accept input
  3. Click 'Login'
    - expect: Error message 'Your email or password is incorrect!' is displayed

#### 1.6. Login form rejects empty submission

**File:** `tests/automationexercise/login.spec.ts`

**Steps:**
  1. Navigate to /login
    - expect: Login page loads
  2. Leave both email and password fields empty and click 'Login'
    - expect: Browser/HTML5 required-field validation prevents submission, or an inline error is shown; no navigation occurs

#### 1.7. Account deletion after login

**File:** `tests/automationexercise/registration.spec.ts`

**Steps:**
  1. Register a new account and log in (reuse steps from 'Successful new user registration')
    - expect: User is logged in, homepage shows 'Logged in as [username]'
  2. Click 'Delete Account' in the header
    - expect: 'ACCOUNT DELETED!' confirmation message is displayed
  3. Click 'Continue'
    - expect: Redirected to homepage in logged-out state, 'Signup / Login' link visible again

#### 1.8. Logout returns user to login page

**File:** `tests/automationexercise/login.spec.ts`

**Steps:**
  1. Log in with valid credentials
    - expect: User is logged in
  2. Click 'Logout' in the header
    - expect: User is redirected to the /login page and header shows 'Signup / Login' again

### 2. Product Browsing and Search

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse all products list

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to homepage and click 'Products' in the header
    - expect: Redirected to /products showing 'ALL PRODUCTS' heading and a grid of product cards with name, price, and 'Add to cart'/'View Product' controls

#### 2.2. View individual product details

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to /products
    - expect: Product list loads
  2. Click 'View Product' on the first listed item
    - expect: Redirected to /product_details/{id} showing product name, category, price, availability, condition, brand, and quantity selector

#### 2.3. Search for an existing product returns matching results

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to /products
    - expect: Product list loads
  2. Enter 'Top' into the search input and click the search icon/button
    - expect: Redirected to search results page titled 'SEARCHED PRODUCTS' listing only products whose names contain 'Top'

#### 2.4. Search for a non-existent product returns empty results

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to /products
    - expect: Product list loads
  2. Enter a nonsense string such as 'zzzznotarealproduct123' into the search input and submit
    - expect: 'SEARCHED PRODUCTS' page is shown with no product cards displayed

#### 2.5. Filter products by category

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Homepage loads with 'Category' panel showing Women, Men, Kids
  2. Click 'Women' category to expand it, then click a subcategory (e.g. 'Dress')
    - expect: Redirected to a category listing page showing only products from that category/subcategory with a heading reflecting the selection

#### 2.6. Filter products by brand

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to /products
    - expect: Product list and 'Brands' panel load in sidebar
  2. Click a brand link, e.g. 'Polo', in the Brands panel
    - expect: Redirected to /brand_products/Polo showing only products for that brand

#### 2.7. Add product review

**File:** `tests/automationexercise/products.spec.ts`

**Steps:**
  1. Navigate to /products and open a product's details page
    - expect: Product details page loads with a 'Write Your Review' section
  2. Fill in name, email, and review text, then click 'Submit'
    - expect: Success message 'Thank you for your review.' is displayed

### 3. Cart and Checkout

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add single product to cart from products list

**File:** `tests/automationexercise/cart.spec.ts`

**Steps:**
  1. Navigate to /products
    - expect: Product list loads
  2. Hover over a product card and click 'Add to cart'
    - expect: A modal appears confirming the item was added, with 'Continue Shopping' and 'View Cart' options
  3. Click 'View Cart'
    - expect: Redirected to /view_cart showing the added product with correct name, price, quantity 1, and total

#### 3.2. Add multiple different products to cart

**File:** `tests/automationexercise/cart.spec.ts`

**Steps:**
  1. Navigate to /products
    - expect: Product list loads
  2. Add the first product to cart and click 'Continue Shopping'
    - expect: Modal closes, remains on /products
  3. Add a second, different product to cart and click 'View Cart'
    - expect: Cart page shows both distinct products listed with correct individual and combined totals

#### 3.3. Change product quantity from product details page

**File:** `tests/automationexercise/cart.spec.ts`

**Steps:**
  1. Navigate to a product details page (/product_details/{id})
    - expect: Details page loads with quantity input defaulted to 1
  2. Set the quantity input to 4 and click 'Add to cart'
    - expect: Confirmation modal appears
  3. Click 'View Cart'
    - expect: Cart shows the product with quantity 4 and total price = unit price * 4

#### 3.4. Remove product from cart

**File:** `tests/automationexercise/cart.spec.ts`

**Steps:**
  1. Add at least one product to the cart and navigate to /view_cart
    - expect: Cart shows one product row
  2. Click the 'X' delete icon on the product row
    - expect: Product row is removed from the cart table without a page reload
  3. Reload the page
    - expect: Cart remains empty, showing 'Cart is empty!' message

#### 3.5. Proceed to checkout while logged in

**File:** `tests/automationexercise/checkout.spec.ts`

**Steps:**
  1. Log in with valid credentials
    - expect: User is logged in
  2. Add a product to the cart and navigate to /view_cart
    - expect: Cart shows the product
  3. Click 'Proceed To Checkout'
    - expect: Checkout page loads showing delivery address, billing address, and an order review table with the correct items/total
  4. Enter an optional order comment and click 'Place Order'
    - expect: Redirected to /payment page with card details form
  5. Fill in valid dummy card details (name, number, CVC, expiry month/year) and click 'Pay and Confirm Order'
    - expect: Order success page is shown with 'Congratulations! Your order has been confirmed!' message and a 'Download Invoice' option

#### 3.6. Checkout while logged out prompts login/registration

**File:** `tests/automationexercise/checkout.spec.ts`

**Steps:**
  1. As a guest (not logged in), add a product to the cart and navigate to /view_cart
    - expect: Cart shows the product
  2. Click 'Proceed To Checkout'
    - expect: A modal appears stating 'Register / Login account to proceed on checkout' with links to register/login

#### 3.7. Payment fails with incomplete card details

**File:** `tests/automationexercise/checkout.spec.ts`

**Steps:**
  1. Log in, add a product to cart, proceed through checkout to the /payment page
    - expect: Payment form loads
  2. Leave the card number field empty and click 'Pay and Confirm Order'
    - expect: Browser/form validation blocks submission (required field), no order confirmation is shown

### 4. Contact Us and Newsletter

**Seed:** `tests/seed.spec.ts`

#### 4.1. Submit contact us form with valid details and attachment

**File:** `tests/automationexercise/contact.spec.ts`

**Steps:**
  1. Navigate to homepage and click 'Contact us' in the header
    - expect: Redirected to /contact_us page with 'GET IN TOUCH' form
  2. Fill in name, email, subject, and message fields, and attach a small file
    - expect: All fields accept input and the file is attached
  3. Click 'Submit'
    - expect: Browser confirm dialog appears; accept it
  4. Accept the confirmation dialog
    - expect: Success message 'Success! Your details have been submitted successfully.' is displayed

#### 4.2. Contact us form validation on required fields

**File:** `tests/automationexercise/contact.spec.ts`

**Steps:**
  1. Navigate to /contact_us
    - expect: Contact form loads
  2. Leave name and email fields empty and click 'Submit'
    - expect: HTML5 required-field validation prevents submission and no success message appears

#### 4.3. Subscribe to newsletter with a valid email

**File:** `tests/automationexercise/newsletter.spec.ts`

**Steps:**
  1. Navigate to the homepage and scroll to the footer 'Subscription' section
    - expect: Subscription input and arrow button are visible
  2. Enter a valid email address into the subscription input and click the submit arrow
    - expect: Success message 'You have been successfully subscribed!' is displayed in green

#### 4.4. Newsletter subscription rejects invalid email format

**File:** `tests/automationexercise/newsletter.spec.ts`

**Steps:**
  1. Navigate to the homepage footer subscription section
    - expect: Subscription input is visible
  2. Enter an invalid email string such as 'not-an-email' and click the submit arrow
    - expect: Browser HTML5 email validation prevents submission (native invalid-email indicator shown), no success message appears
