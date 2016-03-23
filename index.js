var styles = require('./reset');
var insertStyles = require('insert-styles');
var toCss = require('to-css');

module.exports = function () {
  insertStyles(toCss(styles));
};
