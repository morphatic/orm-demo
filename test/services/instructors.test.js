const assert = require('assert');
const app = require('../../src/app');

describe('\'instructors\' service', () => {
  it('registered the service', () => {
    const service = app.service('instructors');

    assert.ok(service, 'Registered the service');
  });
});
