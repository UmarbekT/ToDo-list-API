import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  completed: boolean;
  @Column()
  userId: number;
  @Column({
    type: 'enum',
    enum: ['active', 'completed', 'deleted'],
    default: 'active',
  })
  status: 'active' | 'completed' | 'deleted';
  @Column()
  createdAt: Date;
  @Column({ default: true })
  isActive: boolean;
}
