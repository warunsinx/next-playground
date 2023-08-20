"use client";

import CountHolder from "@/components/CountHolder";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const TestContaienr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-color: black;
  color: white;
  flex-direction: column;
`;

const countReducer = (state: number, action: string) => {
  if (action === "add") {
    return state + 1;
  }
  if (action === "minus") {
    return state - 1;
  }
  return state;
};

const x = { a: 1, b: 2 };

const y = Object.values(x).reduce((prev, curr) => {
  prev = prev + curr;
  return prev;
}, 0);

export default function TestReact() {
  const addRef = useRef<any>();
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [count2, setCount2] = useState(20);

  console.log({ y });

  console.log("render");

  const computeX = () => {
    console.log("computeX");
    return 5 + 5;
  };

  const xNum = useMemo(() => computeX(), []);

  const cacheFunc = useCallback(() => {
    console.log("cacheFunc");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(addRef.current.offsetWidth);
    return () => console.log("unmount from useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
    cacheFunc();
    return () => console.log("unmount form useEffect");
  }, [cacheFunc]);
  return (
    <TestContaienr>
      <button onClick={() => setCount2((prev) => prev + 1)}>+1</button>
      <p>{xNum}</p>
      <p>{count}</p>
      <CountHolder key={count2} count={count2} />
      <button ref={addRef} onClick={() => dispatchCount("add")}>
        add
      </button>
      <button onClick={() => dispatchCount("minus")}>minus</button>
    </TestContaienr>
  );
}
