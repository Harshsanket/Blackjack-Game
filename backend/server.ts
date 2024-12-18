import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Important for parsing JSON bodies
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World! from TS');
});

// Error handling middleware (note the order - must be AFTER routes)
class ErrorRequestHandler extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status || 500;
    this.name = this.constructor.name;
    
    // Ensures that the stack trace is captured correctly
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handling middleware
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  
  // Use the error's status or default to 500
  const statusCode = err.status || 500;
  
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { 
      name: err.name,
      stack: err.stack 
    })
  });
});

// Server startup
app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});

export default app;