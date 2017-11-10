# MEAN - DVD Searcher

## Installation

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

`npm start` in your console to install **bower** and **npm packages**.

### The URL to start in localhost:

```
This project responds to localhost:3000/
```

## Add Dvds

```
    curl -X POST --data "name=YOUR FAVOURITE FILM&description=Description of the film you want to save.&image=string with an html" localhost:3000/dvds
```

## Get Dvds

```
   curl -X GET -d data localhost:3000/dvds
```

or directly:

```
    curl localhost:3000/dvds
```
