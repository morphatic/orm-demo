const getCourses = async context => {
  const instructorId = context.result.id;
  const courses = await context.app.services.courses.find({
    query: {
      instructorId: instructorId
    }
  });
  context.result.courses = courses.data;
  return context;
};

const getAllCourses = async context => {
  context.result.data = await Promise.all(context.result.data.map(async instructor => {
    const courses = await context.app.services.courses.find({ query: { instructorId: instructor.id } });
    instructor.courses = courses.data;
    console.log(instructor);
    return instructor;
  }));
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [getAllCourses],
    get: [getCourses],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
