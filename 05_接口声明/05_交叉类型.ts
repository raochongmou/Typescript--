type Fish = {
  swimming: () => void;
}

type Dog = {
  running: () => void;
}

type Animal1 = Fish | Dog;
type Animal2 = Fish & Dog;

const animal1: Animal1 = {
  running() {}
}

const animal2: Animal2 = {
  running() {},
  swimming() {}
}



export {}