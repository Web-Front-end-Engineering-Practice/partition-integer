# partition-integer

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Integer partitions, see <https://zh.wikipedia.org/wiki/%E6%95%B4%E6%95%B8%E5%88%86%E6%8B%86>.

# usage

    $ npm install partition-integer --save

```js
var partitionInteger = require('partition-integer').partitionInteger;
partitionInteger(3)//4, due to 3=(3)=(1+1+2)=(2+2)=(1+1+1+1)
partitionInteger(4, 2)//, due to (4)=(2+2)=(1+3)
```

# author
 - yanni4night@gmail.com

# license
Apache License 2.0

[npm-url]: https://npmjs.org/package/partition-integer
[downloads-image]: http://img.shields.io/npm/dm/partition-integer.svg
[npm-image]: http://img.shields.io/npm/v/partition-integer.svg
[travis-url]: https://travis-ci.org/Web-Front-end-Engineering-Practice/partition-integer
[travis-image]: http://img.shields.io/travis/Web-Front-end-Engineering-Practice/partition-integer.svg
[david-dm-url]:https://david-dm.org/Web-Front-end-Engineering-Practice/partition-integer
[david-dm-image]:https://david-dm.org/Web-Front-end-Engineering-Practice/partition-integer.svg
[david-dm-dev-url]:https://david-dm.org/Web-Front-end-Engineering-Practice/partition-integer#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/Web-Front-end-Engineering-Practice/partition-integer/dev-status.svg