import { Controller, Post } from '@nestjs/common';
import { BloodType, User } from 'apps/common/interfaces';
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

  @Post('bloodtype')
  getProfile(): Promise<BloodType | BloodType[]> {
    return this.exampleControllerService.getBloodType();
  }

  @Post('userbloodtype')
  getUserBloodType(): Promise<User[]> {
    return this.exampleControllerService.getUserBloodType();
  }
}
