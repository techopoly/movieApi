const axios = require("axios");
const getDb = require("../util/database").getDb;

const fetchMovies = async (title, author) => {
  const db = getDb();
  console.log(author);
  const query = {
    $or: [
      { title: title },
      { author: author }
    ]
  };
  const cursor = await db
    .collection("movies")
    .find(query);
  response = cursor.toArray();
  return response;
};

const createMovie = async (title, author, desc) => {
  const db = getDb();
  console.log("trying...");
  console.log(db);
  const response = await db
    .collection("movies")
    .insertOne({ title: title, author: author, desc: desc });
  return response;
  //   } catch (err) {
  //     console.log('error occurred in creactMovie function of movie_M')
};

exports.fetchMovies = fetchMovies;
exports.createMovie = createMovie;
