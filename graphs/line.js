
var d3 = require('d3')
  , $ = require('jquery')
  , _ = require('underscore');

module.exports = function Graph(k) {

  function LineGraph(el, metric, mOptions, cOptions) {

    mOptions = mOptions || {};
    cOptions = cOptions || {};

    var mDefaults = {
      analysisType: 'count',
      timeframe: 'last_60_minutes',
      interval: 'minutely'
    };

    var cDefaults = {
      lineWidth: 4,
      color: 'blue',
      backgroundColor: 'white',
      showLegend: false
    };

    var o = require('object');
    mOptions = o.merge(mDefaults, mOptions);
    cOptions = o.merge(cDefaults, cOptions);

    var m = new Keen.Series(metric, mOptions);
    var c = new Keen.LineChart(m, cOptions);

    if($(el).length) c.draw( $(el)[0] );
    else console.error(el, 'count not be found');

  }

  return LineGraph;
};
