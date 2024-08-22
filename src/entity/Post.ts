import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Author } from "./Author";
import { Comment } from "./Comment";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text")
  text: string;

  @ManyToOne(() => Author, (author) => author.posts)
  author: Author;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
