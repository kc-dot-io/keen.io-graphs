
var d3 = require('d3')
  , $ = require('jquery')
  , _ = require('underscore');

module.exports = function Graph(k) {

  function PieGraph(el, metric, mOptions, cOptions) {

    mOptions = mOptions || {};
    cOptions = cOptions || {};

    var mDefaults = {
      analysisType: "count",
      timeframe: "this_7_days",
      filter: []
    };

    var cDefaults = {
      minimumSlicePercentage: 5,
      backgroundColor: "transparent",
    };

    var o = require('object');
    mOptions = o.merge(mDefaults, mOptions);
    cOptions = o.merge(cDefaults, cOptions);

    var m = new Keen.Series(metric, mOptions);
    var c = new Keen.PieChart(m, cOptions);

    if($(el).length) c.draw( $(el)[0] );
    else console.error(el, 'count not be found');

  }

  return PieGraph;
};
