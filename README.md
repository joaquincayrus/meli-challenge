# meli-challenge

Meli Challenge

npm or yarn can be used

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

you mught need to use another port if the api is running in the same system

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

    - Clear variable/function names
    - No commented code
    - Reusable components
    - Models package
    - TODO: use react w/hooks

### SEO

    - TODO: test with lighthouse
    - TODO: SSR

### Performance

    - light, as little and small libraries addded as posible
    - TODO: SSR
    - production build

### Scalability

    - React component structure for future compoennts
    - Scss common variables for future styles
    - Models package

### Security

    -Secret key encription between apps
    -Environment variables no committed
    -TODO: check query input from APP and API
