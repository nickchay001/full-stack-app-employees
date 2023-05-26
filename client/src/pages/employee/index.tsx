import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useGetEmployeeQuery, useRemoveEmployeeMutation } from "../../app/services/employees"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../features/auth/authSlice"
import { Layout } from "../../components/layout"
import { Descriptions, Divider, Modal, Space } from "antd"
import { DeleteOutlined, DeliveredProcedureOutlined, EditOutlined } from "@ant-design/icons"
import { CustomeButton } from "../../components/custome-button"
import { ErrorMessage } from "../../components/error-message"
import { Paths } from "../../paths"
import { isErrorWhithMessage } from "../../utils/is-error-with-message"


export const Employee = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const params = useParams<{ id: string }>()
  const [isModelOpen, setIsModelOpen] = useState(false)
  const { data, isLoading } = useGetEmployeeQuery(params.id || "")
  const [removeEmployee] = useRemoveEmployeeMutation()
  const user = useSelector(selectUser)

  if (isLoading) {
    return <span>Загрузка...</span>
  }

  if (!data) {
    return <Navigate to="/" />
  }

  const showModal = () => {
    setIsModelOpen(true)
  }
  const hideModal = () => {
    setIsModelOpen(false)
  }

  const handelDeleteUser = async () => {
    hideModal()

    try{
      await removeEmployee(data.id).unwrap()

      navigate(`${Paths.status}/deleted`)
    }catch (error){
      const maybeError = isErrorWhithMessage(error)

      if(maybeError){
        setError(error.data.message)
      } else {
        setError('Неизвестная ошибка')
      }
    }
  }

  return (
    <Layout >
      <Descriptions title="Информация о сотруднике" bordered>
        <Descriptions.Item label="Имя" span={3}>
          {`${data.firstName} ${data.lastName}`}
        </Descriptions.Item>
        <Descriptions.Item label="Возраст" span={3}>
          {data.age}
        </Descriptions.Item>
        <Descriptions.Item label="Адрес" span={3}>
          {data.address}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === data.userId && (
        <>
          <Divider orientation="left" >Действие</Divider>
          <Space>
            <Link to={`/employee/edit/${data.id}`}>
              <CustomeButton
                shape="round"
                type="default"
                icon={<EditOutlined />}
              >
                Редактировать
              </CustomeButton>
            </Link>
            <CustomeButton
              shape="round"
              danger
              onClick={showModal}
              icon={<DeleteOutlined />}
            >
              Удалить
            </CustomeButton>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title="Подтвердите удаление"
        open={isModelOpen}
        onOk={handelDeleteUser}
        onCancel={hideModal}
        okText="Подтвердить"
        cancelText="Отменить"
      >
        Вы действаительно хотите удалить сотрудника из таблицы
      </Modal>
    </Layout>
  )
}
