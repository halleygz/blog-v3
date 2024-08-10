const FormBtns = ({ content, onClick, isLoading }) => {
  return (
    <button
    type="submit"
      className="w-full bg-pink-300 text-white py-2 rounded hover:bg-pink-400"

      onClick={onClick}
    >
      {content}
    </button>
  );
};

const TagBtns = ({content, onClick, isLoading}) => {
    return (
        <button onClick={onClick} className="border border-orange-500 text-orange-500 px-4 py-1 rounded-full hover:bg-orange-100">{content}</button>
    )
}

const LikeDislike = ({content, onClick, isLoading}) => {
    return(
        <button className="flex-1 bg-orange-200 text-orange-600 py-2 rounded" onClick={onClick} >{content}</button>
    )
}

export { FormBtns, TagBtns, LikeDislike };
