const optionForPost = function () {
  return {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };
};

const bookPostOption = function (content = null) {
  return {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(content),
  };
};

const fetchApis = {
  getUser: () => fetch('/user').then((reply) => reply.json()),
  logOut: () => fetch('/logOut', optionForPost()).then((reply) => reply.json()),
  getBooks: () => fetch('/getBooks').then((books) => books.json()),
  registerBookToUser: (id) =>
    fetch('/registerBookToUser', bookPostOption({ id })).then((reply) =>
      reply.json()
    ),
  myBooks: () => fetch('/myBooks').then((books) => books.json()),
  getBook: (id) => fetch(`/getBook/${id}`).then((details) => details.json()),
};

module.exports = { fetchApis };
