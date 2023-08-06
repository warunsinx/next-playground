import { CreateCall } from "./../components/ReactFlow/CreateCall";
import { CallNode } from "@/components/ReactFlow/CallNode";
import { StartNode } from "@/components/ReactFlow/StartNode";
import React, { useCallback, useMemo } from "react";

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
} from "reactflow";

export default function ReactFlowView() {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: `node-0`,
      type: "start",
      position: {
        x: 400,
        y: 100,
      },
      data: {
        text: "Call",
      },
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ call: CallNode, start: StartNode }), []);

  return (
    <div style={{ width: "70vw", height: "70vh" }}>
      <ReactFlow
        key={nodes.length}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <CreateCall setNodes={setNodes} />
        <Controls />
        <MiniMap pannable />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
