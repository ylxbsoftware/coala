/*
  Version: 0.0.8
  Author: Cheft
*/
var Component = require('./component');
var observable = require('./observable');

var coala = {
  observable: observable,

  mount: function(opts, el) {
    return this.component(opts).mount(el);
  },

  unmount: function(component) {
    component.unmount();
  },

  component: function(opts) {
    return new Component(opts);
  }
};

observable(coala);

module.exports = coala;
