const JWT_SECRET_KEY = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';

const SERVER_PORT = 8080;
// mongodb+srv://g3770888:<password>@cluster0.9gvgmip.mongodb.net/P5oYBmhR5DwOuBTu
const DATABASE_URI = 'mongodb+srv://g3770888:P5oYBmhR5DwOuBTu@cluster0.9gvgmip.mongodb.net/foodOrderAppDb'
// const DATABASE_URI = 'mongodb://localhost:27017/FoodOrder'
//"sessionToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM2NDE0YzFhZmM5ZjE3NWE2NzBkOWQiLCJpYXQiOjE3MDc0OTE3NTgsImV4cCI6MTcwODA5NjU1OH0._9QR-cqZS3O6ynBxuGFV40BRQVsIxDqHaVnxW_14o3M"

// mongodb://localhost:27017/
const TOKEN_EXPIRATION_DURATION = '7d';

const DATABASE_NAME = 'foodOrderAppDb';

module.exports = {
    JWT_SECRET_KEY,
    SERVER_PORT,
    DATABASE_URI,
    TOKEN_EXPIRATION_DURATION
}