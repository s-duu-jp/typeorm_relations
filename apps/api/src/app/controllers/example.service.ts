import { Injectable, Post } from '@nestjs/common';
import { Tag, User } from 'apps/common/interfaces';
import { TagEntityService } from '../services/database/rdbms/entities/tag';
import { UserEntityService } from '../services/database/rdbms/entities/user.service';

@Injectable()
export class ExampleControllerService {
  constructor(
    private readonly userEntityService: UserEntityService,
    private readonly tagEntityService: TagEntityService
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
    return this.tagEntityService.find();
  }

  /**
   * UserTag取得
   */
  getUserTag(): Promise<User[]> {
    return this.userEntityService.find({ relations: ['tags'] });
  }

  /**
   * TagUser取得
   */
  getTagUser(): Promise<Tag[]> {
    return this.tagEntityService.find({ relations: ['members'] });
  }
}
