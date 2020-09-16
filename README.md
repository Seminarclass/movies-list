This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# The Nominator

![Screenshot](/public/home.png?raw=true "App Screenshot")

My take on Shopify's UX & Web Developer Challenge - [The Shoppies: Movie awards for entrepreneurs](https://tinyurl.com/yx9vsbj6)

The Nominator is a React App that allows users to:
- Search OMDB (GET REQ limited to 10 results) for films
- Nominate searched films in the nomination list (via slider menu)
- Nominated film count to show the total number of nominations (via hamburger menu)
- Cookies to persist nominations list
- Toaster notifications for searching (and REQ error), adding, and removing films
- Firebase Firestore for sharing nominations list via URL

Built with **React** + **TypeScript** and **Tailwind CSS** with continuous deployment to **Netlify**.

## Notable Dependencies

- `axios`
- `copy-to-clipboard`
- `dotenv`
- `firebase`: Firestore
- `@fortawesome`: brands, regular, solid
- `react-cookie`
- `react-router-dom`: For `useParams` hook to get URL parameters
- `react-toast-notifications`
- `tailwindcss`
- `tailwindcss/ui`
- `typescript`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Generates `index.css` TailwindCSS styles in watch mode and Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn deploy`

Generates `index.css` TailwindCSS styles and builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
