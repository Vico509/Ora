# Ora
Ora is a web application designed to provide users with the ability to explore different versions and translations of the Bible. Users can search for a specific version, select a book, choose a chapter, and read the corresponding verses.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)

## Demo

You can access a live demo of [Ora](https://ora-ivory.vercel.app/).

## Features

- [x] Users can browse and choose from a list of available Bible versions and translations.
- [x] Users can select a specific book and chapter to read.
- [x] The app provides a search feature for quickly finding version.
- [x] A dedicated page with documentation on how to use the Bible API.

## Getting Started

### Prerequisites

Before you can run this project locally or deploy it, you'll need the following tools and services:

- Node.js and npm (Node Package Manager)
- An API key for the Bible API service

### Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/ZDG-BibleApp/BIBLE_APP.git
   ```

2. Change directory to the project folder:
   ```
   cd BIBLE_APP
   ```

3. Install project dependencies:
   ```
   npm install
   ```

4. Create a configuration file (`config.js`) and add your API key:
   ```javascript
   // src/config.js
   const api_creds = {
      api_key:"api-key-here",
      base_url:"api-base-url-here"
    }
   export {api_creds};
   ```

5. Start the development server:
   ```
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to access the Bible App React.

## Usage

1. On the home page, you can see a list of available Bible versions and translations.
2. Use the search feature or select a version from the list.
3. After choosing a version, select a book and a chapter from the dropdown menu.
4. The selected Bible text will be displayed.

## Documentation

For detailed information on how to use the Bible API and integrate it into your React application, visit the documentation page. The documentation provides information on API endpoints, query parameters, and usage examples.

The documentation page can be accessed from the app or directly at [Bible API Swagger Documentation](https://bibleapi20231004120329.azurewebsites.net/index.html).

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.
