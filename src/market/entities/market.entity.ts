import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'market' })
export class Market {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', name: 'line_one', length: 255 })
  lineOne: string;

  @Column({ type: 'varchar', nullable: true, name: 'line_two', length: 255 })
  lineTwo?: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 100 })
  zipCode: string;
}
