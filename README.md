# Amazon Clone
Tutorial by Qazi and Sonny Sangha from Clever Programmer
https://www.youtube.com/watch?v=RDV3Z1KCBvo&list=PLKtYlTJOyYZNdhJ708REZiNOeeXOWh8dm&index=6&t=70s&ab_channel=CleverProgrammer

`npm start`

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

## Checkout Page

### Calculate subtotal price
`Subtotal.js`
`import { useStateValue } from "./StateProvider";`
`const [{ basket }, dispatch] = useStateValue();`

      <p>
        Subtotal ({basket.length}):
        <strong>{value}</strong>
      </p>

value is passed in as a "render prop"

Go to `Reducer.js`
We're going to build a Selector

    // Selector
    // .reduce() maps through the basket
    // Here we use reduce to add each item price to the total amount, with the total starting at 0
    export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

Go back to `Subtotal.js`
`import { getBasketTotal } from "./Reducer";`
`value={getBasketTotal(basket)}`


### Show items in basket
Go to `Checkout.js`
Build `CheckoutProduct` Component
Make `CheckoutProduct.js`

    import React from 'react'
    import './CheckoutProduct.css'

    function CheckoutProduct() {
      return (
        <div className="checkoutProduct">

        </div>
      )
    }

    default export CheckoutProduct

Create `CheckoutProduct.css`

Inside `CheckoutProduct.js`, Add component logic
Destructure props passed through to access id, image, title, price, rating

In, `Checkout.js`, add

    {basket.map(item => (

            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}


Now let's style in `CheckoutProduct.css`
`display: flex` changes vertical rating stars to be horizontal

```
.checkoutProduct__image {
  object-fit: contain;
  width: 180px;
  height: 180px;
}
```
To make the image a reasonable size

### Now we hook up the remove from basket button
In `CheckoutProduct.js`, `<button onClick={removeFromBasket}>Remove from Basket</button>`

Pull/change/manipulate the basket with dispatching an action into the reducer/store

```
import { useStateValue } from './StateProvider';

const [{ basket }, dispatch] = useStateValue();
```

and

```
const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
```

Then, go into `Reducer.js` and in the switch statement add the following case
```
    case "REMOVE_FROM_BASKET":
      // findIndex returns the first element with the given id
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      // make a copy of the basket
      let newBasket = [...state.basket];

      // if index >= 0, it found an item
      if(index >= 0) {
        // chop off that item!
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) because it's not in the basket`)
      }

      return {
        ...state,
        basket: newBasket
      }
```
making sure to not remove every item with the same id, only one item at a time. find the index. findIndex finds the first one and returns it

## Full Log-In with Firebase auth

### We need a log-in page (front-end)
Go to `App.js`
Create `<Route path="/login" element={}/>`

Go to `Header.js`
Go to `<span className="header__optionLineTwo">Sign In</span>`
Surround it with a link
```
        <Link to='/login'>
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
```

Build `Login` Component `<Login />`
```
import React from 'react';

function Login() {
  return (
    <div className="login">
    </div>
  )
}

export default Login


```
Create `Login.css`
In `App.js`, `import Login from './Login'`

Add image
`object-fit: contain;` keeps the object ratio when resizing
Add styles

Go back to `Login.js`
**We're going to use state to track what's in the input fields**

```
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
```

Go to
```
          <h5>Email</h5>
          <input type='text'></input>
```
and change it to `<input type='text' value={email}></input>` to map the value email to the email state. this connects the 2 things. Every time the user types something in, it triggers an onChange, which gives us an event.
```
          <input type='text' value={email} onChange={event => setEmail(e.target.value)}></input>

```
Now as the user types in, we're setting the email
Don't use null --- use ''
Do the same for password

Now state and values are tied!!!!!!

Now we want to trigger functions when those buttons are clicked. Add onClick for Sign In button.
```
  <button
            className="login__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
