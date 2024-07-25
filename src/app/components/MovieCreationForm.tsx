export type Movie = {
  movieTitle: string;
  director: string;
  description: string;
};

type MovieCreationFormProps = {
  onMovieCreation: (movie: Movie) => any;
};

const MovieCreationForm = ({ onMovieCreation }: MovieCreationFormProps) => {
  return (
    <>
      <form
        className="flex flex-col gap-8 max-w-sm mx-auto mt-12"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const movieData = {
            movieTitle: formData.get("movieTitle"),
            director: formData.get("director"),
            description: formData.get("description"),
          } as Movie;
          onMovieCreation(movieData);
          e.target.reset();
        }}
      >
        <header>Movie Creator</header>
        <div className="flex justify-center gap-4 flex-1">
          <div className="flex flex-col flex-1">
            <label htmlFor="text">Movie title</label>
            <input
              type="text"
              name="movieTitle"
              id="text"
              className="border w-full rounded"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="director">Director</label>
            <input
              type="text"
              name="director"
              id="director"
              className="border w-full rounded"
            />
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <div className="flex flex-col flex-1">
            <label htmlFor="description">description</label>
            <textarea
              name="description"
              id="description"
              className="border w-full rounded"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="border rounded">
          Save
        </button>
      </form>
    </>
  );
};

export default MovieCreationForm;
