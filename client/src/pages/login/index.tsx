import { useState } from 'react'
import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomeInput } from '../../components/custome-input'
import { PasswordInput } from '../../components/passworrd-input'
import { CustomeButton } from '../../components/custome-button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { UserData, useLoginMutation } from '../../app/services/auth'
import { isErrorWhithMessage } from '../../utils/is-error-with-message'
import { ErrorMessage } from '../../components/error-message'

export const Login = () => {
    const navigate = useNavigate()
    const [loginUser, loginUserResult] = useLoginMutation()
    const [error, setError] = useState('')

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap()
            
            navigate("/")
        } catch (err) {
            const maybeError = isErrorWhithMessage(err)

            if (maybeError) {
                setError(err.data.message)
            } else {
                setError('Неизвестная ошибка')
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: "30rem" }}>
                    <Form onFinish={login}>
                        <CustomeInput type="email" name="email" placeholder="Email" />
                        <PasswordInput name="password" placeholder="Пароль" />
                        <CustomeButton type="primary" htmlType="submit">
                            Войти
                        </CustomeButton>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Нет Аккаунта ? <Link to={Paths.register}>Зарегистрируйтесь</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
