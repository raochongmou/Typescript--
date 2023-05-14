// 泛型可以通过传的值来确定是什么类型推导
function useState<T>(state: T) {
  let currentState = state;
  const changeState = (newState: T) => {
    currentState = newState;
  }
  // const arr: [state: T, changeState: (newState: T) => void] = [state, changeState];
  const arr: [T, (newState: T) => void] = [state, changeState];
  return arr;
}

const [counter, setCounter] = useState(10);
const [name, setName] = useState('abc');
const [flag, setFlag] = useState(true);

export{}