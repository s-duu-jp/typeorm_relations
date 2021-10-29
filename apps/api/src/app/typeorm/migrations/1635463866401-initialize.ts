import { BloodType, BLOOD_TYPE, User } from 'apps/common/interfaces';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { BloodTypeEntity, UserEntity } from '../entities';

export class initialize1635463866401 implements MigrationInterface {
  name = 'initialize1635463866401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert - BloodType
    const bloodType: BloodType[] = [
      {
        type: BLOOD_TYPE.A,
      },
      {
        type: BLOOD_TYPE.B,
      },
      {
        type: BLOOD_TYPE.AB,
      },
      {
        type: BLOOD_TYPE.O,
      },
    ];
    await queryRunner.manager.save(BloodTypeEntity, bloodType);

    // Insert - Users
    const Users: User[] = [
      {
        name: 'Aさん',
        bloodType: bloodType[0],
      },
      {
        name: 'Bさん',
        bloodType: bloodType[0],
      },
    ];
    await queryRunner.manager.save(UserEntity, Users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`Users\` DROP FOREIGN KEY \`FK_caac395c9a0a9dcdf61d7905c41\``
    );
    await queryRunner.query(
      `DROP INDEX \`REL_caac395c9a0a9dcdf61d7905c4\` ON \`Users\``
    );
    await queryRunner.query(`DROP TABLE \`Users\``);
    await queryRunner.query(`DROP TABLE \`Profiles\``);
  }
}
