import React from 'react';

const arr = ['happy', 'sad', 'angry'];

const Test = () => {
  let index = arr.indexOf('angry');
  let newVar = arr[arr.length - 4]
  console.log(index)
  return (
    <h1>Test {index} {newVar}</h1>
  )
}

export default Test