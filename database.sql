PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  published INTEGER NOT NULL DEFAULT 1 CHECK (published IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

INSERT INTO users (name, email) VALUES
  ('Ada Lovelace', 'ada@example.com'),
  ('Grace Hopper', 'grace@example.com'),
  ('Alan Turing', 'alan@example.com');

INSERT INTO posts (user_id, title, body) VALUES
  (1, 'Welcome to the demo', 'This is seeded data for the local SQLite database.'),
  (2, 'Building reliable software', 'Small, repeatable examples make development easier.'),
  (3, 'Computing notes', 'A second table demonstrates a simple foreign-key relationship.');