```
Create signIn func.
We don't want it to refresh!! therefore, `event.preventDefault()`
We don't like refreshing in react

now do the other button

### Firebase Reminder
Go to the firebase project, project settings, scroll down to config, put it in firebase.js

# User Auth
Go to Firebase
On the left, go to the Authentication tab
Go to Sign-In Method
Go to Email/Password
Click the 1st enable
Click save

`npm install firebase`
`sudo npm install -g firebase-tools`

Go to `firebase.js`
```
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
```
Initialize our app and set up everything
`const firebaseApp = firebase.initializeApp(firebaseConfig);`

Firestore is the real-time database from Firebase
Initialize the db with `const db = firebaseApp.firestore();`

Initialize auth `const auth = firebase.auth();`

`export { db, auth };`

----

Let's go back to `Login.js`
`import { auth } from './firebase';`

We're registering first
```
  const register = (event) => {
    event.preventDefault();

    // some fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authObj) => {
        // successfully created a new user
        console.log(authObj);
      })
      .catch((error) => alert(error.message))
  }

```

Now let's try adding an account
`test123@gmail.com`
`testpass`

IT WORKEDDDD

To redirect them to the home page, we're going to pull in useHistory from ReactRouter in `Login.js`
`import { Link, useHistory } from "react-router-dom";`

`const history = useHistory();`
this allows us to programmatically change the url

After registering,
```
if(auth) {
          history.push('/')
        }
```
this forces a redirect

Now let's try adding another account
`test1234@gmail.com`
`testpass`

It redirects us!

----

Now let's implement logging in
Go to the `signIn` func in `Login.js`

```
  const signIn = (event) => {
    event.preventDefault();

    // some fancy firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

```

Let's try
`test123@gmail.com`
`testpass` sign in

IT WORKSSSSSSS

---
Now how do we keep track of who's signed-in..?
We're going back to `App.js`

We're creating a listener to keep track

In `App.js`,
`import { auth } from './firebase';`
`import React, { useEffect } from 'react';`

```

```

When we do this auth with Firebase, even if we refresh the page, it will log us back in if we were already logged in

We're going to store the user inside of the React Context API (our store)

Go to `Reducer.js`,
```
export const initialState = {
  basket: [],
  user: null,
};
```
Add user

Back to `App.js`
```
import { useStateValue } from './StateProvider';

  // React Context API
  const [{}, dispatch] = useStateValue();
```

This fires off an event and shoots it into the data layer.
Every log-in, it shoots the info to the data layer.
Log outs remove the user from the data layer

```
      if(authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
```

Our data layer is connected with firebase

Since we dispatched the 	`SET_USER` action...
In `Reducer.js`, add in the case that listens for this

```
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
```
Twitch and InstaCart use Firebase

#### Now we need log-out functionality
Go to `Header.js`
`import { auth } from './firebase';`

`const [{ basket, user }, dispatch] = useStateValue();`

```
  const handleAuthentication = () => {
    if(user) {
      // this line is all we need to sign out with firebase
      auth.signOut();
    }
  }
```
and
```
        <Link to={!user && '/login'}>
          <div
            className="header__option"
            onClick={handleAuthentication}
          >
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
```

Wo-hoo!

## Get Username on Checkout Page
### Now let's pull user from state
Go to `Checkout.js`
Login & go to basket
`const [{ basket, user }, dispatch] = useStateValue();`

`<h3>Hello, {user?.email}</h3>`

## Deployment
make sure you've done `sudo npm install -g firebase-tools`

`firebase login`
`firebase init`, click Hosting (Configure), click Use an existing project, click amazon-clone
What do you want to use as your public directory?  (public) `build`

?  Configure as a single-page app (rewrite all urls to /index.html)?  Yes (TYPE y)

Now we've prepped Firebase stuff!!!!

`npm run build`
This gets rid of unoptimized stuff like hot reloading or dev things

**When we make changes to the app, we need to run `npm run build` again**

(Now there's a build folder)

`firebase deploy`

It gives us our hosting URL!!!
https://clone-554ae.web.app


## Add item to DB, Pull it into our app from the DB, & Render it
