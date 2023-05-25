import { Employee } from "@prisma/client"
import { Card, Form, Space } from "antd"
import { CustomeInput } from "../custome-input"
import { ErrorMessage } from "../error-message"
import { CustomeButton } from "../custome-button"

type Props<T> = {
    onFinish: (values: T) => void
    btnText: string
    title: string
    error?: string
    employee?: T
}

export const EmployeeForm = ({
    onFinish,
    btnText,
    title,
    error,
    employee
}: Props<Employee>) => {
    return (
       <Card title={title} style={{width:'30rem'}}>
        <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
            <CustomeInput type="text" name="firstName" placeholder="Имя"/>
            <CustomeInput type="text" name="lastName" placeholder="Фамилия"/>
            <CustomeInput type="number" name="age" placeholder="Возраст"/>
            <CustomeInput type="text" name="address" placeholder="Адрес"/>
            <Space>
                <ErrorMessage message={error}/>
                <CustomeButton htmlType="submit">
                    {btnText}
                </CustomeButton>
            </Space>
        </Form>
       </Card>
    )
}
