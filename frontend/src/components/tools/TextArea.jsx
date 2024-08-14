const TextArea = ({content}) => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[4px]">
        <div className="w-[269.6px] relative leading-[22.7px] font-light inline-block mq450:text-lgi mq450:leading-[18px]">
          {content}
        </div>
        <textarea
          className="bg-[transparent] h-[253.3px] w-auto [outline:none] self-stretch relative box-border border-[1px] border-solid border-gray-300"
          rows={13}
          cols={34}
        />
      </div>
    );
  };

export default TextArea;