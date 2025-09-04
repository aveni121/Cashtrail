// database.js
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("cashtrail.db"); // Creates or opens the DB

export default db;
