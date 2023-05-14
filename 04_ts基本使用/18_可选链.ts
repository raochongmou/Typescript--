type InfoType = {
  name: string
  age: number
  do?: () => void
  friend?: {
    name: string
    age: number
    hobby?: string
    email?: string
  }
}

const info: InfoType = {
  name: 'curry',
  age: 35,
  friend: {
    name: 'james',
    age: 45,
    hobby: 'basketball',
    email: '1041060542@qq.com'
  }
}

console.log(info?.do);
console.log(info?.friend?.email);

export{}