import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Market } from '../../market/entities/market.entity';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  category: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'uuid', name: 'market_id' })
  marketId: string;

  @JoinColumn({ referencedColumnName: 'id', name: 'market_id' })
  @ManyToOne(() => Market, (market) => market.id, { lazy: true })
  market: Promise<Market>;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}
