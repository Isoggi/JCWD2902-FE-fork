"use client";
import React, { useState } from "react";

type Props = {};

export default function HooksComponent({}: Props) {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <center>
        <div className="mt-6">
          <div className="text-xl mb-3">{count}</div>
          <button
            type="button"
            title="hooksButton"
            onClick={() => setCount(count + 1)}
            className="border-blue-400 bg-blue-700"
          >
            Click Me
          </button>
        </div>
      </center>
    </div>
  );
}
