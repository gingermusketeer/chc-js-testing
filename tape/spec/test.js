// Hackery below allows this to be run in both node and the browser
// This is not an issue with tape but rather an issue with tap-browser-color
try {
  GLOBAL;
} catch (e){
  // Browser
  require('tap-browser-color')();
}


var test = require('tape');

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});
