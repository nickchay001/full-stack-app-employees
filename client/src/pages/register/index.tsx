import { Layout } from '../../components/layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomeInput } from '../../components/custome-input'
import { PasswordInput } from '../../components/passworrd-input'
import { CustomeButton } from '../../components/custome-button'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегестрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}