module.exports = function KeenGraphs(k) {

  return {
    PieChart: require('./graphs/pie')(k),
    LineChart: require('./graphs/line')(k),
    NumberChart: require('./graphs/number')(k),
    Heatmap: require('./graphs/heatmap')(k)
  };

};
