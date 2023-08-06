import { Handle, Position } from "reactflow";
import { styled } from "styled-components";

const StartNodeCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #000;
  padding: 10px;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function StartNode({ data }: any) {
  return (
    <>
      <StartNodeCard>
        <p>Start: Connect your wallet</p>
      </StartNodeCard>
      {["a", "b", "c"].map((item, i) => {
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
