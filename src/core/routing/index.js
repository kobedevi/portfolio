const PossibleRoutes = Object.freeze({
    Home: "/home",
    HomeParent: "/home/*",
    Experience: "/experience",
    Projects: "/projects",
    ProjectDetail: "/projects/:id",
    Contact: "/contact",
  });
  
  // replaces : values with values from object
  // e.g. route('/projects/:id', { id : 9 }) -> /projects/9
  export const route = (path, options = {}) => {
    Object.keys(options).forEach((key) => {
      path = path.replace(`:${key}`, options[key]);
    });
    return path;
  };
  
  export { PossibleRoutes };
  