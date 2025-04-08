# Feedback Collector

## Overview

Feedback Collector is a single-page application (SPA) designed to allow users to submit their name, email, and feedback message. In addition to the main submission form, the app includes an admin view for displaying all submitted feedback entries. The project demonstrates a full-stack implementation with emphasis on responsive design, dark/light theme toggling, smooth transitions, and user-friendly notifications.

## Tech Stack

- **Frontend:**
  - **Framework:** React
  - **Styling:** Tailwind CSS with dark mode support
  - **Notifications:** react-toastify for toast messages
  - **Form Validation:** react-hook-form combined with Yup validation
  - **Animations:** Tailwind CSS transitions and micro animations
- **Backend:**
  - **Server:** Express.js (Node.js)
  - **Database:** MongoDB (using Mongoose for ODM)
  - **APIs:**
    - `POST /submit-feedback` – Accepts feedback data and saves it to the database.
    - `GET /feedbacks` – Returns a list of all feedback entries.
- **Deployment:**
  - **Frontend:** Deployed on Netlify
  - **Backend:** Deployed on Render (or an equivalent Node hosting platform)

## Features

### Core Features

- **Feedback Submission Form:**
  - Fields: Full Name, Email (with basic validation), Feedback Message.
  - Submit button with a loading state during submission.
- **Admin View:**
  - Toggle to view all feedback submissions in a card or list view.
  - Each feedback displays the submission timestamp.

### Optional Enhancements

- **Mobile Responsiveness:**
  - Uses Tailwind responsive classes to work well on devices of all sizes.
- **Dark/Light Theme Toggle:**
  - Implemented using React Context API and Tailwind CSS (`darkMode: 'class'`) allowing users to switch themes.
- **Smooth Transitions & Micro Animations:**
  - Applied smooth hover and view transition effects using Tailwind’s transition utilities.
- **Form-Level Validations:**
  - Utilizes react-hook-form and Yup to provide user-friendly error messages with real-time validations.
- **Toast Notifications:**
  - Integrated react-toastify for showing success and error messages upon form submission and other interactions.

## Installation

### Prerequisites

- Node.js and npm installed
- A MongoDB instance (local or cloud)
- Git

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/feedback-collector.git
   cd feedback-collector/frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the frontend:**
   ```bash
   npm start
   ```

### Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd ../backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   Create a .env file in the backend root:

   ```dotenv
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
   ```

4. **Run the Backend Server:**

   ```bash
   npm run dev
   ```

   The backend should be accessible at http://localhost:5000.

## Deployment

### Frontend on Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Push to GitHub:**

   - _Make sure your latest code is pushed._

3. **Deploy via Netlify:**

   - _Create a new site and link to your GitHub repository._
   - _Set the build command (npm run build) and publish directory (e.g., dist for Vite or build for Create React App)._

### Backend on Render

1. **Push the backend code to GitHub.**

2. **Create a New Web Service on Render:**

   - _Choose Node.js as the runtime._
   - _Configure the build and start commands._
   - _Set environment variables (MONGO_URI, PORT) in Render’s dashboard._

3. **Deploy and Test API Endpoints.**

## Author

Submitted by Kanishk Singh
