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
