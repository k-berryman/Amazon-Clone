# Amazon Clone
Tutorial by Qazi and Sonny Sangha from Clever Programmer
https://www.youtube.com/watch?v=RDV3Z1KCBvo&list=PLKtYlTJOyYZNdhJ708REZiNOeeXOWh8dm&index=6&t=70s&ab_channel=CleverProgrammer

## Getting Set Up
In a new dir, run `npx create-react-app amazon-clone`
This sets up a starter template

Head on over to firebase.com — this allows us to have a database & to host it online & to use the cloud functions which connect to Stripe to process payments.

Add a new firebase project named amazon-clone, say no to Google Analytics, click the Web </> icon, type amazon-clone, click "Also set up Firebase Hosting", click register app, skip Add Firebase SDK (just click next), then do `sudo npm install -g firebase-tools`, click next, click "continue to console"

Now in firebase, click the burger menu, click the project settings gear icon, click "project settings", scroll down to "SDK setup and configuration", Click "config", copy the contents, make `src/firebase.js` , paste that in there, save

`cd amazon-clone` and then `npm start`

## The Home Page
Go to all test files and logo and delete them (`App.test.js`, `setupTests.js`, `logo.svg`)

Go to `App.js` and delete everything inside of the `div` with className of App. Also delete the logo import. Change `className="app"` with the lowercase to follow BEM convention.

Go into `App.css` and delete everything in it

Go into `index.css` and add

    * {
      margin: 0;
    }

---------

### Create the Header Component

Add in  `{/* Component Comments */}` in `App.js`

      {/* Header */}
      {/* Home */}

Create the Header component — Create `src/Header.js`
They use ES7 Snippets for VSCode, but I'm using Atom

Add in component template into `Header.js`

    import React from 'react'

    function Header() {
      return (
        <div>

        </div>
      )
    }

    export default Header

(this comes automatically in VSCode with ES7 Snippets by typing `_rfce`) (They also use the Prettier extension)

Give the `div` a className of 'header'
Create `src/Header.css` and import it to the Header component with `import './Header.css`

---------

Inside `<div className='header'></div>`,
1. Add the Amazon logo image

2. Add a `div` with `className="header__search"` and in that add an `input` with `className="header__searchInput` and `type="text"`

3. Add a `div` with `className="header__nav"` and in that create 4 more `div`s

--------

Let's add this component!!
Go to `App.js` add `import Header from './Header';`
Add in `<Header />`

--------

Now let's style!!
Go to `Header.css` and add in preferences
We're going to be using **Material-UI** for all the icons
Go to material-ui.com
Run `npm install @mui/material @emotion/react @emotion/styled` and `npm install @mui/icons-material`

Go to `Header.js` to add `import SearchIcon from "@mui/icons-material/Search";` and `<SearchIcon className="header__searchIcon" />`

--------

### Create the Home Component
The body
Create `src/Home.js`

Add in component template into `Home.js`

    import React from 'react'

    function Home() {
      return (
        <div>

        </div>
      )
    }

    export default Home

Give the `div` a className of 'home'
Create `src/Home.css` and import it to the Header component with `import './Home.css`

In `App.js`, `import Home from './Home'` and then `<Home />`

-----------

Second div is home__container, which will have the banner that fades into the background

- Add in an image
- Add css (z-index css means that this piece is behind everything else)

Now we have different rows with different amounts of Products (Product components)

-----------

### Create the Product Component
To be added in `Home.js`
Create `src/Product.js`

Add in component template into `Product.js`

    import React from 'react'

    function Product() {
      return (
        <div>

        </div>
      )
    }

    export default Product

Give the `div` a className of 'product'
Create `src/Product.css` and import it to the Header component with `import './Product.css`

In `Home.js`, `import Product from './Product'` and then `<Product />`

-----------

Product consists of
1. Product Info (container) consists of product name, price, and rating
2. Product Image
3. Button to add to basket


-----------

Let's style this !!
`Product.css`

To target the image within the product container,

    .product > img {
      ...
    }

-----------

Go to `Home.css` and add `.home{}` and `.home__row{}` styles

-----------

Now let's render all our Products in `Home.js`!
It just figures out width spacing :-)

-----------

In `index.css` in `body {}` add `background-color: rgb(234, 237, 237);`

-----------

How do we pass in different info/values to all of these components? They should all be different
**We're going to use props**
Go to `Product.js` and accept props and destructure it by adding `{ title, image, price, rating }` in `Product()` params

Go back to `Home.js`

Change `<Product />` to

    <Product
      title="Book Tittle"
      price={19.99}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
      rating={5}
    />

In `Product.js`,
use `{title}` instead of hard-coding it
repeat for price, image, and rating

`display: flex` drops it into a row

Okay, let's fill in this content

## The Checkout Page
In order to have 2 pages in our website, we're going to use **React Router**
`npm install react-router-dom`

Now in `App.js` we need to `import { BrowserRouter as Router, Switch, Route } from "react-router-dom";`

And then wrap our app div inside the Router

    <Router>
          <div className="app">
            <Header />
            <Home />
          </div>
    </Router>

Now let's render different pages based on the current route
'/' is the default/home route.

**The default route should be at the bottom**

--------------
To be added in `app.js`
Create `src/Checkout.js`

Add in component template into `Checkout.js`

    import React from 'react'

    function Checkout() {
      return (
        <div>

        </div>
      )
    }

    export default Checkout

Give the `div` a className of 'checkout'
Create `src/Checkout.css` and import it to the Header component with `import './Checkout.css`

In `App.js`, `import Checkout from './Checkout'` and then add `<Checkout />`

-----------

Header should be out of Routes so it's always rendered, not dependent on routes

There's 2 main sections of the checkout page - left and right

The left — add the Ad Banner, Checkout title

-----------

Make img clickable to route with React Router like this
`Header.js`
`import { Link } from "react-router-dom";`

    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
    </Link>

The above edits the Amazon logo

Do the same for the basket button

    <Link to="/checkout">
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">
        0
        </span>
      </div>
    </Link>

There's no refresh with React Router!

---------

### Create a Subtotal component
To be added in `Subtotal.js`
Create `src/Subtotal.js`

Add in component template into `Subtotal.js`

    import React from 'react'

    function Subtotal() {
      return (
        <div>

        </div>
      )
    }

    export default Subtotal

Give the `div` a className of 'product'
Create `src/Subtotal.css` and import it to the Header component with `import './Subtotal.css`

In `Checkout.js`, `import Subtotal from './Subtotal'` and then `<Subtotal />`

-----------

`npm install react-currency-format`

(React Context API & Redux)

In `Subtotal.js`, `import CurrencyFormat from "react-currency-format"` Add in the given `CurrencyFormat />`
`decimalScale={2}` means go to 2 decimal places. `value` is the total amount. `thousandSeparator` adds comma when counting into the thousands

Go to `Checkout.js`, `import Subtotal from "./Subtotal"`

`value` is a passed in prop

Okay, now that it works let's make it look pretty in `Subtotal.css`

Include the "is this a gift" checkbox and "proceed to checkout" button

## React Context API
This allows us to add and remove items from our basket
We need a data layer

### Pre-reqs
Add `src/StateProvider.js` and add in data layer logic
Go to `index.js` and wrap our `<App />` in our `<StateProvider initialState={initialState} reducer={reducer}> <App /> </StateProvider>`

(insert whiteboard pics here)

Edit `Header.js` to use `useStateValue()`
Add in `basket?.length` to show basket item count in upper right
