"use client";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "@/redux/slices/counter.slice";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

export default function Home({}: Props) {
  const dispatch = useDispatch();
  return (
    <center>
      <button
        className="bg-black text-white p-1 mx-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-black text-white p-1 mx-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-black text-white p-1 mx-2"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment by 10
      </button>
      <button
        className="bg-black text-white p-1 mx-2"
        onClick={() => dispatch(decrementByAmount(10))}
      >
        Decrement by 10
      </button>
      <button
        className="bg-black text-white p-1 mx-2"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </center>
  );
}
