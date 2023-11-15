import { ISortNode } from "./GraphVisualizer";

export abstract class Sorter{
    currentFocusedNodes: ISortNode[] = [];
    //abstract static update(nodes: ISortNode[], ...props): ISortNode[];
    static isSorted(nodes: ISortNode[]){
        for(let i=1;i<nodes.length;i++){
            if(nodes[i]>nodes[i-1]){
                continue;
            }
            return false;
        }
      }
}

export class BubbleSorter {
  static update(
    nodes: ISortNode[],
    currentIndexChecking: number,
    currentFocusedNodeIndex?: number
  ) {
    console.log(`current index: ${currentIndexChecking}`);
    if (currentIndexChecking >= nodes.length-1) {
      //do something
      if(Sorter.isSorted(nodes)){
        return     {
                nodes: nodes,
                currentIndexChecking: currentIndexChecking,
                sorted: true
              };
      }
      else{
        currentIndexChecking=0;
      }
    }
    if (
      nodes[currentIndexChecking].value > nodes[currentIndexChecking + 1].value
    ) {
      const tempNode = { ...nodes[currentIndexChecking + 1] };
      nodes[currentIndexChecking + 1] = nodes[currentIndexChecking];
      nodes[currentIndexChecking] = tempNode;
    }
    else if(nodes[currentIndexChecking].value < nodes[currentIndexChecking + 1].value){

    }
    return {
      nodes: nodes,
      currentIndexChecking: currentIndexChecking+1,
      sorted: false
    };
  }

  
}
