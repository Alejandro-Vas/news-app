# New York Tims news app

## Project made using JavaScript, TypeScript, React and Redux, based on Material UI

#### APP FEATURES:

- Fetching data from [The New York Times API](https://developer.nytimes.com/apis) (article search by query or tag and article preview in another page)
- Favorite articles list with saving in local storage
- Error handling
- Mobile adaptation with Material UI design

#### MAIN PAGE SCREENSHOT

<img src="https://github.com/Alejandro-Vas/news-app/blob/master/mainPage.png?raw=true" alt="main page screenshot"/>

#### MAIN PAGE MOBILES SCREENSHOT

<img src="https://github.com/Alejandro-Vas/news-app/blob/master/mainPageMobile.png?raw=true" alt="main page mobile screenshot" width="50%" height="50%" />

#### USAGE

```
git clone https://github.com/Alejandro-Vas/news-app.git
cd news-app
yarn
yarn dev
```



#### DEPLOYMENT

Deployed via [Netlify](https://www.netlify.com/)

https://lighthearted-custard-5024f1.netlify.app

#### MOCK API DEV SERVER 

```
yarn dev:api
 ```
Opens express dev server with mocked response on `localhost:3000` for local development without real API (need to change API_URL from `https://api.nytimes.com/` to `http://localhost:3000/`).

#### REALISED TECHNOLOGIES:

- HTML5
- JavaScript
- TypeScript
- ReactJS
- Redux / Redux-Toolkit
- React-router
- Material UI
- Express
