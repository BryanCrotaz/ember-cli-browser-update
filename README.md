# Ember-cli-browser-update

This README outlines the details of collaborating on this Ember addon.

This project is an ember-cli addon for the [Browser Update](http://browser-update.org/ "Browser Update") project.


## What does it do?
It warns the user with a small header bar that their browser is out of date and needs to be upgraded. 

You can provide the warning message and choose your minimum browser specs amongst other things. 

By default the minimum recommended browser is:
+ IE >9
+ Firefox >15
+ Opera >12.1
+ Safari > 5.1

## Content Security Policy

If you are using [CSP](http://www.html5rocks.com/en/tutorials/security/content-security-policy/) you must add browserupdate.org as a script source:
```
Content-Security-Policy: script-src 'self' browserupdate.org
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
