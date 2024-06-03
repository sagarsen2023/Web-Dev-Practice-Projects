"use client"
import { decrement, increment, incrementByAmount, reset } from "@/store/reducers/counterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="w-full h-screen bg-blue-950 text-white">
      <h1 className=" p-10 h-2/5 font-bold text-3xl text-center">Next X Redux</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="text-5xl font-black">Counter: {count}</div>
        <div className="mt-5 flex justify-between items-center gap-5">
          <button
            className="px-3 py-2 bg-green-600 rounded-lg"
            onClick={() => {
              dispatch(increment())
            }}
          >Increment</button>
          <button
            className="px-3 py-2 bg-red-600 rounded-lg"
            onClick={() => {
              dispatch(decrement())
            }}
          >Decrement</button>
          <button className="px-3 py-2 bg-yellow-600 rounded-lg" onClick={() => {
            dispatch(incrementByAmount(5))
          }}>Increment by 5</button>
          <button className="px-3 py-2 bg-gray-600 rounded-lg"
            onClick={() => {
              dispatch(reset())
            }}>Reset</button>
        </div>
      </div>
    </main>
  );
}
