const Controls = ({onControlChange}) => {
  return <div onClick={(e) => {
    e.stopPropagation();
  }}>
    <button onClick={() => onControlChange('UNDO')}>Undo</button>
    <button onClick={() =>onControlChange('REDO')}>Redo</button>
    <button onClick={() => onControlChange('RESET')}>Reset</button>
  </div>
}

export default Controls;