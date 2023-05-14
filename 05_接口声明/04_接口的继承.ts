interface Fish {
  swimming: () => void;
}

interface Dog {
  running: () => void;
}

interface Animal extends Dog, Fish {}

const Animal: Animal = {
  swimming() {},
  running() {}
}

interface Bird {
  flying(): void
}

interface Cow {
  walking(): void
}

interface Pig extends Cow, Bird {}

const pig: Pig = {
  flying(){},
  walking: function(){}
}