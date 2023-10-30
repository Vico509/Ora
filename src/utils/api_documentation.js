const introAndAuthentication = 
  {
    Introduction:
      "The Bible API is a RESTful API developed and maintained by Zoomer Digital Group. It provides access to a wide range of Bible-related information, including books, chapters, verses, versions, genres, and search functionality. This API is a powerful tool for developers, ministries, and anyone interested in sharing and studying the Bible.",
    Authentication:
      "To access certain protected API endpoints and enhance security, authentication is required. You need to register for an API key and authenticate using your email and password.",
    SwaggerDocumentation: 
      "To learn more about our API, including interactive testing, please visit our ",
    Links: {
      BaseUrl: "Base URL: https://bibleapi20231004120329.azurewebsites.net/v1/BibleApi",
      Swagger: "https://bibleapi20231004120329.azurewebsites.net/index.html",
    }
  }


// Endpoints
const bibleApiEndpoints = [
  {
    name: "login",
    endpoint: "/login",
    method: "POST",
    parameters: ["email", "password"],
    purpose:
      "Authenticates users and provides an authentication token for accessing restricted API endpoints.",
  },
  {
    name: "register",
    endpoint: "/register",
    method: "POST",
    parameters: ["fullName", "email", "password"],
    purpose:
      "Allows users to register a new account for accessing restricted API endpoints.",
  },
  {
    name: "books",
    endpoint: "/books?apikey={apikey}",
    method: "GET",
    parameters: ["apiKey"],
    purpose: "Retrieves a list of all available books in the Bible.",
  },
  {
    name: "book by ID or Name",
    endpoint: "/book={book}?apikey={apikey}",
    method: "GET",
    parameters: ["book", "apikey"],
    purpose:
      "Retrieves detailed information about a specific book in the Bible based on its ID or name.",
  },
  {
    name: "genres",
    endpoint: "/genres?apikey={apikey}",
    method: "GET",
    parameters: ["apikey"],
    purpose: "Retrieves a list of all available genres in the Bible.",
  },
  {
    name: "genre by ID or Name",
    endpoint: "/genre={genre}?apikey={apikey}",
    method: "GET",
    parameters: ["genre", "apikey"],
    purpose:
      "Retrieves detailed information about a specific genre in the Bible based on its ID or name.",
  },
  {
    name: "versions",
    endpoint: "/versions?apikey={apikey}",
    method: "GET",
    parameters: ["apikey"],
    purpose: "Retrieves a list of all available Bible versions.",
  },
  {
    name: "version by Name, ShortName, or ID",
    endpoint: ": /versions/name={name}?apikey={apikey}",
    method: "GET",
    parameters: ["name", "apikey"],
    purpose:
      "Retrieves detailed information about a specific Bible version based on its name, short name, or ID.",
  },
  {
    name: "version by Year",
    endpoint: "/versions/year={year}?apikey={apikey}",
    method: "GET",
    parameters: ["year", "apikey"],
    purpose: "Retrieves Bible versions published in a specific year.",
  },
  {
    name: "version by Language",
    endpoint: "/versions/lang={lang}?apikey={apikey}",
    method: "GET",
    parameters: ["lang", "apikey"],
    purpose: "Retrieves Bible versions available in a specific language.",
  },
  {
    name: "version by Research Status",
    endpoint: "/versions/research={research}?apikey={apikey}",
    method: "GET",
    parameters: ["research", "apikey"],
    purpose:
      "Retrieves Bible versions categorized as research (1) or non-research (0).",
  },
  {
    name: "chapter by Version, Book, and Chapter Number",
    endpoint:
      "/version={version}/book={book}/chapter={chapter}?apikey={apikey}",
    method: "GET",
    parameters: ["version", "book", "chapter", "apikey"],
    purpose:
      "Retrieves the content of a specific chapter in a given Bible version, book, and chapter number.",
  },
  {
    name: "verse by Version, Book, Chapter, and Verse Number",
    endpoint:
      "/version={version}/book={book}/chapter={chapter}=verse/{verse}?apikey={apikey}",
    method: "GET",
    parameters: ["version", "book", "chapter", "verse", "apikey"],
    purpose:
      "Retrieves the content of a specific verse in a given Bible version, book, chapter, and verse number.",
  },
  {
    name: "search Verses by Keyword",
    endpoint:
      "/search/version={version}/keyword={keyword}?apikey={apikey}",
    method: "GET",
    parameters: ["version", "keyword", "apikey"],
    purpose:
      "Retrieves Bible verses that match the provided keyword in the specified Bible version.",
  },
];

export { bibleApiEndpoints, introAndAuthentication };
