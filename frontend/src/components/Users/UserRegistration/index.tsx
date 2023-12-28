import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

import { FormContainer, Button } from './styles'

interface User {
  id: number
  name: string
  email: string
  comment: string
}

interface ListUserProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
  getUsers: () => Promise<void> // Função assíncrona que retorna uma Promise
  onEdit: User | null // Objeto de usuário ou nulo
}

export default function UserRegistration({
  getUsers,
  onEdit,
  setOnEdit,
}: ListUserProps) {
  const ref = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      if (user) {
        ;(user.name as unknown as HTMLInputElement).value = onEdit.name
        ;(user.email as HTMLInputElement).value = onEdit.email
        ;(user.comment as HTMLInputElement).value = onEdit.comment
      }
    }
  }, [onEdit])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const user = ref.current

    if (
      !user ||
      !(user.name as unknown as HTMLInputElement).value ||
      !(user.email as HTMLInputElement).value ||
      !(user.comment as HTMLInputElement).value
    ) {
      return toast.warn('Preencha todos os campos!')
    }

    if (onEdit) {
      try {
        const { data } = await axios.put(`http://localhost:3030/${onEdit.id}`, {
          name: (user.name as unknown as HTMLInputElement).value,
          email: (user.email as HTMLInputElement).value,
          comment: (user.comment as HTMLInputElement).value,
        })

        toast.success(data)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data || 'Erro ao editar usuário')
        } else {
          toast.error('Erro ao editar usuário')
        }
      }
    } else {
      try {
        const { data } = await axios.post('http://localhost:3030', {
          name: (user.name as unknown as HTMLInputElement).value,
          email: (user.email as HTMLInputElement).value,
          comment: (user.comment as HTMLInputElement).value,
        })
        toast.success(data)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data || 'Erro ao editar usuário')
        } else {
          toast.error('Erro ao editar usuário')
        }
      }
    }

    if (user) {
      ;(user.name as unknown as HTMLInputElement).value = ''
      ;(user.email as HTMLInputElement).value = ''
      ;(user.comment as HTMLInputElement).value = ''
    }

    setOnEdit(null)
    getUsers()
  }

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <div className="w-full md:w-2/5">
        <label>Nome:</label>
        <input name="name" className="h-10 w-full rounded-md" />
      </div>

      <div className="w-full md:w-7/12">
        <label>E-mail:</label>
        <input name="email" type="email" />
      </div>

      <div className="w-full">
        <label>Comentário:</label>
        <input className="input-comment" name="comment" />
      </div>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  )
}
