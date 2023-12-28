"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CommentsController = require('../controllers/CommentsController'); var _CommentsController2 = _interopRequireDefault(_CommentsController);

const routes = new (0, _express.Router)();

routes.get('/comments', _CommentsController2.default.index);
routes.get('/comments/:id/', _CommentsController2.default.show);
routes.post('/comments', _CommentsController2.default.store);
routes.put('/comments/:id/', _CommentsController2.default.update);
routes.delete('/comments/:id/', _CommentsController2.default.delete);

exports. default = routes;
