import 'dotenv/config';
import { userTable } from './db/schema';
import db from './db/index'

async function main() {
    await db.delete(userTable)
    const user: typeof userTable.$inferInsert = {
        name: 'John',
        age: 30,
        email: 'john@example.com',
    };
    await db.insert(userTable).values(user);
    console.log('New user created!')

    const users = await db.select().from(userTable);
    console.log('Getting all users from the database: ', users)

}

main();
