var coala = require('../../coala');
var top = require('./top');
var menu = require('./menu');
var content = require('./content');
var tpl = require('./index.html');

var index = {
  tpl: tpl,
  refs: {
    top: {
      el: '.top',
      component: top,
      data: {name: '陈海峰'}
    },
    '#menu': menu,
    '#content': content
  }
};

window.index = coala.mount(index, '#app');
