import { Card, Input } from "antd"
import fakeGoods from "../fakeData/goods.json"
import Meta from "antd/es/card/Meta"
import {
    SearchOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router";
import type { Good } from "../DataProps";
import { useState } from "react";

const Shop: React.FC = () => {

    //http请求获取所有goods
    const goodsList = fakeGoods

    const navigate = useNavigate()

    const cardOnClick = (good: Good) => {
        navigate(`details/${good.goodId}`)
    }

    const [searchWords, setSearchWords] = useState<string>('')
    const [list, setList] = useState<Good[]>(goodsList)
    const searchOnClick = () => {
        if (searchWords.trim() === "") {
            setList(goodsList)
        } else {
            setList(goodsList.filter(({ goodName, goodIntro }) => goodName.includes(searchWords) || goodIntro.includes(searchWords)))
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWords(e.target.value)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchOnClick()
        }
    }

    return (
        <div className="h-[calc(100vh-64px)]">
            <div id="searchBox" className="text-center py-6 h-[80px]">
                <Input style={{ width: 750, marginRight: 10 }} placeholder="Type keywords..."
                    value={searchWords}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress} />
                <SearchOutlined onClick={() => searchOnClick()} />
            </div>
            <div id="goodsBox" className="h-[calc(100vh-145px)] grid grid-cols-5 gap-10 overflow-y-scroll overflow-x-hidden px-8 pt-4">
                {list.map((good) => {
                    return (
                        <div key={good.goodId} className="h-[320px] w-[250px]">
                            <Card onClick={() => cardOnClick(good)} cover={<img className="object-scale-down" src={good.goodPics[0]} style={{ width: 250, height: 250 }} />}>
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