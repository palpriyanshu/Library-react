const fetchApis = {
  getUser: () => fetch('/user').then((reply) => reply.json()),
};

module.exports = { fetchApis };
