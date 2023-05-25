import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import { CustomeButton } from '../custome-button'
import { Paths } from '../../paths'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/auth/authSlice'

export const Header = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate('/login')
    }

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
            {
                user ? (
                    <CustomeButton
                        type="ghost"
                        icon={<LogoutOutlined />}
                        onClick={onLogoutClick}
                    >
                        Выйти
                    </CustomeButton>
                ) : <Space>
                    <Link to={Paths.register}>
                        <CustomeButton type='ghost' icon={<UserOutlined />}>Зарегестрироваться</CustomeButton>
                    </Link>
                    <Link to={Paths.login}>
                        <CustomeButton type='ghost' icon={<LoginOutlined />}>Войти</CustomeButton>
                    </Link>
                </Space>
            }

        </Layout.Header>
    )
}
