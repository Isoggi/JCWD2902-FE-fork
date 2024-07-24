import React, { useEffect } from "react";

type Props = {};

export default function page({}: Props) {
  //   useEffect(() => {
  //     console.log();
  //   });
  return (
    <center>
      <div>
        <input
          type="text"
          title="number1"
          className="dark:text-white dark:bg-blue-700"
        ></input>
      </div>
      <div>
        <input
          type="text"
          title="number2"
          className="dark:text-white dark:bg-blue-700"
        ></input>
      </div>
      <div className="w-1/4 justify-between flex">
        <button type="button" title="add" className="bg-blue-500">
          +
        </button>
        <button type="button" title="subtract" className="bg-blue-500">
          -
        </button>
        <button type="button" title="divide" className="bg-blue-500">
          /
        </button>
        <button type="button" title="multiplicate" className="bg-blue-500">
          *
        </button>
      </div>
      <div></div>
    </center>
  );
}
