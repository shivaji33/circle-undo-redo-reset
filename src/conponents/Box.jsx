import {useEffect, useState} from 'react';
import Circle from './Circle';
import Controls from './Controls';

const COLORS = ["#198E4F","#41B2A0","#F2CE47","#E89524","#CE573C", "#A64523", "#4F354E"]
const Box = () => {
  const [circles, setCircles] = useState([]);
  const [removedCircles,setRemovedCircles] = useState([]);


  const getColor = () => {
      return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  const onCreateCircle = (e) => {
    const {clientX, clientY} = e;
    setCircles(prev => [...prev, {
      x: clientX,
      y: clientY,
      color: getColor(),
      id: new Date().getTime()
    }])
  }

  const onControlChange = (type) => {
    switch(type) {
      case 'UNDO': {
        if (!circles.length) {
          return;
        }
        const circleCopy = [...circles];
        const popElm = circleCopy.pop();
        setRemovedCircles(prev => [...prev,popElm]);
        setCircles(circleCopy)
        break;
      }
      case 'REDO': {
        if (!removedCircles.length) {
          return;
        }
         const removedCirclesCopy = [...removedCircles];
        const popElm = removedCirclesCopy.pop();
        setCircles(prev => [...prev,popElm]);
        setRemovedCircles(removedCirclesCopy);
        break;
      }
      case 'RESET': {
        setCircles([]);
        setRemovedCircles([]);
        break;
      }
      default: {
        throw Error('Invalid type');
      }
    }
  }

  useEffect(() => {
    console.log({removedCircles,circles});
  }, [removedCircles,circles]);

  return <div className="box" onClick={onCreateCircle} >
    <Controls onControlChange={onControlChange} />
    {circles.map(circle => <Circle key={circle.id} {...circle} />)}
  </div>
}

export default Box;