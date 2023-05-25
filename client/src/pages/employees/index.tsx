import { PlusCircleOutlined } from '@ant-design/icons'
import { CustomeButton } from '../../components/custome-button'
import { Layout } from '../../components/layout'
import { Table } from 'antd'
import { useGetAllEmployeesQuery } from '../../app/services/employees'
import type { ColumnsType } from 'antd/es/table'
import { Employee } from '@prisma/client'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useEffect } from 'react'

const columns: ColumnsType<Employee> = [
  {
    title: 'Имя',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Адрус',
    dataIndex: 'address',
    key: 'address'
  },
]


export const Employees = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useGetAllEmployeesQuery()
  const user = useSelector(selectUser)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <Layout>
      <CustomeButton type='primary' onClick={() => null} icon={<PlusCircleOutlined />}>
        Добавить
      </CustomeButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.employee}/${record.id}`)
          }
        }}
      />
    </Layout>
  )
}
