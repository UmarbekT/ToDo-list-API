import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcryptjs';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, select: false })
  name: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false, select: false })
  password: string;
  @Column({ nullable: false, select: false })
  role: string;
  @Column({ nullable: false, select: false })
  createdAt: Date;
  @Column({ nullable: false, select: false })
  isactive: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 12);
  }
}
