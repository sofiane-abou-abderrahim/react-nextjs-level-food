# Foodies Fullstack React Apps With NextJS

## Exercise

1. create three routes

- `/meals`
- `/meals/share`
- `community`

2. create a dynamic route

- `/meals/<some slug>`

## 0. Creating a NextJS Project + Exercise

1. go to `https://nextjs.org/` to see the docs
2. open your terminal and run `npx create-next-app@latest`
3. run `npm install`
4. run `npm run dev`
5. do the exercice tasks

## 1. Exercise: Solution

1. create three new routes: `/meals`, `/meals/share` & `/community`

   1. create the `/meals` route

   - inside the `app` folder, set up a new route & a new path segment that can be entered in the URL by adding a `meals` folder
   - inside of this `app/meals` folder, add a `page.js` file to show something on the screen
   - in this `meals/page.js` file, export a React functional component named `MealsPage()` for example

   2. create the `/meals/share` route

   - inside of the `app/meals` folder, create a nested `share` folder, again with that path segment you want to have as a folder name
   - inside of the `meals/share` folder, add a new `page.js` file to be able to visit that page
   - in `meals/share/page.js`, export a React component function named `ShareMealPage()` for example

   3. create a `/community` route

   - inside of the `app` folder, add a sibling folder to the `meals` folder which you name `community`
   - inside of it, add a `page.js` file
   - in this file, export a React component function named `CommunityPage()` for example

2. add some links to allow users to navigate between those routes

   1. start with the home page

   - in `app/page.js`, add a `<p>` that should display a `<Link>` to the `MealsPage`
   - add another link to the `ShareMealPage`
   - add a last link to the `CommunityPage`

3. create a dynamic route that allows users to go to `/meals/<some slug>` (some dynamic segment/some identifier of the meal)

   1. in `app/meals`, add another `[mealSlug]` subfolder which is a sibling of the `share` folder
   2. inside of it, add a `page.js` file
   3. in it, export a component function named `MealDetailsPage()`

## 2. Adding a Custom Component To A Layout

Add a header, navigation & logo to this website

1.  add a `main-header.js` file inside of a `components` folder outside the `app` folder
2.  in this file, export a React component function named `MainHeader()`
3.  in `app/layout.js`, output this `<MainHeader>`

## 3. Styling NextJS Project: Your Options & Using CSS Modules

1. importing `globals.css` files
2. Tailwind CSS
3. NextJS CSS modules
   1. create a new `main-header.module.css` file next to the `main-header.js` file
   2. in this file, set up the CSS classes & styles for the main header
   3. import this file into this `main-header.js` file, like this `import classes from './main-header.module.css';`
      1. to make those CSS classes available in this file
      2. and scope those classes to this `MainHeader` component
   4. use this `classes` to access certain properties (the classes in `main-header.module.css`)

## 4. Optimizing Images with the NextJS Image Component

in NextJS, you have a special built-in `<Image>` component which outputs images in a more optimized way than the `<img>` element,
for example,

- by lazy loading images under the hood
- simplify the process of setting up responsive images
- and so on

1. in `main-header.js`, replace the default `<img>` element with the `<Image>` element imported from `next/image`
2. set the `src` to the overall object `{logoImg}`, and not to the `.src` property value
3. as you can learned on the browser console, you should add the `priority` property to this image since it will always be visible when this page loads

## 5. Using More Custom Components

Outsource the header background from `app/layout.js` into a separate component

1. in the `components` folder, add a `main-header-background.js` file
2. in there, export a component named `MainHeaderBackground()`
3. grab the `<div>` from `layout.js` & paste it in `main-header-background.js`
4. add a `main-header-background.module.css`
5. cut the `.header-background` class & the `svg` selector from `app\globals.css` & paste in `main-header-background.module.css`
6. in `main-header-background.js`, import the classes from `main-header-background.module.css` & use them
7. in `components\main-header.js`, output the `<MainHeaderBackground>`
8. in the `components` folder, group all the related header files together into a sub folder named `main-header`

## 6. Populating The Starting Page Content

Now that you finished the main navigation header, let's continue working on this main page content (starting page content)

1. in `app/page.js`, set up some nested page specific `<header>` & below it the `<main>` section of this page
2. next to this file, add a new `page.module.css` to apply some styles to it

## 7. Preparing an Image Slideshow

Add a little image slideshow which automatically goes through some food images that should show up

1. in the `components` folder, add a new subfolder called `images` & in there, add a `image-slideshow.js` file
2. in this file, build a new component named `ImageSlideshow`
3. next to it, add a new `image-slideshow.module.css` to apply some styles to it
4. in `app/page.js`, output the `<ImageSlideshow>` component

