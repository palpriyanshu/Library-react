const postOption = function (content = {}) {
  return {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(content),
  };
};

const postOptionToAddBook = function (content = {}) {
  return {
    method: 'POST',
    body: content,
  };
};

const fetchApis = {
  getUser: () => fetch('/user').then((reply) => reply.json()),
  logOut: () => fetch('/logOut', postOption()).then((reply) => reply.json()),
  getBooks: () => fetch('/getBooks').then((books) => books.json()),
  registerBookToUser: (id) =>
    fetch('/registerBookToUser', postOption({ id })).then((reply) =>
      reply.json()
    ),
  myBooks: () => fetch('/myBooks').then((books) => books.json()),
  getBook: (id) => fetch(`/getBook/${id}`).then((details) => details.json()),
  returnBook: (id) =>
    fetch(`/returnBook`, postOption({ id })).then((reply) => reply.json()),
  addBook: (book) =>
    fetch('/api/addBook', postOptionToAddBook(book)).then((reply) =>
      reply.json()
    ),
};

module.exports = { fetchApis };
