export interface User {
    password: string;
    role: number; //0代表商家，1代表顾客
    userId: number;
    userName: string;
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
    /**
     * 商品类别
     */
    type: number;
}

/**
 * 购物车
 */
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
}