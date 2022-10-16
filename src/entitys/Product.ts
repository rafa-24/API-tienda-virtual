import {
      Entity,
      PrimaryGeneratedColumn,
      Column,
      BaseEntity,
      JoinTable,
      ManyToMany
} from "typeorm";


import { Category } from "./Category";

@Entity()
export class Products extends BaseEntity {
      
      @PrimaryGeneratedColumn()
      id: number

      @Column("varchar")
      name: string;

      @Column("varchar")
      url_img: string;

      @Column("float")
      price: string;

      @Column("int")
      discount: string;

      // relacion muchos a muchos
      @ManyToMany(() => Category)
      @JoinTable()
      categories: Category[]

}
