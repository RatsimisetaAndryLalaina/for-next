import sql from 'better-sqlite3';

const db = sql('database.sqlite');

export function fetchUsers() {
  const stmt = db.prepare('SELECT * FROM users');
  const users = stmt.all();
  return users;
};