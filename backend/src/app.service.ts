import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! this is version 4. \ndo you pull only backend directory?';
  }
}
