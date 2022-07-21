import React from 'react'

const App = () => {
  const [num, operation] = React.useState(0)
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex gap-2">
        <button onClick = {()=> operation(num - 1)}>-</button>
        <span>{num}</span>
        <button onClick = {()=> operation(num + 1)}>+</button>
      </div>
    </div>
  )
}

export default App;
