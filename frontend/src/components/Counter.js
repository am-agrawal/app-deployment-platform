"use client";

import { decrement, increment } from "@/store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Counter() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => dispatch(decrement())}
        className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
      >
        -
      </button>
      <span className="min-w-8 text-center font-mono text-lg">{value}</span>
      <button
        type="button"
        onClick={() => dispatch(increment())}
        className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
