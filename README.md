# meli-challenge

Meli Challenge

npm or yarn can be used

## Before Running API and APP

create environmnet variables files:

### API Example

MELI_SERVICE_ENDPOINT=https://apiexample.com
MELI_SECRET_KEY=meli_secret_pass_example

### APP

REACT_APP_MELI_SECRET_KEY=meli_secret_pass_example

## Run the api

```unix
cd meli-challenge-api
npm i
npm run start
```

## Debug the api (with vs code)

Go to debug section and just press on the green play arrow button for the configuration "Launch API".

## Run the app

```unix
npm i
npm run start
```

you might need to use another port if the api is running in the same system

### To update models (Both API and App)

#### Windows

```unix
npm run update-models-windows
```

#### Mac

```unix
npm run update-models-mac
```

## Features

### Usability

    - Tab selector
    - Enter on search bar and selecting items
    - Responsive (Not fully)
    - TODO: media queries for responsive

### SEO

    - TODO: test with lighthouse
    - TODO: SSR

### Performance

    - light, as little and small libraries addded as posible
    - TODO: SSR
    - production build
    - TODO: check for meli api optimizations

### Scalability

    - React component structure for future compoennts
    - Scss common variables for future styles
    - Models package
    - Clear variable/function names
    - No commented code
    - Reusable components
    - Models package
    - TODO: use react w/hooks

### Security

    -Secret key encription between apps
    -Environment variables no committed
    -TODO: check query input from APP and API
