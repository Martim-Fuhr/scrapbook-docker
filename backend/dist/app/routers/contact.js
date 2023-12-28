"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContactController = require('../controllers/ContactController'); var _ContactController2 = _interopRequireDefault(_ContactController);

const routes = new (0, _express.Router)();

routes.get('/contact', _ContactController2.default.index);
routes.get('/contact/:id/', _ContactController2.default.show);
routes.post('/contact', _ContactController2.default.store);
routes.put('/contact/:id/', _ContactController2.default.update);
routes.delete('/contact/:id/', _ContactController2.default.delete);

exports. default = routes;
