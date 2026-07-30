const ImageCache = ({ questions }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      {questions.map((question) => (
        <img
          key={question.id}
          src={`/monsters/big/${question.id}.webp`}
          decoding="sync"
          loading="eager"
          alt=""
        />
      ))}
    </div>
  );
};

export default ImageCache;
