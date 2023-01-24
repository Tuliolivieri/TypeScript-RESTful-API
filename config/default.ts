const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export default {
  port: 3000,
  dbURI: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bgjzicd.mongodb.net/?retryWrites=true&w=majority`
}