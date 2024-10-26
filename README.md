# Netflix Clone

A single-page application (SPA) that mimics the Netflix user interface. This project includes API calls to The Movie Database (TMDB), and uses React-YouTube and Movie-Trailer for video playback. Built with ReactJS and Vite.

## Features

- **Movie List**: Fetch and display lists of movies from TMDB API.
- **Movie Trailer**: Play movie trailers using React-YouTube and Movie-Trailer.
- **Responsive Design**: Fully responsive design for desktop and mobile devices.

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **TMDB API**: Fetch movie data.
- **React-YouTube**: Embed YouTube videos in React applications.
- **Movie-Trailer**: Fetch movie trailers from YouTube.
- **CSS**: Styling the application.

## Prerequisites

- **Node.js** and npm installed on your local machine.

## Installation

# Clone the repository:
```bash
git clone https://github.com/Gadisa16/Netflix-clone.git
cd Netflix-clone
```

Install dependencies:
```bash
npm install
```

Add your TMDB API Key:
Create a `.env` file in the root directory and add your TMDB API key:
```
VITE_API_KEY=your_api_key_here
```

## Running the Application

Development server:
```bash
npm run dev
```
This will start the application on `http://localhost:3000`.

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run serve
```

## Deployment

The project is set up to be deployed using GitHub Actions for continuous integration and continuous deployment (CI/CD). Follow these steps to ensure your repository secrets are configured correctly:

1. Go to your repository's "Settings" > "Secrets and variables" > "Actions".
2. Add the following secrets:
    - `VITE_API_KEY`: Your TMDB API key.
    - `GH_TOKEN`: Your GitHub Personal Access Token for deployment.

## GitHub Actions Workflow

A GitHub Actions workflow is included in the `.github/workflows/` directory to automate the build and deployment process. This ensures that your application is built and deployed to production whenever you push changes to the main branch.


## Google Analytics

This project includes Google Analytics for practice purposes. It is used to track page views and user interactions within the application. The tracking is implemented using the `react-ga4` library.

To enable Google Analytics, add your Google Analytics ID to the `.env` file: