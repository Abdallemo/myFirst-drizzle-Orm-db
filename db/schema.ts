import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable('user',{
    id:uuid('id').primaryKey().defaultRandom(),
    name:varchar('name',{length:255}).notNull(),
    age:integer('age').notNull(),
    email:varchar('email',{length:255}).notNull().unique()
});


export const userPost = pgTable('posts',{
    id:uuid('id').primaryKey().defaultRandom(),
    postTitle:varchar('postTitle').notNull()
})