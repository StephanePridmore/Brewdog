import React from 'react';
import './Json.css';

interface JsonProps {
  data: unknown;
}

const JsonComponent = (props: JsonProps) => {
  return (
    <div className='json-panel'>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
};

export default JsonComponent;
