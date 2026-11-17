import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <div className="col-span-full flex flex-col items-center justify-center py-28 text-center">
      <div className="w-8 h-8 border-2 border-[#363C45] border-t-[#7CA9E8] rounded-full animate-spin mb-3"></div>
      <h3 className="text-[#B0B8C4] font-medium text-sm tracking-wide">
        Loading...
      </h3>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className="w-full">
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-[#17191C] min-h-screen text-[#F5F7FA] flex flex-col">
      <header className="border-b border-[#363C45] bg-[#202329] px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src="/favicon.svg"
              alt="Gallery App Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-sm"
            />
            <h1 className="text-lg sm:text-xl font-semibold text-[#F5F7FA] tracking-tight">
              Gallery App
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
        <div className="relative min-h-[460px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-2">
          {printUserData}
        </div>

        <div className="flex justify-center items-center gap-4 pt-8 pb-4">
          <button
            style={{ opacity: index <= 1 ? 0.6 : 1 }}
            disabled={index <= 1}
            className={`text-sm px-5 py-2.5 rounded-lg font-medium transition-colors ${index <= 1
                ? "bg-[#202329] text-[#B0B8C4] border border-[#363C45] cursor-not-allowed"
                : "bg-[#7CA9E8] hover:bg-[#A3C4F3] text-[#17191C] cursor-pointer active:scale-95"
              }`}
            onClick={() => {
              if (index > 1) setIndex(index - 1);
              setUserData([]);
            }}
          >
            Prev
          </button>
          <h4 className="text-sm font-medium text-[#F5F7FA] bg-[#202329] border border-[#363C45] px-4 py-2.5 rounded-lg">
            Page {index}
          </h4>
          <button
            className="bg-[#7CA9E8] hover:bg-[#A3C4F3] text-sm cursor-pointer active:scale-95 text-[#17191C] rounded-lg px-5 py-2.5 font-medium transition-colors"
            onClick={() => {
              setIndex(index + 1);
              setUserData([]);
            }}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
