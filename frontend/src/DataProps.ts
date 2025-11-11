export interface User {
    password: string;
    role: number; //0代表商家，1代表顾客
    userId: number;
    userName: string;
    /**
     * 发货/收货地
     */
    address: string;
}


export interface Good {
    goodId: string;
    /**
     * 商品介绍
     */
    goodIntro: string;
    /**
     * 商品名称
     */
    goodName: string;
    /**
     * 为一组商品图片url
     */
    goodPics: string[];
    /**
     * 是否售卖中
     */
    isSelling: boolean;
    /**
     * 商家id
     */
    merchantId: number;
    price: number;
    quantity: number;
    volume: number;  //成交量
    /**
     * 商品类别
     * 1生活用品、2电子产品、3食品
     */
    type: number;
}


export interface Cart {
    customerId: number;
    goods: GoodStatus[];
    sumPrice: number;
}

export interface GoodStatus {
    /**
     * 加入购物车的时间
     */
    addTime: string;
    /**
     * 多件总价
     */
    calcPrice: number;
    goodId: string;
    /**
     * 根据余量与售卖状态决定
     */
    isValid: boolean;
    merchantId: number;
    quantity: number;
    /**
     * 0在购物车、1已下单、2已完成
     */
    state: number;
}

export interface Order {
    customerId: number;
    goodStatus: GoodStatus[];
    /**
     * 下单时间
     */
    payTime: string;
    sumPrice: number;
    /**
     * 0均未完成、1部分完成、2全部完成
     */
    sumState: string;
}