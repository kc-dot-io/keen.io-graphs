module.exports = function KeenGraphs(k) {

  return {
    Count: require('./graphs/count')(k),
    Line: require('./graphs/line')(k),
    WeeklyTimeline: require('./graphs/timeline-weekly')(k)
  };

};
