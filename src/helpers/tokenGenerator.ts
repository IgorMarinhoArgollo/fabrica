import * as jwt from 'jsonwebtoken';

const tokenGenerator = (email: string, name: string) => {
  return {
    token: `Bearer ${jwt.sign(
      { email, name },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '60d' },
    )}`,
  }
};

export default tokenGenerator;