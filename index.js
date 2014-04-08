
var o = require('object');

module.exports = function KeenGraphs(keen) {

  return {
    graphs: {
      pie: require('./lib/graphs/pie')(keen),
      line: require('./lib/graphs/line')(keen),
      number: require('./lib/graphs/number')(keen),
      heatmap: require('./lib/graphs/heatmap')(keen)
    },
    getMetric: function(metric, options, next, done) {

      if(!metric) throw new Error('keen.get requires a metric')

      options = o.merge({
        analysisType: "count",
        timeframe: "this_7_days",
        interval: "hourly"
      }, options);

      var d = new keen.Metric(metric, options);
      d.getResponse(function(data) {
        next(data, done || function() {});
      });

    },
    getSeries: function(metric, options, next, done) {

      if(!metric) throw new Error('keen.get requires a metric')

      options = o.merge({
        analysisType: "count",
        timeframe: "this_7_days",
        interval: "hourly"
      }, options);

      var d = new keen.Series(metric, options);
      d.getResponse(function(data) {
        next(data, done || function() {});
      });

    }
  };

};
