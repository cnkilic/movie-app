# Movie Explorer

**Movie Explorer** is a responsive Single Page Application (SPA) that allows users to search, filter, and explore detailed information about movies, TV series, and episodes. This application is built with modern web technologies including React, Redux, TypeScript, SCSS, and Material UI.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Reference](#api-reference)
6. [Folder Structure](#folder-structure)
7. [Screenshots](#screenshots)
8. [License](#license)

---

## Features

- **Search**: Search movies, TV series, and episodes by name.
- **Filter**: Filter results by type (movie, series, episode) and year of release.
- **Pagination**: Navigate through search results with pagination (10 items per page).
- **Movie Details**: View detailed information about a selected movie, including title, genre, director, cast, IMDb rating, and poster.
- **Responsive Design**: Fully responsive layout using Material UI and SCSS.

---

## Tech Stack

- **Frontend Framework**: React
- **State Management**: Redux (with Redux Thunk for asynchronous actions)
- **Programming Language**: TypeScript
- **Styling**: SCSS, Material UI
- **Routing**: React Router
- **API**: [OMDb API](http://www.omdbapi.com/)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   cd movie-explorer
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up API Key**:

   - Obtain an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx).
   - Create a `.env` file in the root directory and add your API key:
     ```env
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ```

4. **Run the Application**:

   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Usage

- **Search**: Enter a movie/series name in the search bar and click "Search."
- **Filter**: Use the dropdown and year inputs to refine your search results.
- **Pagination**: Navigate between pages using the pagination controls.
- **View Details**: Click on a movie in the list to view detailed information on a separate page.

---

## API Reference

- **Base URL**: `http://www.omdbapi.com/`
- **Endpoints**:
  - Search movies: `/?apikey=API_KEY&s=SEARCH_QUERY&type=TYPE&page=PAGE_NUMBER`
  - Get movie details: `/?apikey=API_KEY&i=IMDB_ID`

---

## Folder Structure

```
movie-explorer/
│
├── src/
│   ├── components/          # Reusable components (e.g., LoadingSpinner)
│   ├── pages/               # Application pages (e.g., HomePage, MovieDetailPage)
│   ├── redux/               # Redux store, slices, and hooks
│   ├── styles/              # Global SCSS styles
│   ├── utils/               # Utility functions (e.g., API requests)
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point
│   └── ...                  # Other files
│
├── .env                     # Environment variables (API key)
├── package.json             # Project dependencies and scripts
├── README.md                # Documentation
└── tsconfig.json            # TypeScript configuration
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
