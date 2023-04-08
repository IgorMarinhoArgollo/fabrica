import { JwtPayload } from 'jsonwebtoken';

interface AuthPayload extends JwtPayload {
  email: string;
  name: string;
}

export default AuthPayload;