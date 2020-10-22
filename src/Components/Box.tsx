import React from 'react';

interface BoxProps {
  id: number;
  styles?: React.CSSProperties;
}

export default ({ id, styles }: BoxProps) => {
  return (
    <div className="card-panel" id={"box" + id} style={styles}>
      Box {id}
    </div>
  );
};