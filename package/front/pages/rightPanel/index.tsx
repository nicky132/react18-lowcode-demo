import React from 'react';
import { COMPONENT_TYPE } from '../../constants';
import './style.less';

interface IRigthPanelProps {
  type: COMPONENT_TYPE;
  data: any;
  elementId: string;
  setDrawPanelData: Function;
}

export default function RightPanel(props: IRigthPanelProps) {
  const { type, data, elementId, setDrawPanelData } = props;

  const findCurrentElement = (id: string) => {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
    }
    return undefined;
  };

  const updateData = (id: string, key: string, changedData: any) => {
    for (let item of data) {
      if (item.id === id) {
        item[key] = changedData;
      }
    }
    setDrawPanelData([...data]);
  };

  const generateRightPanel = () => {
    if (type === COMPONENT_TYPE.NONE) {
      return <div>未选中元素</div>;
    } else if (type === COMPONENT_TYPE.TEXT) {
      const elementData = findCurrentElement(elementId);
      const inputDomObject = [];
      return (
        <div key={elementId}>
          <div>文字元素</div>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>文字内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字颜色:</div>
            <input
              defaultValue={elementData.color}
              ref={(element) => {
                inputDomObject[1] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.size}
              ref={(element) => {
                inputDomObject[2] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.width}
              ref={(element) => {
                inputDomObject[3] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.height}
              ref={(element) => {
                inputDomObject[4] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              ref={(element) => {
                inputDomObject[5] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.left}
              ref={(element) => {
                inputDomObject[6] = element;
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            className='style-button'
            onClick={() => {
              updateData(elementId, 'data', inputDomObject[0].value);
              updateData(elementId, 'color', inputDomObject[1].value);
              updateData(elementId, 'size', inputDomObject[2].value);
              updateData(elementId, 'width', inputDomObject[3].value);
              updateData(elementId, 'height', inputDomObject[4].value);
              updateData(elementId, 'top', inputDomObject[5].value);
              updateData(elementId, 'left', inputDomObject[6].value);
            }}
          >
            确定
          </button>
        </div>
      );
    }
  };

  return <div className="right-panel">{generateRightPanel()}</div>;
}
