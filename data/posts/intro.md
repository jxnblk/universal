---
title: What is Universal?
id: 1
filename: intro.md
date: '2015-08-01T00:00:00.000Z'
updated: 2015-08-09T18:47:51.446Z
excerpt: 'Universal is a work-in-progress React-based demonstration, boilerplate, and series of posts for exploring several current technologies. It shares code across the server and client and uses webpack hot loading for development.'
draft: false
---
This application uses
[React](http://facebook.github.io/react/),
[React Hot Loader](https://gaearon.github.io/react-hot-loader/),
[Redux](https://github.com/gaearon/redux),
[react-router](http://rackt.github.io/react-router/),
[webpack](http://webpack.github.io/),
[Node Express](http://expressjs.com/),
and
[Babel](https://babeljs.io/).

Universal has three modes: production, development, and static.
If you’re viewing this on <http://jxnblk.com/universal>, you’re seeing the static version,
which allows CRUD operation of posts in memory.
This doesn’t actually save anything, and refreshing the page will bring back the original data.

When running in production or development mode, it uses an API to read and write markdown files to disk.
The view layer of the application relies on React to render both static HTML and client-side JavaScript.
When JavaScript is disabled, routing and form submission is handled with plain HTML.
With JavaScript enabled, client-side routing and form submission takes over.
This is meant as a rough demonstration of building progressively enhanced applications with React.
