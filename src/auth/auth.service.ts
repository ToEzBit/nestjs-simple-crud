import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'I have signup' };
  }

  signin() {
    return { message: 'I have signin' };
  }
}
