import * as SQLite from "expo-sqlite";

// open db or create it if it doesn't exist
const database = SQLite.openDatabase("places.db");

// database setup
export function init() {
  // create a promise so we don't have to use callbacks
  const promise = new Promise((resolve, reject) => {
    // execute querry
    database.transaction((tx) => {
      // tx is transaction object
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
      id INTERGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    )`,
        [],
        // success
        () => {
          resolve();
        },
        // failure
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
