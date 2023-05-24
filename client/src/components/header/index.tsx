import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import { CustomeButton } from '../custome-button'
import { Paths } from '../../paths'

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to={Paths.home}>
                    <CustomeButton type='ghost' >
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomeButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomeButton type='ghost' icon={<UserOutlined/>}>Зарегестрироваться</CustomeButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomeButton type='ghost' icon={<LoginOutlined/>}>Войти</CustomeButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}
