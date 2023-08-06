import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { styled } from "styled-components";

const CallNodeCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #000;
  padding: 10px;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export function CallNode({ data }: any) {
  const onChange = useCallback((evt: any) => {}, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <CallNodeCard>
        <label htmlFor="text">Call:</label>
        <input id="text" name="text1" onChange={onChange} className="nodrag" />
        <input id="text" name="text2" onChange={onChange} className="nodrag" />
      </CallNodeCard>
      {["a", "b"].map((item, i) => {
        return (
          <Handle
            key={item}
            type="source"
            position={Position.Bottom}
            id={`${item}`}
            style={{ margin: `0 ${i * 10}px 0` }}
          />
        );
      })}
    </>
  );
}
