function setState(state: any) {
  let currentState = state;
  const changeState = (newState: any) => {
    currentState = newState;
  }
  const arr: [state: any, changeState: (newState: any) => void] = [state, changeState];
  return arr;
}

const [counter, setCounter] = setState(10);
const [name, setName] = setState('abc');
const [flag, setFlag] = setState(true);

export{}