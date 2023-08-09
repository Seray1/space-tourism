import React, {useState} from 'react'

const TodoInputs = ({appendToList}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userDetails = {
    username, password, id: new Date()
  }
 const sendDetails = (e) => {
  e.preventDefault()
  appendToList(userDetails)
  setUsername('')
  setPassword('')
 }

  return (
    <form onSubmit={sendDetails} className=''>
      <input placeholder='Enter todo Item' value = {username} onChange={e => setUsername(e.target.value)} />
      <input placeholder='Enter todo Item' value = {password} onChange={e => setPassword(e.target.value)} />
      <button className='text-white' >Enter Item</button>
    </form>
  )
}

export default TodoInputs
