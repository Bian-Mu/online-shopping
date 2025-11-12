import { Button } from "antd"
import { useState, useEffect } from "react"
import type { Good } from "../../DataProps"
import fakeGoods from "../../fakeData/goods.json"
import GoodForm from "./goodForm"


const MerchantItem: React.FC<{ userId: number }> = ({ userId }) => {

    const [goods, setGoods] = useState<Good[]>([])
    const [visible, setVisible] = useState<boolean>(false)
    const [currentId, setCurrentId] = useState<string | null>(null)

    useEffect(() => {
        //http
        setGoods(fakeGoods.filter((val) => val.merchantId === userId))
    }, [])

    const handleClick = (id?: string) => {
        if (id) {
            setCurrentId(id)
        }
        setVisible(true)
    }

    const handleCancel = () => {
        setCurrentId(null)
        setVisible(false)
    }

    return (
        <>
            {visible ? <GoodForm goodId={currentId} cancel={handleCancel} /> : ""}
            <div className="my-2 ml-2 h-[32px]">
                <button className="border-[0.5px] border-gray-300 rounded-xl py-1 px-2 bg-white hover:border-blue-500 hover:text-blue-500" onClick={() => handleClick()} >新增商品</button >
            </div>
            <div className='ml-2 overflow-x-hidden overflow-y-auto bg-white rounded-2xl h-[calc(100vh-160px)]'>
                {goods.map((good) => {
                    return (
                        <div key={good.goodId} className='justify-items-center items-center border-b-[1px] border-gray-300 grid grid-cols-7 h-[50px]'>
                            <span>
                                {good.goodId}
                            </span>
                            <span>
                                {good.goodName}
                            </span>
                            <span>
                                {good.isSelling ? `售卖中` : `已下架`}
                            </span>
                            <span>
                                ￥{good.price}
                            </span>
                            <span>
                                余量：{good.quantity}
                            </span>
                            <span>
                                销量：{good.volume}
                            </span>
                            <span>
                                <button className="border-[0.5px] border-gray-300 rounded-xl py-1 px-2 bg-white hover:border-blue-500 hover:text-blue-500" onClick={() => handleClick(good.goodId)}>修改</button>
                            </span>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default MerchantItem