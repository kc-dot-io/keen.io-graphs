
var d3 = require('d3')
  , $ = require('jquery')
  , _ = require('underscore');

module.exports = function Graph(k) {

  function NumberGraph(el, metric, mOptions, cOptions) {

    var mDefaults = {
      analysisType: 'count',
      timeframe: 'this_7_days',
      interval: 'hourly',
      filters: []
    };

    var cDefaults = {
      label: 'Number'
    };

    var o = require('object');
    mOptions = o.merge(mDefaults, mOptions);
    cOptions = o.merge(cDefaults, cOptions);

    var m = new Keen.Metric(metric, mOptions);
    var c = new Keen.Number(m, cOptions);

    if($(el).length) c.draw( $(el)[0]);
    else console.error(el, 'could not found');

  }

  return NumberGraph;
};
