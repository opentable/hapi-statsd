'use strict';

var expect = require('expect.js');
var plugin = require('../index.js');

describe('plugin attributes', function() {
  it('should contain name', function() {
    expect(plugin.register.attributes.name).to.equal('ot-hapi-statsd');
  });

  it('should contain version', function() {
    expect(plugin.register.attributes.version).to.equal('0.2.0');
  });
});
