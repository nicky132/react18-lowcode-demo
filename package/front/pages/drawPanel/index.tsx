import React from 'react';
import { useDrop } from 'react-dnd';
import { COMPONENT_TYPE } from '../../constants';
import './style.css';

interface IDrawPanelProps {
  data: any;
  setData: Function;
  setRightPanelType: Function;
  setRightPanelElementId: Function;
}

export default function DrawPanel(props: IDrawPanelProps) {
  const { data, setRightPanelType, setRightPanelElementId, setData } = props;

  const [, drop] = useDrop(() => ({
    accept: COMPONENT_TYPE.TEXT,
    drop: (_, monitor) => {
      const { x, y } = monitor.getClientOffset();
      const currentX = x - 310;
      const currentY = y - 20;

      setData([
        ...data,
        {
          id: `text-${data.length + 1}`,
          type: 'text',
          data: '新建的文本组件',
          color: '#000000',
          size: '12px',
          width: '200px',
          height: '20px',
          left: `${currentX}px`,
          top: `${currentY}px`
        }
      ]);
    }
  }));

  const generateContent = () => {
    const output = [];
    for (const item of data) {
      if (item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setRightPanelType(COMPONENT_TYPE.TEXT);
              setRightPanelElementId(item.id);
            }}
            style={{
              padding: '10px',
              cursor: 'pointer',
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: 'absolute',
              backgroundColor: '#bbbbbb'
            }}
          >
            {item.data}--nicky
          </div>
        );
      }
    }

    return output;
  };

  return (
    <div className="draw-panel" ref={drop}>
      {generateContent()}
    </div>
  );
}
