import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Initial1724291064542 } from "./migration/1724291064542-initial";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [Initial1724291064542],
  subscribers: [],
});
