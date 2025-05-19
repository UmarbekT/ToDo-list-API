import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcryptjs';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, select: false })
  username: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false, select: false })
  password: string;
  @Column({ select: false, default: 'user' })
  role: string;
  @Column({ nullable: false, select: false })
  createdAt: Date;
  @Column({ default: true })
  isactive: boolean;
  @Column({ nullable: true, select: false })
  refreshToken: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 12);
  }
}
