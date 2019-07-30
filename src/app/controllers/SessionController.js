import jwt from 'jsonwebtoken';

import User from '../models/User';
// import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    // procura usuário existente
    if (!user) {
      // retorna erro de usuário inexistente
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      // retonar erro se passord incorreta
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      // hash gerado em md5oline.org
      token: jwt.sign({ id }, '1bb3ffd7b45642874c633f828eeab68e', {
        expiresIn: '7d', // expriração do token
      }),
    });
  }
}

export default new SessionController();
