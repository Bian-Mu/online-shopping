import { Button, Form, Input, InputNumber, Select, Upload } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect } from "react"

const GoodForm: React.FC<{ goodId: string | null, cancel: Function }> = ({ goodId, cancel }) => {



    useEffect(() => {
        //http查询原具体信息
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
            <div className="overflow-x-hidden overflow-y-auto  justify-items-center fixed top-[calc(50%-300px)] right-[calc(35%-250px)]  w-[400px] h-[600px] bg-white ">
                <div className="text-xl my-6">
                    商品库存与详情
                </div>

                <Form
                    form={form}
                    name="add_or_modify_good"
                    onFinish={onFinish}
                >

                    <Form.Item
                        name="goodName"
                    >
                        <Input placeholder="商品名称" />
                    </Form.Item>

                    <Form.Item
                        name="isSelling"
                    >
                        <Select
                            placeholder="售卖状态"
                            options={[
                                { value: true, label: "售卖中" },
                                { value: false, label: "已下架" },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="type"
                    >
                        <Select
                            placeholder="商品类别"
                            options={[
                                { value: 1, label: "生活用品" },
                                { value: 2, label: "电子产品" },
                                { value: 3, label: "食品" }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="goodIntro"
                    >
                        <TextArea rows={4} placeholder="商品详情" />
                    </Form.Item>


                    <Form.Item
                        name="price"
                    >
                        <InputNumber min={1} changeOnWheel placeholder="价格" />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                    >
                        <InputNumber min={0} max={99999} changeOnWheel placeholder="库存" />
                    </Form.Item>

                    <Form.Item>
                        <Upload>此处为上传功能</Upload>
                    </Form.Item>

                    <Form.Item>
                        <Button className="mx-10 " onClick={() => cancel()}>取消</Button>
                        <Button type="primary" htmlType="submit" className=" mx-10">确定</Button>
                    </Form.Item>
                </Form>
            </div>
        </>


    )
}

export default GoodForm