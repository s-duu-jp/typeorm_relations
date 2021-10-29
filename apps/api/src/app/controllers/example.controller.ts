import { Controller, Post } from '@nestjs/common';
import { Tag, User } from 'apps/common/interfaces';
import { ExampleControllerService } from './example.service';

@Controller()
export class ExampleController {
  constructor(
    private readonly exampleControllerService: ExampleControllerService
  ) {}

  @Post('user')
  getUser(): Promise<User | User[]> {
    return this.exampleControllerService.getUser();
  }

  @Post('Tag')
  getTag(): Promise<Tag | Tag[]> {
    return this.exampleControllerService.getTag();
  }

  @Post('userTag')
  getUserTag(): Promise<User[]> {
    return this.exampleControllerService.getUserTag();
  }
}
