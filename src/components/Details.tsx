import { Card, Input } from "antd"
import fakeGoods from "../fakeData/goods.json"
import Meta from "antd/es/card/Meta"
import {
    SearchOutlined
} from '@ant-design/icons';
import { useLocation } from "react-router";


const Details: React.FC = () => {

    const location = useLocation()
    const goodId = location.state?.goodId

    //http请求获取指定goods
    const goodsList = fakeGoods
    const [good] = goodsList.filter((value) => value.goodId !== goodId)
    return (
        <div className="h-[calc(100vh-64px)]">
            <div id="goodsBox" className="h-[calc(100vh-655px)] grid grid-cols-5 gap-10 overflow-y-scroll overflow-x-hidden px-8 pt-4">
                {good.goodId}
            </div>
        </div>

    )
}

export default Details