import React from "react";

const Card = (props) => {
  return (
    <div className="group bg-[#252A30] border border-[#363C45] hover:border-[#7CA9E8]/60 rounded-xl overflow-hidden transition-all duration-200 h-full flex flex-col">
      <a
        href={props.elem.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col h-full p-2.5"
      >
        <div className="aspect-[4/3] w-full overflow-hidden bg-[#202329] rounded-lg">
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={props.elem.download_url}
            alt={props.elem.author || "Gallery image"}
            loading="lazy"
          />
        </div>
        <div className="pt-2.5 px-0.5">
          <h2
            className="font-medium text-sm text-[#F5F7FA] group-hover:text-[#A3C4F3] transition-colors truncate"
            title={props.elem.author}
          >
            {props.elem.author}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
