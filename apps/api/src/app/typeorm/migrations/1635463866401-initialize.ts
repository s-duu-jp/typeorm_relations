import { Profile, User } from 'apps/common/interfaces';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { ProfileEntity, UserEntity } from '../entities';

export class initialize1635463866401 implements MigrationInterface {
  name = 'initialize1635463866401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert - Profile
    const profiles: Profile[] = [
      {
        gender: '男',
        age: 38,
        photo: 'Aさんの顔写真.jpg',
      },
      {
        gender: '女',
        age: 38,
        photo: 'Bさんの顔写真.jpg',
      },
    ];
    await queryRunner.manager.save(ProfileEntity, profiles);

    // Insert - Users
    const Users: User[] = [
      {
        name: 'Aさん',
        profile: profiles[0],
      },
      {
        name: 'Bさん',
        profile: profiles[1],
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