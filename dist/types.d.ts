export interface ItemType {
    name?: string;
    key: string;
}
export interface ProductOptionType {
    name: string;
    priceDelta?: number;
    info?: string;
}
export interface ProductType {
    name: string;
    price: number;
    info?: string;
    store_id: string;
    options?: {
        name: string;
        items: ProductOptionType[];
    }[];
}
export declare type Optionality = 'required' | 'optional' | 'no';
export interface ShippingMethodType {
    name: string;
    price: number;
    info?: string;
    form: {
        address: Optionality;
        message: Optionality;
    };
}
export declare type PaymentAccountCodeProviderType = 'tossID' | 'KakaopayQR';
export interface PaymentReceiveAccountType {
    bankAccount: {
        bank: string;
        accountNumber: string;
    };
    other: {
        key: string;
        type: PaymentAccountCodeProviderType;
    }[];
}
export interface StoreType {
    name: string;
    payment_receive_account: PaymentReceiveAccountType;
    shipping_method: ShippingMethodType[];
}
