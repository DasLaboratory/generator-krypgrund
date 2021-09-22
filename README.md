# @das.laboratory/generator-krypgrund

> This [Yeoman](http://yeoman.io) generator will set up a workspace equipped with BigGulp™ and a whole set of linting and formatting tools and all the packages required to pull this off.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Known Vulnerabilities][snyk-image]][snyk-url] [![Libraries.io dependency status for GitHub repo][shields-librariesio-image]][shields-librariesio-url] [![npm (scoped)][shields-npm-image]][shields-npm-url]

---

## ⚠️ WARNING ⚠️

Even though I heavily tested this generator, I would highly recommend **MOVING YOUR `interactive_workspace` FOLDER** (or wherever your precious work is located) to a secure location **OUTSIDE OF YOUR EXISTING `~/krypgrund` FOLDER BEFORE YOU CONTINUE!!**

Why not to your desktop? 🙈

You should move the workspace folder back into the krypgrund folder only after the generator is completely done!

💀 **SERIOUSLY!** 💀

But as I said, it should be totally safe! 😬 Just imagine...

---

## Installation

First, install [Yeoman](http://yeoman.io) and [@das.laboratory/generator-krypgrund](https://www.npmjs.com/package/@das.laboratory/generator-krypgrund) using [npm](https://www.npmjs.com/)  
(I assume you have [node.js](https://nodejs.org/) already installed, if not I strongly suggest using [nvm](https://github.com/nvm-sh/nvm) on macOS):

```bash
npm install -g yo
npm install -g '@das.laboratory/generator-krypgrund'
```

Then set up your development environment by running

```bash
yo '@das.laboratory/krypgrund'
```

You can update `generator-krypgrund` using

```bash
npm install -g '@das.laboratory/generator-krypgrund'
```

On macOS this should all be pretty straightforward, but...

## Notes On Windows

![big-gulp-on-windows](/_assets/big-gulp-on-windows.jpg)
Node.js projects on Windows are a curious animal. And I can't call myself a Windows power user anymore. Not by a long shot. But I managed to successfully install the 'krypgrund' development environment under different circumstances and run [Big Gulp™](https://www.npmjs.com/package/@das.laboratory/gulp-plugin-interactive):

-   using [Ubuntu v20.04](https://ubuntu.com/wsl) running in [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) (WSL 2 v5.4.72 I think. Not easy to say for sure.)
-   using [Windows PowerShell 5.1](https://docs.microsoft.com/en-us/powershell/) (v5.1.19041.1151)
-   using [PowerShell 7](https://github.com/PowerShell/PowerShell) (v7.1.40)

When it comes to Node.js it was

-   [Node.js](https://nodejs.org/) v14.17.0
-   [npm](https://docs.npmjs.com/about-npm) v7.24.0

The problems I found were connected to using the `clear` command to clear the screen, used in `generator-krypgrund` as well as `vscode-config-interactive`. I fixed that in the packages.

Another problem was that I couldn't build the binaries for a (optional) dependency of [ssh2](https://www.npmjs.com/package/ssh2). Namely [cpu-features](https://www.npmjs.com/package/cpu-features). I could fix this by manually installing [CMake](https://cmake.org/) v3.21.3 ([cmake-3.21.3-windows-x86_64.msi](https://github.com/Kitware/CMake/releases/download/v3.21.3/cmake-3.21.3-windows-x86_64.msi)) and (I think more importantly) updating npm from v6.14.13 to v7.24.0.

I also found that the quotes in the commands used to install krypgrund are necessary (because of the @ symbol).

#### Get Version Information

###### Windows Subsystem for Linux (WSL)

From the WSL shell prompt run `uname -r`.
From a PowerShell prompt run `wsl -l -v` (less informative).

###### (Windows) PowerShell

From the WSL shell prompt run `Get-Host | Select-Object Version`. Yup. Seriously. Talking about esoteric.

###### Node.js/npm

From wherever run `node --version` or `npm --version`.

#### Get Updates

###### Windows Subsystem for Linux (WSL)

See here: [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install)

###### (Windows) PowerShell

For PowerShell v5.1 go here: [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-5.1)
For PowerShell v7.1 go here: [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.1)

###### Node.js/npm

Get the full Node.js package here: [nodejs.org](https://nodejs.org/en/download/).
To update npm run `npm install -g npm`.

## Cheers,

[Nicolas](https://daslaboratory.com)

[npm-image]: https://badge.fury.io/js/%40das.laboratory%2Fgenerator-krypgrund.svg
[npm-url]: https://www.npmjs.com/package/@das.laboratory/generator-krypgrund
[travis-image]: https://app.travis-ci.com/DasLaboratory/generator-krypgrund.svg?token=BnnzuzzfzNLziSeX8ygq&branch=main
[travis-url]: https://app.travis-ci.com/github/DasLaboratory/generator-krypgrund
[daviddm-image]: https://status.david-dm.org/gh/DasLaboratory/generator-krypgrund.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/DasLaboratory/generator-krypgrund
[coveralls-image]: https://coveralls.io/repos/github/DasLaboratory/generator-krypgrund/badge.svg?branch=main
[coveralls-url]: https://coveralls.io/github/DasLaboratory/generator-krypgrund?branch=main
[snyk-url]: https://snyk.io/test/github/DasLaboratory/generator-krypgrund
[snyk-image]: https://snyk.io/test/github/DasLaboratory/generator-krypgrund/badge.svg
[shields-librariesio-url]: https://libraries.io/github/DasLaboratory/generator-krypgrund
[shields-librariesio-image]: https://img.shields.io/librariesio/github/DasLaboratory/generator-krypgrund
[shields-npm-url]: https://www.npmjs.com/package/@das.laboratory/generator-krypgrund
[shields-npm-image]: https://img.shields.io/npm/v/@das.laboratory/generator-krypgrund
