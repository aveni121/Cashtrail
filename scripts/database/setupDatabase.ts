import { SQLiteDatabase } from "expo-sqlite";

// setupDatabase.js
export const initDB = async (db: SQLiteDatabase) => {
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY NOT NULL,
          date TEXT NOT NULL,
          merchant TEXT NOT NULL,
          category TEXT NOT NULL,
          subcategory TEXT NOT NULL,
          card TEXT NOT NULL,
          amount REAL NOT NULL
        );`
    );
    console.log("✅ Table created or already exists");
  } catch (error) {
    console.error("❌ Error creating table:", error);
  }
};
