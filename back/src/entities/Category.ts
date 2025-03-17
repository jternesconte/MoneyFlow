import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP",nullable: false })
  createdAt: Date;

  @Column({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt: Date;
}
