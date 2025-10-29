import { Card, Divider, Input } from "antd"
import fakeGoods from "../fakeData/goods.json"
import Meta from "antd/es/card/Meta"
import {
    SearchOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router";
import type { Good } from "../DataProps";

const Shop: React.FC = () => {

    //http请求获取所有goods
    const goodsList = fakeGoods

    const navigate = useNavigate()

    const cardOnClick = (good: Good) => {
        navigate(`details/${good.goodId}`)
    }


    return (
        <div className="h-[calc(100vh-64px)]">
            <div id="searchBox" className="text-center py-6 h-[80px]">
                <Input style={{ width: 750, marginRight: 10 }} placeholder="Type keywords..." />
                <SearchOutlined onClick={() => { }} />
            </div>
            <div id="goodsBox" className="h-[calc(100vh-145px)] grid grid-cols-5 gap-10 overflow-y-scroll overflow-x-hidden px-8 pt-4">
                {goodsList.map((good) => {
                    return (
                        <div className="h-[320px] w-[250px]">
                            <Card onClick={() => cardOnClick(good)} cover={<img src={good.goodPics[0]} style={{ width: 250, height: 250 }} />}>
                                <Meta className="text-center" title={good.goodName + " ￥" + good.price} description={"剩余" + good.quantity + "件 " + good.goodIntro.slice(0, 7) + "..."} />
                            </Card>
                        </div>
                    )

                })}
            </div>

        </div>

    )
}

export default Shop