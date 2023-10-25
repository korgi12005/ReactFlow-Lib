import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        style={{visibility:'hidden'}}
        id='TarTop'
        position={Position.Top}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        style={{visibility:'hidden'}}
        position={Position.Right}
        id='TarRigth'
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
       <Handle
        type="target"
        id='TarLeft'

        style={{visibility:'hidden'}}
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        id='TarBottom'

        style={{visibility:'hidden'}}
        position={Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id='SourceLeft'
        style={{visibility:'hidden'}}
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id='SourceRight'
        style={{visibility:'hidden'}}
        position={Position.Right}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id='SourceTop'
        style={{visibility:'hidden'}}
        position={Position.Top}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id='SourceBottom'
        style={{visibility:'hidden'}}
        position={Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    <div style={{visibility:'hidden'}}> s</div>
      </>)})