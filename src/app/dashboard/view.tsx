"use client";

import Nav from "../components/Nav";
import Media from "../components/Media";
import BookCreationForm, { type Book } from "../components/BookCreationForm";
import { useEffect, useState } from "react";
import MovieCreationForm, { type Movie } from "../components/MovieCreationForm";

const DashboardView = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const bookStorage = localStorage.getItem("books");
    if (bookStorage) {
      setBooks(JSON.parse(bookStorage));
    }
    const movieStorage = localStorage.getItem("movies");
    if (movieStorage) {
      setMovies(JSON.parse(movieStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <Nav>Medien</Nav>

      <BookCreationForm
        onBookCreation={(book) => {
          setBooks((books) => [...books, book]);
        }}
      ></BookCreationForm>

      {books.map((book) => {
        return (
          <Media
            key={book.title + book.isbn}
            title={book.title}
            isbn={book.isbn}
            description={book.description}
          ></Media>
        );
      })}

      <MovieCreationForm
        onMovieCreation={(movieData) => {
          setMovies((movies) => {
            const newMovies = [...movies, movieData];
            localStorage.setItem("movies", JSON.stringify(newMovies));
            return newMovies;
          });
        }}
      ></MovieCreationForm>
      {movies.map((movie) => {
        return (
          <>
            <div>{movie.movieTitle}</div>
            <div>{movie.director}</div>
            <div>{movie.description}</div>
          </>
        );
      })}
    </>
  );
};

export default DashboardView;
