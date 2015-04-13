# Ember-cli-browser-update

This README outlines the details of collaborating on this Ember addon.

This project is an ember-cli addon for the [Browser Update](http://browser-update.org/ "Browser Update") project. 

## What does it do?

It warns the user with a small header bar that their browser is out of date and needs to be upgraded. 

You can use this to ensure that users do not experience missing functionality in your app because their browser
does not support something that your code requires.

You can customise the warning message to inform users about the degradation they will experience if they do not update.

You can choose your minimum browser specs amongst other things. 

By default the minimum recommended browser is:
+ IE > 9
+ Firefox > 2
+ Opera > 9.63
+ Safari > 2
+ Chrome > 10

## Content Security Policy

If you are using [CSP](http://www.html5rocks.com/en/tutorials/security/content-security-policy/) you must add browser-update.org as a script-src and img-src:
```
Content-Security-Policy: script-src 'self' browser-update.org; img-src 'self' browser-update.org;
```

## Configuration

Add a `browserUpdate` object to your environment:

```
var ENV = {
    browserUpdate: {
      vs: {i:9,f:2,o:9.63,s:2,c:10},
      test: true
    },
    ... // rest of environment
```

This config object is passed to browser-update as its `buoop` variable. Full documentation can be found at [Browser-Update](http://browser-update.org/customize.html).

The `test: true` parameter always shows the header bar regardless of the browser - useful for testing.

Default values set up in the service are:
```
browserUpdate: {
    vs: {i:9,f:2,o:9.63,s:2,c:10}
}
```
The `onshow`, `onclick` and `onclose` browser-update.org callbacks are hooked by the browser-update service and are exposed as events `show`, `click` and `close`.

## Installation

```
npm install --save-dev ember-cli-browser-update
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
