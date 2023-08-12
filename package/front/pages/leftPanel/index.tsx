import axios from 'axios';
import React from 'react';
import TextComponent from '../../components/textComponent';
import {saveData} from '../../api/index';
import './style.less';

interface ILeftPanelProps {
  data: any;
}

export default function LeftPanel(props: ILeftPanelProps) {
  const { data } = props;

  return (
    <div className="left-panel">
      <div className="component-list">
        <TextComponent></TextComponent>
        left-panel
      </div>
      <button
        className="save-button"
        onClick={() => {
          console.log('save:', data);
          saveData( { drawPanelData: data });
          // axios
          //   .post('/api/saveModal', { drawPanelData: data })
          //   .then((res) => {
          //     console.log('res:', res);
          //   })
          //   .catch((err) => {
          //     console.log('err:', err);
          //   });
        }}
      >
        保存
      </button>
    </div>
  );
}
