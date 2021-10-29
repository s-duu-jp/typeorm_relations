import { Injectable, Post } from '@nestjs/common';
import { BloodType, User } from 'apps/common/interfaces';
import { BloodTypeEntityService } from '../services/database/rdbms/entities/blood_type.service';
import { UserEntityService } from '../services/database/rdbms/entities/user.service';

@Injectable()
export class ExampleControllerService {
  constructor(
    private readonly userEntityService: UserEntityService,
    private readonly bloodTypeEntityService: BloodTypeEntityService
  ) {}

  /**
   * User取得
   */
  getUser(): Promise<User[]> {
    return this.userEntityService.find();
  }

  /**
   * BloodType取得
   */
  getBloodType(): Promise<BloodType[]> {
    return this.bloodTypeEntityService.find();
  }

  /**
   * UserBloodType取得
   */
  getUserBloodType(): Promise<User[]> {
    return this.userEntityService.find({ relations: ['bloodType'] });
  }

  /**
   * BloodTypeUser取得
   */
  getBloodTypeUser(): Promise<BloodType[]> {
    return this.bloodTypeEntityService.find({ relations: ['members'] });
  }
}
