import { Button } from "antd"
import { useState, useEffect } from "react"
import type { Good } from "../../DataProps"
import fakeGoods from "../../fakeData/goods.json"


const MerchantItem: React.FC<{ userId: number, clickFunction: Function }> = ({ userId, clickFunction }) => {

    const [goods, setGoods] = useState<Good[]>([])

    useEffect(() => {
        //http
        setGoods(fakeGoods.filter((val) => val.merchantId === userId))
    }, [])

    return (
        <div className='my-6 mr-4 overflow-x-hidden overflow-y-auto bg-white rounded-2xl p-4 h-[calc(100vh-112px)]'>
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
                            定价：{good.price}
                        </span>
                        <span>
                            余量：{good.quantity}
                        </span>
                        <span>
                            销量：{good.volume}
                        </span>
                        <span>
                            <Button onClick={() => clickFunction(good.goodId)}>
                                修改商品
                            </Button>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default MerchantItem