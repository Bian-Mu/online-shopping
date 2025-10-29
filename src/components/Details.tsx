import { Button, Card, Carousel, Input } from "antd"
import fakeGoods from "../fakeData/goods.json"
import Meta from "antd/es/card/Meta"
import {
    ArrowLeftOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router";
import { Header } from "antd/es/layout/layout";
import { colorConfig } from "../AppCss";


const Details: React.FC = () => {

    const location = useLocation()
    const goodId = location.state?.goodId
    const navigate = useNavigate()
    const returnOnClick = () => {
        navigate(`/`)
    }

    //http请求获取指定goods
    const goodsList = fakeGoods
    const [good] = goodsList.filter((value) => value.goodId !== goodId)
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
            <div id="detailsBox" className="h-[calc(100vh-128px)] overflow-y-scroll overflow-x-hidden px-8 pt-4">
                <Carousel className="h-[300px] w-[300px]" arrows autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
                    <div className="h-[300px] w-[300px]">
                        <img src={good.goodPics[0]} />
                    </div>
                    <div className="h-[300px] w-[300px]">
                        <img src={good.goodPics[0]} />
                    </div>
                </Carousel>
            </div>
        </div>

    )
}

export default Details