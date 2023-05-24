import React from 'react'
import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomeInput } from '../../components/custome-input'
import { PasswordInput } from '../../components/passworrd-input'
import { CustomeButton } from '../../components/custome-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: "30rem" }}>
                    <Form onFinish={() => null}>
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
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
