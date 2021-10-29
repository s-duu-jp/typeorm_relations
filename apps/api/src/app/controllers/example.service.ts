import { Injectable, Post } from '@nestjs/common';
import { ProfileEntityService } from '../services/database/rdbms/entities/profile.service';
import { UserEntityService } from '../services/database/rdbms/entities/user.service';

@Injectable()
export class ExampleControllerService {
  constructor(
    private readonly userEntityService: UserEntityService,
    private readonly profileEntityService: ProfileEntityService
  ) {}

  /**
   * User取得
   */
  getUser() {
    return this.userEntityService.find();
  }

  /**
   * Profile取得
   */
  getProfile() {
    return this.profileEntityService.find();
  }

  /**
   * UserProfile取得
   */
  getUserProfile() {
    return this.userEntityService.find({ relations: ['profile'] });
  }
}
