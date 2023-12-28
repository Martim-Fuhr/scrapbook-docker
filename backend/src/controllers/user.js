import { database } from '../config/database';

export const getUsers = (_, response) => {
  const querydb = 'SELECT * FROM users';

  database.query(querydb, (err, data) => {
    if (err) return response.json(err);

    return response.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const querydb = 'INSERT INTO users(`name`, `email`, `comment`) VALUES(?)';

  const values = [req.body.name, req.body.email, req.body.comment];

  database.query(querydb, [values], err => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário criado com sucesso.');
  });
};

export const updateUser = (req, res) => {
  const querydb =
    'UPDATE users SET `name` = ?, `email` = ?, `comment` = ? WHERE `id` = ?';

  const values = [req.body.name, req.body.email, req.body.comment];

  database.query(querydb, [...values, req.params.id], err => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário atualizado com sucesso.');
  });
};

export const deleteUser = (req, res) => {
  const querydb = 'DELETE FROM users WHERE `id` = ?';

  database.query(querydb, [req.params.id], err => {
    if (err) return res.json(err);

    return res.status(200).json('Usuário deletado com sucesso.');
  });
};
