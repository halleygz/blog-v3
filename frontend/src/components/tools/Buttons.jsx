const FormBtns = ({ content, onClick, isLoading }) => {
  return (
    <button
      className="w-[200px] h-[57px] mr-[170px] bg-[#E6B9A6] text-[#2F3645] py-2 rounded hover:bg-[#f3a786] text-Lexend Deca font-bold"
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
