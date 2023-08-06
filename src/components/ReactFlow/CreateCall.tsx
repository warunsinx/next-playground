import React from "react";

export function CreateCall({
  setNodes,
}: {
  setNodes: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  console.log();
  return (
    <div
      style={{
        position: "absolute",
        bottom: 15,
        left: 60,
        zIndex: 10,
      }}
      onClick={() => {
        setNodes((nodes) =>
          nodes.concat({
            id: `node-${nodes.length}`,
            type: "call",
            position: {
              x: nodes.length ? nodes[nodes.length - 1].position.x : 0,
              y: nodes.length ? nodes[nodes.length - 1].position.y + 150 : 0,
            },
            data: {
              text: "Call",
            },
          })
        );
      }}
    >
      Create Call
    </div>
  );
}
