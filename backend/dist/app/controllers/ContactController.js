"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contact = require('../models/Contact'); var _Contact2 = _interopRequireDefault(_Contact);

class ContactController {
  async index(request, response) {
    return response.json(await _Contact2.default.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await _Contact2.default.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, phone, email, comment } = request.body;
    return response.json(await _Contact2.default.create({ name, phone, email, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, phone, email, comment } = request.body;
    return response.json(
      await _Contact2.default.create(
        { name, phone, email, comment },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await _Contact2.default.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

exports. default = new ContactController();
