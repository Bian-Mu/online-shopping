import { Button, Form } from "antd"
import { useEffect } from "react"

const GoodForm: React.FC<{ goodId: string | null, cancel: Function }> = ({ goodId, cancel }) => {



    useEffect(() => {
        //查询原具体信息
        if (goodId) { }

    }, [goodId])

    const [form] = Form.useForm()


    const onFinish = (values: any) => {
        //http
    }

    return (
        <>
            <div className="fixed opacity-60 bg-black w-full h-full">
            </div>
            <div className="rounded-2xl justify-items-center fixed top-[calc(50%-300px)] right-[calc(35%-250px)]  w-[400px] h-[600px] bg-white ">
                <Form
                    form={form}
                    name="add_or_modify_good"
                    onFinish={onFinish}
                >


                    {goodId}
                    <Form.Item>
                        <Button className="mx-10" onClick={() => cancel()}>取消</Button>
                        <Button type="primary" htmlType="submit" className="mx-10">确定</Button>
                    </Form.Item>
                </Form>
            </div>
        </>


    )
}

export default GoodForm