import React, { useCallback } from 'react';
import ReactFlow, {ReactFlowProvider,useStoreApi, useReactFlow,addEdge,Controls, MarkerType,useNodesState,  useEdgesState,} from 'reactflow';

import 'reactflow/dist/style.css';
import FloatingEdge from './FloatingEdge.js';
import FloatingConnectionLine from './FloatingConnectionLine.js';
import { createNodesAndEdges } from './utils.js';
import CustomNode from './CustomNode.jsx'
import ZeroNode from './ZeroNode.jsx';
const nodeTypes={
  selectorNode: CustomNode,
  zeroNode:ZeroNode,
}
const exchX=198.5
const exchY=27
const initialNodes = [
  { id: '1', type:'selectorNode',  position: { x: 0, y: 0 }, data: {autoLayout:true, rank: 0, pos:'l', globalPos:'l', label: '1' } },
  { id: '2', type:'selectorNode',  position: { x: 300, y: 0 }, data: {autoLayout:true, rank: 0, pos:'r', globalPos:'r', label: '2' } },
  { id: '3', type:'selectorNode',  position: { x: 150, y: 350 }, data: {autoLayout:true, rank: -1, pos:'d', globalPos:'m', label: '3' } },
  { id: '4', type:'selectorNode',  position: { x: -50, y: 350 }, data: {autoLayout:true, rank: -1, pos:'d', globalPos:'l', label: '4' } },
  { id: '5', type:'selectorNode',  position: { x: 350, y: 350 }, data: {autoLayout:true, rank: -1, pos:'d', globalPos:'r', label: '5' } },
  { id: 'z1', type:'zeroNode',  position: { x: 198.5, y: 27 }, data: {autoLayout:true, rank: 0, pos:'z',globalPos:'z', label: '5' } },
];

const initialEdges = [{type:'step',sourceHandle:'SourceBottom',targetHandle:'TarTop', id: 'ez1-2', source: 'z1', target: '4' },
                      {type:'step',sourceHandle:'SourceBottom',targetHandle:'TarTop', id: 'ez1-5', source: 'z1', target: '5' },
                      {type:'step',sourceHandle:'SourceBottom',targetHandle:'TarTop', id: 'ez1-3', source: 'z1', target: '3' },
                      {type:'smoothstep',sourceHandle:'SourceRight',targetHandle:'TarLeft', id: 'e1-2', source: '1', target: '2' },

                      /*
                      {type:'smoothstep',sourceHandle:'SourceRight',targetHandle:'TarTop', id: 'e1-3', source: '1', target: '3' },
                      {type:'smoothstep',sourceHandle:'SourceLeft',targetHandle:'TarTop', id: 'e2-3', source: '2', target: '3' },
                      {type:'smoothstep',sourceHandle:'SourceRight',targetHandle:'TarTop', id: 'e1-4', source: '1', target: '4' },
                      {type:'smoothstep',sourceHandle:'SourceRight',targetHandle:'TarTop', id: 'e1-5', source: '1', target: '5' },
                      {type:'smoothstep',sourceHandle:'SourceLeft',targetHandle:'TarTop', id: 'e2-4', source: '2', target: '4' },
                      {type:'smoothstep',sourceHandle:'SourceLeft',targetHandle:'TarTop', id: 'e2-5', source: '2', target: '5' },
                      */
                    ];
