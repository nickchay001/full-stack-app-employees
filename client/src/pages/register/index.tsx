import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomeInput } from '../../components/custome-input'
import { PasswordInput } from '../../components/passworrd-input'
import { CustomeButton } from '../../components/custome-button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useState } from 'react'
import { useRegisterMutation } from '../../app/services/auth'
import { User } from '@prisma/client'
import { isErrorWhithMessage } from '../../utils/is-error-with-message'
import { ErrorMessage } from '../../components/error-message'

type RegisterData = Omit<User, "id"> & { confirmPassword: string }


export const Register = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [error, setError] = useState('')
  const [registerUser] = useRegisterMutation()

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap()
      navigate('/')
    } catch (error) {
      const maybeError = isErrorWhithMessage(error)

      if (maybeError) {
        setError(error.data.message)
      } else {
        setError('Неизвестная ошибка')
      }
    }
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегестрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={register}>
            <CustomeInput name="name" placeholder="Имя" />
            <CustomeInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput name="confirmPassword" placeholder="Повторите пароль" />
            <CustomeButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomeButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегемтрированы ? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}