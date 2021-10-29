import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @CreateDateColumn({ select: false })
  createdAt?: Date;

  @UpdateDateColumn({ select: false })
  updatedAt?: Date;
}
