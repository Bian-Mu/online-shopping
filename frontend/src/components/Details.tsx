import { Button, Carousel } from "antd"
import fakeGoods from "../fakeData/goods.json"
import {
    ArrowLeftOutlined,
} from '@ant-design/icons';
import { useNavigate, useParams } from "react-router";
import { Header } from "antd/es/layout/layout";
import { colorConfig } from "../AppCss";
import { useState } from "react";


const Details: React.FC = () => {

    const { goodId } = useParams<{ goodId: string }>()
    const navigate = useNavigate()
    const returnOnClick = () => {
        navigate(`/`)
    }

    //http请求获取指定goods
    const goodsList = fakeGoods
    const [good] = goodsList.filter((value) => value.goodId === goodId)

    const [amount, setAmount] = useState(0)
    return (
        <div className="h-[calc(100vh-64px)]">
            <Header style={{ width: 64, padding: 0, background: colorConfig.background }}>
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => returnOnClick()}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </Header>
            <div className=" h-[calc(100vh-128px)] overflow-y-scroll overflow-x-hidden p-8">
                <div id="detailsBox" style={{ background: colorConfig.background, borderColor: colorConfig.border }} className="p-5 border-2 rounded-xl  flex h-3/4 w-3/4 justify-self-center items-center">
                    <Carousel className="h-[400px] w-[300px] mr-5" arrows autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
                        {good.goodPics.map((value, index) => {
                            return (
                                <div key={`pic-${index}`} >
                                    <img className="h-[400px] w-[300px]" src={value} />
                                </div>
                            )
                        })}

                    </Carousel>
                    <div className="h-4/5 mx-5 relative">
                        <h1 className="text-2xl">
                            {good.goodName}：{good.goodIntro}...
                        </h1>
                        <div className="absolute top-3/5  w-full grid " style={{ color: colorConfig.border }}>
                            <span>
                                余量：{good.quantity}件
                            </span>
                            <span>
                                销量：{good.volume}件
                            </span>
                            <span>
                                类型：{good.type}
                            </span>
                        </div>
                        <div className="absolute top-4/5  grid grid-cols-3 gap-3 w-full">
                            <span className="col-start-1 text-2xl">
                                ￥{good.price}/件
                            </span>
                            <span className="col-start-2 col-span-2 grid grid-cols-8 gap-6">
                                <Button size="large" style={{ fontSize: 20 }} className="col-span-1" onClick={() => setAmount(amount - 1)}>
                                    -
                                </Button>
                                <span className="col-span-2 text-center text-2xl">
                                    {amount}
                                </span>
                                <Button size="large" style={{ fontSize: 20 }} className="col-span-1 " onClick={() => setAmount(amount + 1)}>
                                    +
                                </Button>
                                <Button size="large" style={{ fontSize: 24 }} className=" col-span-4">
                                    加入购物车
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>

            </div >
        </div >

    )
}

export default Details