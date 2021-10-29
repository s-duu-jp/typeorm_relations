import { Injectable, Post } from '@nestjs/common';
import { Tag, User } from 'apps/common/interfaces';
import { TagEntityService } from '../services/database/rdbms/entities/tag';
import { UserEntityService } from '../services/database/rdbms/entities/user.service';

@Injectable()
export class ExampleControllerService {
  constructor(
    private readonly userEntityService: UserEntityService,
    private readonly TagEntityService: TagEntityService
  ) {}

  /**
   * User取得
   */
  getUser(): Promise<User[]> {
    return this.userEntityService.find();
  }

  /**
   * Tag取得
   */
  getTag(): Promise<Tag[]> {
    return this.TagEntityService.find();
  }

  /**
   * UserTag取得
   */
  getUserTag(): Promise<User[]> {
    return this.userEntityService.find({ relations: ['tags'] });
  }
}