## 8. React Server Components vs Client Components - When To Use What

In order to make this `ImageSlideshow` component work

1. in `components\images\image-slideshow.js`, add the `'use client';` directive at the top of this file
2. with that you can now output the `<ImageSlideshow>` component in `app\page.js`

## 9. Using Client Components Efficiently

Now that you finished this starting page, let's continue working on this Community page

1. populate `app\community\page.js` with some dummy content
2. next to it, add a `app/community/page.module.css` file to apply some styles to it
3. in `components\main-header\main-header.js`, highlight the active navigation link
   1. get hold of the currently active path with help of the NextJS `usePathname()` hook & store it in a `path` constant
   2. use this `path` constant in the `<Link>` to add the `active` class conditionally
   3. add the `'use client';` directive at the top of this file
4. add a new `nav-link.js` & export a `NavLink` component function & add a `nav-link.module.css` file next to it
   1. in `nav-link.js`, paste the `<Link>` cut from `components\main-header\main-header.js`
   2. make the `<NavLink>` component function configurable
   3. convert it into a client component by adding the `'use client';` directive at the top of this file
   4. cut the link & the class related CSS styles from `main-header.module.css` & paste them in `nav-link.module.css`
   5. add `import classes from './nav-link.module.css'`
5. back in `components\main-header\main-header.js`, make sure that this component is not converted into a client side component by
   1. getting rid of `'use client';` & `usePathname()`
   2. outputting this newly added `<NavLink>` component

## 10. Outputting Meals Data & Images With Unknown Dimensions

Now that you worked on the starting page, the community page & improved the header,
it's time to work on that meals page & output some meals there
before you then thereafter will make sure that users can also share meals

1. in `app\meals\page.js`, output a bunch of meals which you will soon store in a database
   1. set up the base markup/structure of this page
   2. next to this file, add a new `page.module.css` for applying some styles to it
2. add a separate component for outputting the meals
   1. in the `components` folder, add a `meals` folder
   2. in there, add a `meals-grid.js` file for outpuuting a bunch of meal items in a grid
   3. next to it, add a `meals-grid.module.css` for applying some styles to it
   4. in the same `meals` folder, add another file named `meal-item.js`
   5. next to it, add a `meal-item.module.css` for applying some styles to it
   6. output the `<MealItem>` component in `meals-grid.js`
3. in `meals/page.js`, output the `<MealsGrid>` component (you have no data yet, so you won't see anything on the screen)

## 11. Setting Up A SQLite Database

In order for this `<MealsGrid>` component in `meals/page.js` to be useful & to see something on the screen, you need meals
And for that you can set up a basic database that would store some dummy meals & that would later also store meals shared by users

1. in your terminal, run `npm install better-sqlite3` which is a package that will allow you to work with a sqlite database
2. add a `initdb.js` file in your root project directory to create a database & populate it with some dummy data
3. in your terminal, run `node initdb.js` to have some dummy meals available & have a `meals.db` file created (the sqlite database)

## 12. Fetching Data By Leveraging NextJS & Fullstack Capabilities

When it comes to loading data in a NextJS application, you got a couple of different options:

- you could fetch the data as you would do it in any Vanilla React application, for example with the `useEffect()` hook & in there the `fetch()` to send a request to a backend
- in a NextJS application, you already have a backend & since the `MealsPage` component, by default, runs on the server, you can directly reach out to the database

1. in your root project folder, add a new `lib` folder & in there, add a new `meals.js`
2. in `lib/meals.js`, write the code that reaches out the database
3. in `app\meals\page.js`, call `getMeals()` inside the `MealsPage()` component function imported from `lib\meals.js` to get back your meals
4. with that done, pass these `{meals}` as a value to the `meals` prop in the `<MealsGrid>` component to render the data fetched from the database & the images from the `public` folder

## 13. Adding A Loading Page

It would be nice if you had some loading indicator whilst the page is loading when you visit it

1. next to `app\page.js`, add a new `loading.js` page
   - which just like `page.js` & `layout.js` is a reserved file name
   - this file will become active if the page next to it or any nested page or layout is loading data
   - and in that case that `loading.js` content is shown as a fallback until the data is there
2. next to `loading.js`, add a `loading.module.css` file for applying some styles to it

## 14. Using Suspense & Streamed Responses For Granular Loading State Management

The loading text basically occupies the entire screen
However, the header doesn't display and it doesn't depend on any loaded data at all
So, show this header instantly & only show the loading text whilst you're waiting for the meals to be fetched

1. replace `loading.js` by `loading-out.js` so that it doesn't have any special purpose anymore (so you won't use it anymore)
2. move the `loading-out.js` & the `loading.module.css` file into the `meals` folder (it was the place where you should use at first)
3. now, go to `app\meals\page.js` because NextJS gives a more granular way of handling loading states
   1. basically, you can go to the place where you have some operation that might take a bit longer, like here in `<MealsGrid>`
   2. you can then create a separate component (here you can do it in `app\meals\page.js` since it would be a component that is closely connected to this `MealsPage`)
   3. name this component `Meals`
   4. this is now this component that will fetch the data
   5. this component will now return this `<MealsGrid>`
   6. and now the `<Meals>` can be output in the `MealsPage()` component function
      - the advantage is that now you outsourced the data fetching part into a separate component
   7. so you can now wrap this `<Meals>` component with the `<Suspenses>` component that is built into React

