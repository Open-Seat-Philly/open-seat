# Open Seat

Civic Engagement Launchpad 2017, Open Seat Finder

### Development

First, you'll need to [install NodeJS](#installing-nodejs). Great, now you're ready!

Install dependencies. You'll want to do this every time you `git pull`.

```
$ npm install
```

Now, you can start the development server:

```
$ npm start
```

Open your browser to `localhost:8081`. Hot reloading is enabled, so as you change the code, you'll see the browser update in real-time.

### Deploying to GitHub Pages

Deployments work like this:

1. Compile and minify all files (`npm run dist`).
2. Push the dist folder to the `gh-pages` branch.

This process is automated by running:

```
$ npm run deploy
```

### Installing NodeJS

If you're on a Mac, I'd recommend installing with homebrew.

```
$ brew install nodejs
```

If you're on a PC, there's actually two steps:

1. Stop using a PC.
2. Just kidding. There's an [installer](https://nodejs.org/). But seriously, get a grip.

Once you've installed it, make sure you've got a recent version. Anything 6+ should be fine.

```
$ node --version
v6.3.0
```
