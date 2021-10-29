import { Controller, Post } from '@nestjs/common';
import { ExampleControllerService } from './example.service';

@Controller()
export class ExampleController {
  constructor(
    private readonly exampleControllerService: ExampleControllerService
  ) {}

  @Post('user')
  getUser() {
    return this.exampleControllerService.getUser();
  }

  @Post('profile')
  getProfile() {
    return this.exampleControllerService.getProfile();
  }

  @Post('userprofile')
  getUserProfile() {
    return this.exampleControllerService.getUserProfile();
  }
}
