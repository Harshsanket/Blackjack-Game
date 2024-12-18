# MERN Blackjack App with TypeScript  
![Build Status](https://img.shields.io/badge/build-in%20development-yellow)  
![Version](https://img.shields.io/badge/version-v0.0.1-blue)  
![License](https://img.shields.io/badge/license-MIT-green)

## Overview  
This project is a **Blackjack Game** built to practice and enhance my TypeScript skills alongside the MERN stack.  

### Features of the Initial Version:  
- Players start with a balance of $100.  
- Free users must restart the game if they run out of money.  
- Logged-in users can save their progress, including profile details, balance, wins, and losses.  
- Basic game mechanics include options to hit, stand, and place bets.  

### Future Enhancements:  
- User profiles with detailed statistics.  
- Forgot Password functionality.  
- Integration of a **demo payment gateway** for a realistic in-game experience.  
- Refinements to gameplay logic and additional features.

---

## Technologies Used  
- **Language**: TypeScript  
- **Frontend**: React, TailwindCSS  
- **Backend**: Node.js, Express, Mongoose, cors, cookie-parser  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Development Tools**: Nodemon  

---

## Features  
- **User Authentication**: Sign up, login, and session management using JWT.  
- **Responsive Design**: React-based UI styled with TailwindCSS.  
- **RESTful API**: Express.js backend connected to MongoDB.  

---

## Best Practices  

### 1. Use Lowercase for Environment Variable Names  
**Why**: Improves readability and maintains consistency across platforms.  
**Guideline**: Avoid mixed-case or camelCase for environment variables as it can cause cross-platform issues.  

### 2. Use `.env` Files for Configuration  
**Why**: Keeps sensitive information secure and separate from the codebase.  
**Guideline**:  
- Add `.env` files to `.gitignore`.  
- Create `.env.example` files to document required environment variables.  

### 3. Separation of Concerns  
**Why**: Ensures modular architecture, making the app easier to scale and maintain.  
**Guideline**:  
- The frontend handles user interactions and rendering.  
- The backend manages API requests, data processing, and database interactions.  

### 4. Maintain Consistent Code Style  
**Why**: Enhances readability and makes collaboration easier.  
**Guideline**:  
- Use tools like **ESLint** for linting and **Prettier** for code formatting.  
- Follow JavaScript and React best practices, such as using `const` and `let` instead of `var` and adhering to React hooks rules.  

### 5. Write Meaningful Commit Messages  
**Why**: Helps track changes effectively and communicate the purpose of updates.  
**Guideline**:  
- Use the present tense (e.g., "Add feature" instead of "Added feature").  
- Be concise yet descriptive.  
- Optionally use AI tools for generating consistent commit messages.