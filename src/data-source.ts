import "reflect-metadata";
import { DataSource } from "typeorm";
import { Author } from "./entity/Author";
import { Comment } from "./entity/Comment";
import { Post } from "./entity/Post";
import { User } from "./entity/User";
import { Initial1724291064542 } from "./migration/1724291064542-initial";
import { AddEntitiesAuthorCommentsPost1724329656189 } from "./migration/1724329656189-add-entities-author-comments-post";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User, Post, Author, Comment],
  migrations: [
    Initial1724291064542,
    AddEntitiesAuthorCommentsPost1724329656189,
  ],
  subscribers: [],
});
