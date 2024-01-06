import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import {
  FormWrapper,
  FormContainer,
  Button,
  ButtonForm,
  HeadForm,
} from './styles'

interface User {
  id: number
  name: string
  comment: string
}

interface ListUserProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
  getUsers: () => Promise<void>
  onEdit: User | null
}

export default function UserRegistration({
  getUsers,
  onEdit,
  setOnEdit,
}: ListUserProps) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const ref = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      if (user) {
        ;(user.name as unknown as HTMLInputElement).value = onEdit.name
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
      !(user.comment as HTMLInputElement).value
    ) {
      return toast.warn('Preencha todos os campos!')
    }

    if (onEdit) {
      try {
        const { data } = await axios.put(`http://localhost:3030/${onEdit.id}`, {
          name: (user.name as unknown as HTMLInputElement).value,
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
      ;(user.comment as HTMLInputElement).value = ''
    }

    setOnEdit(null)
    getUsers()
  }

  return (
    <>
      <HeadForm>
        <h2>Suas Tarefas:</h2>
        <ButtonForm onClick={() => setIsFormVisible(!isFormVisible)}>
          {!isFormVisible ? 'Ocultar Formulário' : 'Adicionar Tarefa'}
        </ButtonForm>
      </HeadForm>
      <FormWrapper style={{ display: isFormVisible ? 'none' : 'flex' }}>
        <FormContainer ref={ref} onSubmit={handleSubmit}>
          <div className="w-full">
            <label>Task:</label>
            <input className="input-comment" name="comment" />
          </div>

          <div className="w-full">
            <label>Atribuida à:</label>
            <input name="name" className="h-10 w-full rounded-md" />
          </div>

          <Button
            type="submit"
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            ADICIONAR
          </Button>
        </FormContainer>
      </FormWrapper>
    </>
  )
}
