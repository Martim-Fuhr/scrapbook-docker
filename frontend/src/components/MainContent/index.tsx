'use client'

import { useEffect, useState } from 'react'
import { Wrapper } from './styles'
import axios from 'axios'

import UserRegistration from '@/components/Users/UserRegistration'
import ListUser from '@/components/Users/ListUser'
interface User {
  id: number
  name: string
  comment: string
}

export function MainContent() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [onEdit, setOnEdit] = useState<User | null>(null)

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
  }, [])
  return (
    <Wrapper>
      <UserRegistration
        users={users}
        setUsers={setUsers}
        onEdit={onEdit}
        setOnEdit={setOnEdit}
        getUsers={getUsers}
      />
      <ListUser setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
    </Wrapper>
  )
}

export default MainContent
