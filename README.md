
# First Impression of Drizzle ORM:

- This is my first time hearing about ORMs and learning about them. I know, I know, I'm behind the curve.
- I was always writing my queries in a .js file, but writing raw queries caused a lot of boilerplate—sometimes 
  up to 400 lines of JS for a function that inserts or updates a table. That could definitely be improved.
- As a beginner (or junior developer), it's harder to keep track of the frontend, backend, and DB configurations while working on APIs too.

  ## some examples
  ~~~javascript
  async function createBookingTableIfNotExists() {
  if (isBookCreated) {
    console.log("Booking table already created. Skipping...");
    return;
  }
  const connection = await pool.getConnection();
  // TODO this is commented becuase its development related query ..
  // await connection.query(`DROP TABLE IF EXISTS booking;`);
  try {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS booking (
            id INT AUTO_INCREMENT PRIMARY KEY,
            role VARCHAR(30) NOT NULL,
            booking_date DATE NOT NULL,
            slot_time VARCHAR(30) NOT NULL,
            num_people INT NOT NULL,
            gender VARCHAR(10) NOT NULL,
            user_id VARCHAR(200),
            CONSTRAINT FK_booking_user FOREIGN KEY (user_id) 
            REFERENCES users(email)
            ON DELETE CASCADE
            
        );
    `);
    await connection.query(`
        ALTER TABLE booking
        ADD INDEX (booking_date);
      `);
    console.log("Booking table created successfully.");
    isBookCreated = true;
  } catch (e) {
    console.error("Error creating booking table:", e);
  } finally {
    connection.release();
  }
}
  ~~~

  
