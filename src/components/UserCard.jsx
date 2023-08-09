import {useState} from 'react'

const UserCard = ({person}) => {

    const [name, setName] = useState('Daboikiabo')

    // const [state, setState] = useState(initalState)

    const changeNameFn = () => {
        setName('Johnson ')
    }

  return (
    <div>
      <p className='text-white font-extrabold text-xl'  >{name}</p>
      <p className='text-white font-extrabold text-xl'  >{person.sex}</p>
      <p className='text-white font-extrabold text-xl'  >{person.religion}</p>
      <p className='text-white font-extrabold text-xl'  >{person.bestHobby}</p>
      <button className='text-white' onClick={changeNameFn} >Change Name</button>
    </div>
  )
}

export default UserCard
