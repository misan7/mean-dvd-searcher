# MEAN - DVD Searcher

This project is made with Angular 1, MongoDB and Mongoose, Express and Node.js.

I used **Browserify** to compile **Javascript** code and **Babelify**. **Bootstrap 4** and **Sass** for styling the app.

## Installation

You need **[Node.js](https://nodejs.org/es/)** to test this app.

### .env File Configuration

You have to create a file `.env` in the main folder and write the environment vars to do a correct connection.

- Port:

```
PORT=3000
```

- MongoDB path & database:

```
DB_URI=mongodb://localhost:27017/test
```

### Run the Server:

`npm start` in your console to install **npm packages**.

### The URL to start in localhost:

```
This project responds to localhost:3000/
```

## Development environment

If you want to edit the code easily, I've created a Script to start in parallel some process. This command in console **`npm run work`** will help with...

```
    "work": "npm-run-all --parallel dev build:js:watch build:scss:watch"
```

## Endpoints

### Get Dvds

```
   curl -X GET -d data localhost:3000/api/dvds
```

or directly:

```
    curl localhost:3000/api/dvds
```

### Add Dvds

```
    curl -X POST --data "name=YOUR FAVOURITE FILM&description=Description of the film you want to save.&image=string with an html" localhost:3000/api/dvds
```

### Remove Dvd

```
    curl -X DELETE localhost:3000/api/dvd/593515e497637fe91422a9d2
```

### Update Dvd

```
    curl -X PUT --data "name=Big Fish" localhost:3000/api/dvd/59351820a38462ec408d15d1
```

### Get Dvd by ID

```
    curl localhost:3000/api/dvd/5a09cb5031f3da1bcc58cea6
```

## Web Scraping

I used [cheerio](https://cheerio.js.org/) for parsing some Star Wars films from [filmaffinity](https://www.filmaffinity.com/es/main.html).

For using this database, you just have to enter to the root:

```
./server/parser/
```

Then use the command:

```
node getFilms.js
```

You will have a list of Star Wars films in your database.