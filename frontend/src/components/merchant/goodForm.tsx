import { Button } from "antd"

const GoodForm: React.FC<{ goodId: string | null, cancelOverlay: Function }> = ({ goodId, cancelOverlay }) => {
    return (
        <div className="w-[300px] h-[300px] bg-white">
            {goodId}
            <Button onClick={() => cancelOverlay()}>取消</Button>
            <Button>确定</Button>
        </div>
    )
}

export default GoodForm