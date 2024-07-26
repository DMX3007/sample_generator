const express = require('express');
const path = require('path');
const config = require('config');
const app = express();
app.use(express.json());

app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'pug');
app.use('/static', express['static'](path.join(__dirname, '../../node_modules')));
app.use('/public', express['static'](path.join(__dirname, '/public')));
app.use(express.json({limit: '2MB'}));
app.use(require('./public/routes'));
app.listen(config.get('apps.admin-web.port'), () => {
  console.log('started with config', config);
});
