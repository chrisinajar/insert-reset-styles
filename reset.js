var elements = require('./elements');

var reset = module.exports = {
  body: {
    'line-height': 1,
    color: 'black',
    background: 'white',
    margin: 0,
    '-webkit-tap-highlight-color': ['rgba(0,0,0,0)', 'transparent']
  },
  table: {
    'border-collapse': 'collapse',
    'border-spacing': 0
  },
  'audio:not([controls])': {
    display: 'none',
    height: 0
  },
  progress: {
    'vertical-align': 'baseline'
  },
  a: {
    'background-color': 'transparent'
  },
  '*': {
    'box-sizing': 'border-box'
  }
};

addRule(elements.block, {
  display: 'block'
});

addRule(elements.inline, {
  display: 'inline-block'
});

function addRule (selectors, rule) {
  reset[selectors.join(',')] = rule;
}
