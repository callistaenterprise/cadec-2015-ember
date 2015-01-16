import {
  markdownFormatter
} from 'bloggs-app/helpers/markdown-formatter';

module('MarkdownFormatterHelper');

// Replace this with your real tests.
test('it works', function() {
  var result = markdownFormatter("###Heading");
  equal(result.string, '<h3 id="heading">Heading</h3>');
  ok(result);
});
