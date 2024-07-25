const Media = ({ isbn, title, description }) => {
  return (
    <>
      <ul>
        <li>
          <h1>{title}</h1>
          <div>{isbn}</div>
          <p>{description}</p>
        </li>
      </ul>
    </>
  );
};

export default Media;
