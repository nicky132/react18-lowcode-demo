import React, { useState } from 'react';
import './style.less';
import DrawPanel from '../drawPanel';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { COMPONENT_TYPE } from '../../constants';

const MOCK_DRAW_DATA = [
  {
    id: 'text-1',
    type: 'text',
    data: '文字组件1',
    color: '#409eff',
    size: '16px',
    width: '200px',
    height: '20px',
    left: '100px',
    top: '100px'
  },
  {
    id: 'text-2',
    type: 'text',
    data: '文字组件2',
    color: '#000',
    size: '16px',
    width: '200px',
    height: '20px',
    left: '100px',
    top: '150px'
  },
  {
    id: 'text-3',
    type: 'text',
    data: '文字组件3',
    color: '#f56c6c',
    size: '16px',
    width: '200px',
    height: '20px',
    left: '100px',
    top: '200px'
  }
];

export default function App() {
  const [drawPanelData, setDrawPanelData] = useState([...MOCK_DRAW_DATA]);
  const [rightPanelType, setRightPanelType] = useState(COMPONENT_TYPE.NONE);
  const [rightPanelElementId, setRightPanelElementId] = useState('');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-row-space-between app">
        <LeftPanel data={drawPanelData}></LeftPanel>
        <DrawPanel
          data={drawPanelData}
          setData={setDrawPanelData}
          setRightPanelType={setRightPanelType}
          setRightPanelElementId={setRightPanelElementId}
        ></DrawPanel>
        <RightPanel
          type={rightPanelType}
          data={drawPanelData}
          elementId={rightPanelElementId}
          setDrawPanelData={setDrawPanelData}
        ></RightPanel>
      </div>
    </DndProvider>
  );
}
