import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
