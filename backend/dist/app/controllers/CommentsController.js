"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Comments = require('../models/Comments'); var _Comments2 = _interopRequireDefault(_Comments);

class CommentsController {
  async index(request, response) {
    return response.json(await _Comments2.default.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await _Comments2.default.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { name, comment } = request.body;
    if (name === '' || comment === '') {
      return response.json({ message: 'Campos inválidos' });
    }
    return response.json(await _Comments2.default.create({ name, comment }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, comment } = request.body;
    return response.json(
      await _Comments2.default.create(
        { name, comment },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await _Comments2.default.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

exports. default = new CommentsController();