## 15. Handling Errors

Besides `page.js`, `layout.js` & `loading.js`, you can also add an `error.js`, which is another reserved file name
which would handle potential errors that might be generated by your pages & components,
for example, if loading some data fails

1. to simulate this, let's go `lib/meals.js` & throw an error
2. add some error handling, by adding `app\meals\error.js`
3. this file must be a client component, so add the `use client` directive at the top of it
4. go back to `lib/meals.js` & comment out that error

## 16. Handling "Not Found" States

There is another kind of error that could occur when a user enters an invalid URL
NextJS has a default 404 page to handle that
You can change it, if you want to

1. add a `not-found.js` file which is a reserved file name to the root of your project for example
2. in it, export a `NotFound()` component function

## 17. Loading & Rendering Meal Details via Dynamic Routes & Route Parameters

1. go to `app\meals\[mealSlug]\page.js` & set up the base markup/structure of this page which contains a `header` & a `main` section
   1. the `header` section outputs the title, the creator's name & a summary
   2. the `main` section outputs the instructions that are stored for every meal as HTML code by targetting the `dangerouslySetInnerHTML` prop to avoid cross site scripting attacks
2. next to it, add a `page.module.css` for applying some styles to it
3. in order to have some data to output in your `MealDetailsPage`, go back to `lib\meals.js` & export a new `getMeal()` function which accepts a `slug` as a parameter
4. go back to `app\meals\[mealSlug]\page.js` & call `getMeal()` to store every meal in a `meal` constant
5. `getMeal()` needs that `slug` which is that part that's encoded in the URL that is called with help of
   1. this `mealSlug` placeholder which you get via the special `{params}` prop that's available in every `page.js` file
   2. which contains an object as a value where any dynamic path segment that's configured for this route will be stored as a key/value pair
   3. so `mealSlug` will be used as a key
   4. and the actual value encoded in the URL will be used as a value for that key
   5. and it is that value that you need to get to look for that value in the database
   6. so, pass `params.mealSlug` to `getMeal()` & that would be that identifier that allows you to fetch a meal from the database
6. use this `meal` constant to populate the JSX code with the meal data
7. use `{meal.instructions.replace()}` & a regular expression to output the line breaks

## 18. Throwing Not Found Errors For Individual Meals

If a user tries to look for a meal that doesn't exist, you get "An error occured" page,
because you try to get the `instructions` on undefined, because you weren't able to load a meal
But, it's not actually an error that occurs, instead the user just didn't find the requested meal

1. in `app\meals\[mealSlug]\page.js`, check if `meal` is undefined & then show the closest `not-found.js` or `error.js` page available in this project
2. to trigger that, call the special `notFound` function provided by NextJS and imported by `next/navigation`
3. add a new `not-found.js` file in `app\meals` so that you can output a more customized not found error

## 19. Getting Started with the "Share Meal" Form

1. in `app\meals\share\page.js`, set up a form to add our own meals
2. next to it, add a `page.module.css` for applying some styles to it

## 20. Getting Started with a Custom Image Picker Input Component

1. in the `components\meals` folder, add a new `image-picker.js` file
   1. in it, export a `ImagePicker()` component function
   2. in this function, output some markup & handle the picking process
2. next to it, add a `image-picker.module.css` for applying some styles to it
3. back in `app\meals\share\page.js`, use this `<ImagePicker>` component
4. make this image picker a bit more fancy by replacing the default button with your own nice button

## 21. Adding an Image Preview to the Picker

To show a preview of the picked image, you need to handle the event that an image was picked
and then store some state so that you can update the UI & show up a preview as soon as you have an image

