
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
      targetProperty: "id",
      groupBy: "vendor_id",
      filter: []
    };

    var cDefaults = {
      height: 300,
      width: 600,
      minimumSlicePercentage: 5,
      colors: ["orange", "green", "#fef584"],
      backgroundColor: "transparent",
      title: "Total Purchases Previous 7 Days By Device",
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
