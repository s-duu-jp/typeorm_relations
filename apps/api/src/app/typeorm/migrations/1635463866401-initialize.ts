import { Tag, User } from 'apps/common/interfaces';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { TagEntity, UserEntity } from '../entities';

export class initialize1635463866401 implements MigrationInterface {
  name = 'initialize1635463866401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert - Tag
    const Tag: Tag[] = [
      {
        type: '優しい',
      },
      {
        type: 'ハンサム',
      },
      {
        type: '高身長',
      },
    ];
    await queryRunner.manager.save(TagEntity, Tag);

    // Insert - Users
    const Users: User[] = [
      {
        name: 'Aさん',
        tags: [Tag[0], Tag[1]],
      },
      {
        name: 'Bさん',
        tags: [Tag[1], Tag[2]],
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
