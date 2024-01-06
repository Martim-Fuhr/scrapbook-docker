import React, { useState } from 'react'
import axios from 'axios'
import { Wrapper } from './styles'
import { FaTrash, FaEdit, FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'

interface User {
  id: number
  name: string
  comment: string
}

interface ListUserProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
}

export default function ListUser({
  users,
  setUsers,
  setOnEdit,
}: ListUserProps) {
  const handleEdit = (item: React.SetStateAction<User | null>) => {
    setOnEdit(item)
  }

  const handleDelete = async (id: number) => {
    await axios
      .delete('http://localhost:3030/' + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id)

        setUsers(newArray)
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data))

    setOnEdit(null)
  }

  return (
    <Wrapper>
      <ul>
        {users.map((item, i) => (
          <li key={i}>
            <div className="write-wrapper">
              <span className="comment">{item.comment}</span>
              <p>
                Atribuida a:
                <span className="name">{item.name}</span>
              </p>
            </div>

            <div className="flex justify-between items-end flex-col">
              <button
                onClick={() => {
                  handleEdit(item)
                }}
                className="edit hover:cursor-pointer"
              >
                <FaEdit onClick={() => handleEdit(item)} />
              </button>
              <span className="delete hover:cursor-pointer">
                <FaTrash onClick={() => handleDelete(item.id)} />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
