import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RegistryDate } from '../../common/embedded/registry-date.embedded';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  password: string;

  @Column(() => RegistryDate, { prefix: false })
  registryDate: Date;
}
