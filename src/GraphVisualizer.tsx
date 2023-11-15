import { FC, ReactElement } from "react";

export interface ISortNode {
  value: number;
  focused: boolean;
}
interface SortVisualizerProps {
  nodes: ISortNode[];
  indexToFocus: number;
}

export function SortVisualizer({ nodes, indexToFocus }: SortVisualizerProps) {
  const elements: ReactElement[] = [];
  nodes.forEach((node, index) => {
    elements.push(
      <td key={index}>
        <NodeDisplay node={node} backgroundColor={indexToFocus===index?'red':'blue'} />
      </td>
    );
  });
  return (
    <table style={{ flexDirection: "row", width: "auto", minWidth: "800px", justifyContent: "flex-end" }}>
        <tbody>
      <tr style={{verticalAlign: 'bottom'}}>{elements}</tr>
      </tbody>
    </table>
  );
}

interface NodeDisplayProps {
  node: ISortNode;
  width?: string;
  backgroundColor?: string;
}

export function NodeDisplay({ node, backgroundColor, width }: NodeDisplayProps) {
  return (
    <div
      style={{
        height: `${(5 + node.value) * 10}px`,
        backgroundColor:backgroundColor?? "blue",
        width: "auto",
        minWidth: "5px",
        margin: "2px",
      }}
    />
  );
}
