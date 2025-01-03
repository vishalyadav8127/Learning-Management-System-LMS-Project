# React + Vite

lms-frontend

install dependencies

npm i

run the server

npm run dev

install tailwind css
```
//npm install -D tailwindcss postcss autoprefixer//
```

create taiwind config file
```
npx tailwindcss init
```
add file extentions to tailwind config file in the content property
```
"./src/**/*.{html,js}","./index.js"
````

add the tailwind directive at the top of the 'index.css' file
```
//@tailwind base;
@tailwind components;
@tailwind utilities;//

add the following details in the plugin property of tailwind config
//
require("daisyui"),require("@tailwindcss/line-clamp")
//
````
create postcss.config.js file
//
npx tailwindcss init -p
//

```

//
npm instal @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
//

"react/prop-Types":"off",
Added 404 Not Found Page