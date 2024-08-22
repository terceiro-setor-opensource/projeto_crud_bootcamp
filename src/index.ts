import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.name = "Timber";
    // user.email = "timer@i.com";
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("#######################################");

    // console.log("Inserting a new user into the database...");
    // const userTwo = new User();
    // userTwo.name = "Amber";
    // userTwo.email = "Amber@i.com";
    // await AppDataSource.manager.save(userTwo);
    // console.log("Saved a new userTwo with id: " + userTwo.id);

    // console.log("#######################################");

    // console.log("Inserting a new user into the database...");
    // const userTree = new User();
    // userTree.name = "Fall";
    // userTree.email = "Fall@i.com";
    // await AppDataSource.manager.save(userTree);
    // console.log("Saved a new userTwo with id: " + userTree.id);

    // console.log("#######################################");

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("#######################################");

    console.log("Finding user...");
    const getUser = await AppDataSource.manager.find(User, {
      where: {
        id: 2,
      },
    });
    console.log("Loaded user with id 2: ", getUser);

    console.log("#######################################");

    // console.log("Deleting user...");
    // const deleteUser = await AppDataSource.manager.delete(User, 4);
    // console.log("User deleted: ", deleteUser);
    console.log("List of users: ", users);

    console.log("#######################################");

    console.log("Update user...");
    const userUpdated = await AppDataSource.manager.update(User, 1, {
      name: "Timber lee",
    });
    console.log("User updated: ", userUpdated);
    console.log("List of users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