const edgeTypes = {
  floating: FloatingEdge,
};
let idG=6;

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const addRightNodes = (node) =>{
    let idF=idG
    let idS=idG+1
    let idZero=idG+2
    console.log(node)
    const newNode={id: `${idF}`, type: 'selectorNode', position: { x: node.position.x+350, y: node.position.y-200 },data: {autoLayout:false, globalPos:node.data.globalPos, rank: node.data.rank+1, pos:'r', label: idF } }
    const newNode2={id: `${idS}`, type: 'selectorNode', position: { x: node.position.x+150, y: node.position.y-200 },data: {autoLayout:false, globalPos:node.data.globalPos, rank: node.data.rank+1, pos:'l', label: idS } }
    const newNodeZero={id: `z${idZero}`, type: 'zeroNode', position: { x: node.position.x+300, y: node.position.y-173 },data: {autoLayout:false, globalPos:node.data.globalPos, rank: node.data.rank+1, pos:'z', label: `z${idG}` } }
    const newEdge={id: `e${idG}`, type: 'smoothstep', sourceHandle:'SourceRight',targetHandle:'TarLeft',source: `${idS}`, target: `${idF}` }
    const newEdgeZero={id: `e${idZero+1}`, type: 'smoothstep', sourceHandle:'SourceBottom',targetHandle:'TarTop',source: `z${idZero}`, target: `${node.id}` }
    setNodes([...nodes, newNode,newNode2, newNodeZero])
    setEdges([...edges, newEdge, newEdgeZero])
    console.log(nodes)
    console.log(edges)
    idG+=2
  }

  const addLeftNodes = (node) => {
    let idF=idG
    let idS=idG+1
    let idZero=idG+2
    console.log(node)
    const newNode={id: `${idF}`, type: 'selectorNode', position: { x: node.position.x-350, y: node.position.y-200 },data: {autoLayout:false, globalPos:node.data.globalPos, rank: node.data.rank+1, pos:'l', label: idF } }
    const newNode2={id: `${idS}`, type: 'selectorNode', position: { x: node.position.x-150, y: node.position.y-200 },data: {autoLayout:false, globalPos:node.data.globalPos, rank: node.data.rank+1, pos:'r', label: idS } }
    const newNodeZero={id: `z${idZero}`, type: 'zeroNode', position: { x: node.position.x-200, y: node.position.y-173 },data: {autoLayout:false, globalPos:node.data.globalPos, rank: node.data.rank+1, pos:'z', label: `z${idG}` } }
    const newEdge={id: `e${idG}`, type: 'smoothstep', sourceHandle:'SourceRight',targetHandle:'TarLeft',source: `${idF}`, target: `${idS}` }
    const newEdgeZero={id: `e${idZero+1}`, type: 'smoothstep', sourceHandle:'SourceBottom',targetHandle:'TarTop',source: `z${idZero}`, target: `${node.id}` }
    setNodes([...nodes, newNode,newNode2, newNodeZero])
    setEdges([...edges, newEdge, newEdgeZero])
    console.log(nodes)
    console.log(edges)
    idG+=2
  }

  const changePosition = (element,prevPos)=>{
    if(element.data.globalPos==='l'){
      element.position.x-=250
    }
    if(element.data.globalPos==='r'){
      element.position.x+=250
    }
    const newNodes = nodes.filter((el)=>el.id!==element.id)
    element.data.autoLayout=true
    setNodes([...newNodes, element])
  }

  const autoLayout = (r,prevPos) => {
    if(r==0){ return }
    const newNodes = nodes.filter((el)=>el.data.rank===r)
    if(newNodes.length>=(3*(r+1))){
      newNodes.forEach(element => {
          changePosition(element,prevPos)
      });
    }
    autoLayout(r-1, prevPos)
  }

  const handleClickNode = (node) =>{
    //autoLayout(node.data.rank, node.data.globalPos)

    if(node.data.pos ==='r'){
      addRightNodes(node)
    }if(node.data.pos === 'l'){
      addLeftNodes(node)
    }
    
  }
  const res = () => {
    nodes.forEach(element => {
      if(element.data.rank>=1){
        changePosition(element)
      }
    });
  }
  const onClickHandelr = () => {
    nodes.forEach(i => {
      nodes.forEach(j => {
        if((i.position.y === j.position.y) && (Math.abs(i.position.x-j.position.x) <= 100) && (!i.id.includes('z') && !j.id.includes('z')) && (i.data.rank >= 1 && j.data.rank >= 1) && (i.id != j.id)){
          console.log('id i elem: '+i.id + '\nid j elem: '+ j.id)
          res()
        }
      });
    });
  }
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <button onClick={()=>{onClickHandelr()}}>layout</button>
    <ReactFlowProvider>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(ev,node)=>{handleClickNode(node)}}
        style={{backgroundColor: "white", height: "50px"}}
        connectionLineComponent={FloatingConnectionLine}
        draggable={false}
        >
      <Controls />
      </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
