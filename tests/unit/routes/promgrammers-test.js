import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | promgrammers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:promgrammers');
    assert.ok(route);
  });
});
