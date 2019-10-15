# No Mouse Days

Ever wanted a package that disables the mouse cursor one day a week so you can test keyboard accessibility as a team? No? Well here you go anyway.

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