import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import articleSearch from './data/articleSearch.json' assert { type: 'json' };

const endpoints = [
  { path: '/svc/search/v2/articlesearch.json', data: articleSearch },
];

const app = express();

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

endpoints.forEach((endpoint) => {
  const { data } = endpoint;

  app.get(endpoint.path, (req: unknown, res) => {
    setTimeout(() => {
      res.send(data);
    }, 1000);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening at http://localhost:3000/');
});
