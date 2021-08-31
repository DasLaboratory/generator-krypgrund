# BigGulp Developer Notes

### Publish new version to npm registry

##### Syntax

npm run bump:\<newversion> --message=\<commitmessage>

##### Options

**newversion:**
major | minor | patch | premajor | preminor | prepatch | prerelease

**commitmessage:**
A string that will become the commit message (if unclean, the repository will be committed before published on npm)

##### Example

```bash
$ npm run bump:patch --message="Fixed that thing with the error. Like... you know. That error."
```

See also:
[npm-version](https://docs.npmjs.com/cli/version)
[npm-publish](https://docs.npmjs.com/cli/publish)
[Updating your published package version number](https://docs.npmjs.com/updating-your-published-package-version-number)

### Debugging

###### Custom debugger

To see the custom debug output you can run BigGulp like this.

All output:

```bash
DEBUG=bigGulp* gulp build
```

Only for emoji related info:

```bash
DEBUG=bigGulp:emojis gulp build
```

For just the info related to modules:

```bash
DEBUG=bigGulp:module:* gulp build
```

Or just a specific module (upload for example):

```bash
DEBUG=bigGulp:module:upload gulp build
```

###### Gulp debugger

Set gulp to be verbose (which doesn't seem to do much):

```bash
gulp -LLLL build
```

###### Node.js debugger

This one is mucho verboso! Especially Babel. Be warned!

```bash
DEBUG=* gulp build
```

###### All of it

I don't think this does anything else than the one above. But who knows?

```bash
DEBUG=* gulp -LLLL build
```

Cheers,
Nicolas
