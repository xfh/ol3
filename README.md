# Geoadmin API

To compile use:

    $ make -f Makefile-ga build-ga

To run examples use:

    $ make -f Makefile-ga serve

Examples available at : http://localhost:3000/build/examples/

To run hosted examples use:

    $ make -f Makefile-ga hosted-examples-ga

Hosted example with compiled version : http://localhost:3000/build/hosted/master/examples/ga-custom.html

Hosted example with non-compiled version : http://localhost:3000/build/hosted/master/examples/ga-custom.html?mode=raw

List of version available:

    $ aws --profile [s3_profile] s3 ls s3://[bucket_name]/resources/api/

Publish a new version:

    $ aws --profile [s3_profile] s3 cp build s3://[bucket_name]/resources/api/4.3.2 --recursive --exclude "*" --include "ga.js" --include "ga-debug.js" --include "ga.css"
    $ aws --profile [s3_profile] s3 cp s3://[bucket_name]/resources/api/3.18.2/EPSG21781.js s3://[bucket_name]/resources/api/4.3.2/
    $ aws --profile [s3_profile] s3 cp s3://[bucket_name]/resources/api/3.18.2/EPSG2056.js  s3://[bucket_name]/resources/api/4.3.2/

Delete a version:

    $ aws --profile [s3_profile] s3 rm s3://[bucket_name]/resources/api/4.3.2 --recursive

# OpenLayers 3

[![Travis CI Status](https://secure.travis-ci.org/openlayers/openlayers.svg)](http://travis-ci.org/#!/openlayers/openlayers)
[![Greenkeeper badge](https://badges.greenkeeper.io/openlayers/openlayers.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/openlayers/openlayers/badge.svg?branch=master)](https://coveralls.io/github/openlayers/openlayers?branch=master)
[![OSGeo Project](https://img.shields.io/badge/OSGeo-Project-brightgreen.svg)](http://osgeo.org/)

[OpenLayers](https://openlayers.org/) is a high-performance, feature-packed library for creating interactive maps on the web. It can display map tiles, vector data and markers loaded from any source on any web page. OpenLayers has been developed to further the use of geographic information of all kinds. It is completely free, Open Source JavaScript, released under the 2-clause BSD License (also known as the FreeBSD).

## Getting Started

Use one of the following methods to use OpenLayers in your project:

* For use with webpack, Rollup, Browserify, or other module bundlers, install the [`ol` package](https://www.npmjs.com/package/ol):
    ```
    npm install ol
    ```

* If you just want to add a `<script>` tag to test things out, you can link directly to one of the full builds from [cdnjs](https://cdnjs.com/libraries/openlayers) (not recommended for production)

* For use with Closure Library (rare), install the [`openlayers` package](https://npmjs.com/package/openlayers) and read the [tutorial](http://openlayers.org/en/latest/doc/tutorials/closure.html).

## Supported Browsers

OpenLayers runs on all modern browsers that support [HTML5](https://html.spec.whatwg.org/multipage/) and [ECMAScript 5](http://www.ecma-international.org/ecma-262/5.1/). This includes Chrome, Firefox, Safari and Edge. For older browsers and platforms like Internet Explorer (down to version 9) and Android 4.x, [polyfills](http://polyfill.io) for `requestAnimationFrame` and `Element.prototype.classList` are required, and using the KML format requires a polyfill for `URL`.

## Documentation

Check out the [hosted examples](https://openlayers.org/en/latest/examples/), the [workshop](https://openlayers.org/workshop/) or the [API documentation](https://openlayers.org/en/latest/apidoc/).

## Bugs

Please use the [GitHub issue tracker](https://github.com/openlayers/openlayers/issues) for all bugs and feature requests. Before creating a new issue, do a quick search to see if the problem has been reported already.

## Contributing

Please see our guide on [contributing](CONTRIBUTING.md) if you're interested in getting involved.

## Community

- Need help? Find it on [Stack Overflow using the tag 'openlayers'](http://stackoverflow.com/questions/tagged/openlayers)
- Follow [@openlayers](https://twitter.com/openlayers) on Twitter
