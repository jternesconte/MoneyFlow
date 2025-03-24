import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Category } from "./Category";

@Entity("expenses")
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id", referencedColumnName: 'id' })
  userId: User;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: "category_id", referencedColumnName: 'id' })
  categoryId: Category;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0, nullable: false })
  amount: number;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "timestamp", nullable: false })
  date: Date;

  @Column({ name: "created_at", type: "timestamp", nullable: false })
  createdAt: Date;

  @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", type: "timestamp", nullable: false })
  updatedAt: Date;
}
