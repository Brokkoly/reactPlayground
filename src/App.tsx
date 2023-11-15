import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ISortNode, SortVisualizer } from './GraphVisualizer';
import { BubbleSorter } from './sorter';

function App() {
  const initialNodes: ISortNode[]= Array.from({length: 40}, () => Math.floor(Math.random() * 40)).map(val=>{return {value: val, focused: false}})

  const [nodes, setNodes] = useState<ISortNode[]>(initialNodes);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [time, setTime] = useState(Date.now());

useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 100);
  return () => {
    clearInterval(interval);
  };
}, []);

  useEffect(() => {
      const {nodes: newNodes , currentIndexChecking: newCurrentIndex} =BubbleSorter.update([...nodes], currentIndex);
      setNodes(newNodes);
      setCurrentIndex(newCurrentIndex);
  }, [time]);


  return (
    <div className="App">
      <SortVisualizer nodes={nodes} indexToFocus={currentIndex}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
