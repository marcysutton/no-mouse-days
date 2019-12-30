# No Mouse Days

Ever wanted a package that disables the mouse cursor one day a week so you can test keyboard accessibility as a team? No? Well here you go anyway.

This package can be installed into a modern JavaScript app to inject a CSS styling developer tool that disables the mouse cursor. It's intended to encourage development of better keyboard support through browser testing (you are testing, aren't you?).

## Prerequisites

- Node.js
- npm

## How to use

1. Install the package

```sh
npm install no-mouse-days
```

2. Import the package into your project for all times

```js
import "no-mouse-days"
```

3. Import and conditionally apply it in development, if you want

```js
if (process.env.NODE_ENV === 'development') {
    import("no-mouse-days")
        .then((data) => {
         // no-op
        })
}
```

4. Or apply it one day of the week, e.g. on Mondays

```js
let date = new Date()
let dayOfWeek = date.getDay()

if (dayOfWeek === 1) {
    import("no-mouse-days")
        .then((data) => {
         // no-op
        })
}
```

## Example

This project includes a small example that you can use to test the No Mouse Days script locally in a browser.

Go into the [example directory](https://github.com/marcysutton/no-mouse-days/tree/master/example) and install dependencies:

```
cd example
npm start
```

With a server successfully running, you can then visit the provided localhost URL such as `http://localhost:1234`.
