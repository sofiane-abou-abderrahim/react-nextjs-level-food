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
