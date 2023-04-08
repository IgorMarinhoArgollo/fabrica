import app from './app';
import * as dotenv from 'dotenv';
import connectToDatabase from './models/connection';

dotenv.config();

connectToDatabase()
  .then(() => {
    console.log("Database conection established");
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Listening on port: ${process.env.PORT}`);
    });
  }
  )
  .catch((err) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(err);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  })


