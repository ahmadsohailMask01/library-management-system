const backendApiUrl = 'http://localhost:8080/api';

const routes = {
  AUTHOR: 'author',
  AUTH: 'auth',
  BOOK: 'book',
  BORROWAL: 'borrowal',
  GENRE: 'genre',
  USER: 'user',
  TOTAL_DOWNLOADS: 'totalDownloads',
};

const methods = {
  GET: 'get',
  GET_ALL: 'getAll',
  BOOKS_BY_AUTHOR: 'getBooksByAuthorId',
  TOTAL_DOWNLOADS: 'total-downloads',
  POST: 'add',
  PUT: 'update',
  DELETE: 'delete',
};

const apiUrl = (route, method, id = '') => `${backendApiUrl}/${route}/${method}${id && `/${id}`}`;

module.exports = { routes, methods, apiUrl };
