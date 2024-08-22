import { Column, Entity, OneToMany } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Author extends User {
  @Column("simple-array")
  tags: string[];

  @Column()
  surname: string;

  @Column()
  completeName: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
