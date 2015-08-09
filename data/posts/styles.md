---
title: Styles
id: 4
filename: styles.md
date: '2015-08-09T18:43:20.339Z'
updated: 2015-08-09T18:47:05.138Z
excerpt: Universal uses virtually no CSS. Learn how JavaScript and React’s component architecture makes this a great option for handling styles.
draft: false
---
With the exception of the `<Prose>` component used for each post, this application uses zero CSS and avoids any complications involved with the cascade.

To maintain consistency, fonts, colors, and a spacing scale are generated in the `util/styles.js` module. The styles module uses
[spectralize](https://github.com/jxnblk/spectralize)
to generate color scales
and
[simple-modular-scale](https://github.com/jxnblk/simple-modular-scale)
to generate a sizing scale for fonts and spacing.

Any component can import the styles module and code duplication is prevented through the use of React components.
