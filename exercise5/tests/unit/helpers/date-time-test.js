import {
  dateTime
} from 'exercise5/helpers/date-time';

module('DateTimeHelper');

// Replace this with your real tests.
test('it works', function() {
  var d = new Date('2015-01-05T11:51:00');
  var result = dateTime(d);
  equal(result, '2015-01-05');
});