1. in `components\meals\image-picker.js`, add a `pickedImage` state & `setPickedImage` updating function
2. add a second event handler function named for example `handleImageChange()`
3. which should be trigger whenever the `<input>` has a new value, so add to it `onChange={handleImageChange}`
4. configure that `handleImageChange()` function to get hold of that `event` with help of `event.target.files[0]`
5. to show this file as a preview, convert it into a data URL which is a value that can be used as an input/source for an image element with help of
   1. the `new FileReader()` class built into JavaScript
   2. and the `readAsDataURL()` method, by passing the `file` to it like this `fileReader.readAsDataURL(file);`
   3. get hold of that data URL that's been generated by assigning a value to the `onload()` property of this `fileReader` object
   4. you get access to the generated URL by accessing `fileReader.result` which will be that generated URL
   5. store this generated URL in your state like this `setPickedImage(fileReader.result);`
6. use this `pickedImage` state to show a preview

## 22. Introducing & Using Server Actions for Handling Form Submissions

When it comes to handling form submissions:

- you could do that as you do it with most React projects
  - by adding the `onSubmit` prop to the `form` element
  - & defining a function that should be executed when the form is submitted
  - then, in there, prevent the browser default, manually collect all the data & send it to a backend
- in NextJs, you already have a backend, that's why it gives you a more powerful & convenient pattern:

1. in `app\meals\share\page.js`, create a function which you could call `shareMeal`
2. inside of it, add the special `use server` directive which create a so called server action which is a function that's guaranteed to execute on the server and only there
3. you must add `async` in front of the `shareMeal()` function to really turn this `use server` into a server action
4. this feature exists (in React, not just in NextJS) so that you can assign this server action as a value for the `action` prop on a function
   - so here `action={shareMeal}`, you assign `shareMeal` as a value on the `action` prop of the `form`
   - this pattern will ensure that when this form is submitted, NextJS will behind the scenes create a request and send it to this NextJS server that's serving the website, so that `shareMeal()` function gets triggered & you can then handle the form submission there, but on the server, not in the client
5. this `shareMeal()` function automatically receives the `formData` that was submitted, so pass `formData` to it as a parameter
6. then, use that `formData` object to handle the submitted data, for example create a `meal` object by extracting meal data from that `formData`
7. the next step is to store this `meal` data in a database
   - though, the image should be stored on the file system and then a path of the image should be stored in a database
8. but, before that just console log the `meal` to see some output on the server side in your terminal for now

## 23. Storing Server Actions in Separate Files

There also is another way to add a server action:

- you can add it in a component like you did before, but this would only work if the component in which you are adding it is not a client component
- you might not want to have your server-side form submission handling logic in the same file as your JSX code

1. store your server action in a separate newly added `actions.js` file in the `lib`
2. at the top of this file you have to add the `use server` directive
3. back to `app\meals\share\page.js`, cut the `shareMeal()` function
4. paste it in `lib\actions.js` & export it
5. back to `app\meals\share\page.js`, import it & use it
6. now you would be able to convert this component into a client component if you needed to

## 24. Creating a Slug & Sanitizing User Input for XSS Protection

let's now work on storing that data

1. in `lib\meals.js`, add a new `saveMeal()` function which expect a `meal` object as an input for saving a meal
2. inside this function,
   1. generate a slug based on the title, because you want to store a slug in your database for every meal
      - in your terminal, run `npm install slugify`
      - create a new `slug` by calling `slugify(meal.title, {lower: true})`
   2. sanitize the content sent by the user to protect your site against cross site scripting attack
      - in your terminal, run `npm install xss`
      - remove any harmful content from the `instructions` by calling `xss(meal.instructions)`
3. in `lib\meals.js`, import these 2 packages
4. with all that done, you prepared all the data except for the image

## 25. Storing Uploaded Images & Storing Data in the Database

The image should be stored on the file system, not in the database
so, you can store the uploaded files in the `public` folder

1. in `lib\meals.js`, get the `extension` of the uploaded image
2. generate a unique `fileName`
3. write the `fileName` in a file in the `public` folder with help of the file system `fs` API provided by NodeJS
   - import `fs` from `node:fs`
   - use `fs` to call `createWriteStream()` to which you should pass a path
   - from it, get a `stream` which you can use to write to that image in that path with help of `write()` which wants a `chunk` & a function
     - in order to get the chunk, you should convert the image into a `bufferedImage` with help of the `arrayBuffer()` method
     - the function takes an `error` argument & should throw an error message in case there is an error
4. override the `meal.image` that stored in your `meal` object (in `lib\actions.js`) with the `/images/${fileName}` path to the image where we stored it
5. with that you finished the preparation for this `meal` object & now you can save it in the database with help of `db.prepare().run()`
6. go back to your server action to `lib\actions.js` & call `saveMeal()` & redirect()
