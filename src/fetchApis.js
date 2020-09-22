const fetchApis = {
  isUserLoggedIn: () => fetch('/isUserLoggedIn').then((reply) => reply.json()),
};

module.exports = { fetchApis };
