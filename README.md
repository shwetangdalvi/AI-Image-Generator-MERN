
```markdown
# AI Image Generator MERN

This is a full-stack AI Image Generator project built with the MERN stack (MongoDB, Express, React, Node.js).

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/shwetangdalvi/AI-Image-Generator-MERN.git
   cd AI-Image-Generator-MERN
   ```

2. **Install server dependencies:**

   ```sh
   cd server
   npm install
   ```

3. **Create a `.env` file in the root of the 

server

 directory and add the following:**

   ```properties
   PORT=8080
   MONGODB_URL=your-mongodb-connection-string
   OPENAI_API_KEY=your-openai-api-key
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   POLLINATION_URL=https://image.pollinations.ai
   ```

4. **Install client dependencies:**

   ```sh
   cd ../client
   npm install
   ```

5. **Create a `.env` file in the root of the 

client

 directory and add the following:**

   ```properties
   REACT_APP_API_SERVER_URL=http://localhost:8080
   ```

## Usage

1. **Start the server:**

   ```sh
   cd server
   npm start
   ```

2. **Start the client:**

   ```sh
   cd ../client
   npm start
   ```

3. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Project Structure

### Client

- `src/`: Contains the source code of the application.
- `public/`: Contains the public assets and the HTML template.

### Server

- `routes/`: Contains the route handlers for the API.
- `models/`: Contains the Mongoose models for the database.
- `controllers/`: Contains the logic for handling requests and responses.

## Available Scripts

### Client

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

### Server

In the project directory, you can run:

- `npm start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with hot reloading.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/AI-Image-Generator-MERN-MERN](https://github.com/yourusername/AI-Image-Generator-MERN-MERN)
```


## Features

- Generate AI-based images using OpenAI's API with support of PollinationAI.
- Upload and manage images with Cloudinary.
- User authentication and authorization.
- Responsive design with React.
- RESTful API with Express and Node.js.
- MongoDB for database management.

## Troubleshooting

If you encounter any issues, please check the following:

- Ensure that all environment variables are correctly set in the `.env` files.
- Verify that MongoDB is running and accessible.
- Check the console for any error messages and follow the suggested solutions.
- Make sure you have the correct versions of Node.js and npm installed.

## Acknowledgements

- [OpenAI](https://www.openai.com/) for the image generation API.
- [Cloudinary](https://cloudinary.com/) for image storage and management.
- [MongoDB](https://www.mongodb.com/) for the database solution.
- [React](https://reactjs.org/) for the front-end framework.
- [Express](https://expressjs.com/) for the back-end framework.

## References

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [OpenAI API Documentation](https://beta.openai.com/docs/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/en/starter/installing.html)
