// Initializes the `instructors` service on path `/instructors`
const { Instructors } = require('./instructors.class');
const createModel = require('../../models/instructors.model');
const hooks = require('./instructors.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/instructors', new Instructors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('instructors');

  service.hooks(hooks);
};
