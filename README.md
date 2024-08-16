# Movies Site

A responsive web application that displays popular movies using the TMDb API and allows users to search for movies by title. The project is built with vanilla JavaScript, HTML, and CSS, offering a sleek and user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Reference](#api-reference)

## Features

- **Search Functionality**: Allows users to search for specific movies by entering a title.
- **Responsive Design**: Ensures a seamless experience across different devices, including desktops, tablets, and mobile phones.
- **Error Handling**: Implements error handling for API calls, logging issues to the console for debugging.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Fetch API**
- **TMDb API**

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You’ll need a modern web browser like Google Chrome, Mozilla Firefox, or Microsoft Edge to run the application.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movies-site.git

2. **Navigate to the project directory:**
   ```bash
   cd movies-site
   
3. **Open the index.html file in your preferred web browser.**

### API Reference

This project uses the TMDb API to fetch movie data. You will need an API key from TMDb to access their movie database.

1. **API Endpoint for Popular Movies:**
   ```bash
   https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY&page=1

2. **API Endpoint for Searching Movies:**
   ```bash
   https://api.themoviedb.org/3/search/movie?&api_key=YOUR_API_KEY&query=SEARCH_TERM


