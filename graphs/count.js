
var d3 = require('d3')
  , $ = require('jquery')
  , _ = require('underscore');

module.exports = function Graph(k) {

  function CountGraph(el, metric, label,  options) {

    var defaults = {
      analysisType: 'count',
      timeframe: 'this_7_days',
      interval: 'hourly',
      filter: []
    };

    var o = require('object');
    options = o.merge(defaults, options);

    var m = new Keen.Metric(metric, options);
    var c = new Keen.Number(m, {
      label: label
    });

    if($(el).length) c.draw( $(el)[0]);
    else console.error(el, 'could not found');

  }

  return CountGraph;
};
