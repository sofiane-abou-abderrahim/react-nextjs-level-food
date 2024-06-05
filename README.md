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
