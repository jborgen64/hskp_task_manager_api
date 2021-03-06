import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('tasks')
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column('text') task: string;

    @Column('text') description: string;
}
