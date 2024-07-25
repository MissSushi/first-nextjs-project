"use client";

export type Book = {
  title: string;
  description: string;
  isbn: string;
};

type BookCreationFormProps = {
  onBookCreation: (book: Book) => any;
};

const BookCreationForm = ({ onBookCreation }: BookCreationFormProps) => {
  return (
    <form
      className="flex flex-col gap-8 max-w-sm mx-auto mt-12"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const book = {
          title: formData.get("title"),
          description: formData.get("description"),
          isbn: formData.get("isbn"),
        } as Book;

        onBookCreation(book);
        e.target.reset();
      }}
    >
      <header>Book Creator</header>
      <div className="flex justify-center gap-4 flex-1">
        <div className="flex flex-col flex-1">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="title"
            id="text"
            className="border w-full rounded"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="number"
            name="isbn"
            id="isbn"
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
  );
};

export default BookCreationForm;
