
# keen-graphs

  A graphing library for Keen.io

## Installation

  Install with [component(1)](http://component.io):

    $ component install slajax/keenio-graphs

## API

```javascript
  var k = require('keen-graphs')(Keen); // inject configured keen obj
```

```javascript
  // Block Counts
  new k.Count('#element-1', 'pageViews', '7 Day View Count');
  new k.Count('#element-2', 'pageViews', '14 Day View Count', {
    timeframe: 'this_14_days'
  });
```
![Count Screen Shot](https://raw.github.com/slajax/keen-graphs/master/examples/imgs/count.png)

---

```javascript
  // Line Graphs
  new k.Line('#element-3', 'pageViews',
    { timeframe: 'this_7_days', interval: 'daily' },
    { title: '7 Day Page View Graph' },
  );
  new k.Line('#element-4', 'pageViews',
    { timeframe: 'last_24_hours', interval: 'hourly' },
    { title: 'Past Day Page View Graph' },
  );
```
![Line Screen Shot](https://raw.github.com/slajax/keen-graphs/master/examples/imgs/line.png)

---

```javascript
  // Weekly Timeline
  new k.WeeklyTimeline('#element-5', 'pageViews');

```
![Timeline Screen Shot](https://raw.github.com/slajax/keen-graphs/master/examples/imgs/timeline.png)

---

## License

  MIT
