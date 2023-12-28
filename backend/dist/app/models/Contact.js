"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Contact extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: _sequelize2.default.DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
        },
        email: {
          type: _sequelize2.default.DataTypes.STRING,
          allowNull: false,
        },
        comment: {
          type: _sequelize2.default.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'contact',
        schema: 'api_growdev',
      }
    );
    return this;
  }
}

exports. default = Contact;
