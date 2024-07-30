const Circle = ({x,y,color}) => {
  return <div className="circle" style={{backgroundColor: color,top: `${y}px`,left: `${x}px`}} />
}

export default Circle;