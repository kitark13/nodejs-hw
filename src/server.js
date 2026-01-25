import 'dotenv/config';
import express from 'express';
import { logger } from './middleware/logger.js';
import cors from 'cors';

import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';

import NotesRoutes from './routes/notesRoutes.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(NotesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// denys_kratyk HFkAUCvJwgFjEmr0
