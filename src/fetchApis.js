const optionForPost = function () {
  return {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };
};

const fetchApis = {
  getUser: () => fetch('/user').then((reply) => reply.json()),
  logOut: () => fetch('/logOut', optionForPost()).then((reply) => reply.json()),
};

module.exports = { fetchApis };
