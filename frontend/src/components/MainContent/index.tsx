'use client'

import { useEffect, useState } from 'react'
import { Profile } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

import UserRegistration from '@/components/Users/UserRegistration'
import ListUser from '@/components/Users/ListUser'

export function MainContent() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3030')
      setUsers(
        res.data.map((user: any, index: any) => ({ ...user, order: index })),
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])
  return (
    <Profile>
      <h2>Bem-vindo à pagina de Pesquisa de Satisfação!</h2>
      <h3>
        Fique à vontade para escrever o que a Facilita System tem Sido para você
        e sua empresa 🤍
      </h3>
      <UserRegistration
        onEdit={onEdit}
        setOnEdit={setOnEdit}
        getUsers={getUsers}
      />
      <ListUser setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
    </Profile>
  )
}

export default MainContent
