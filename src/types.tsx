export interface ItemType {
    name?: string
    key: string
}

export interface ProductOptionType {
    name: string
    priceDelta?: number
    info?: string
}

export interface ProductType {
    name: string
    price: number
    info?: string
    store_id: string
    options: {
        name: string
        items: ProductOptionType[]
    }[]
}

export type Optionality = 'required' | 'optional' | 'no'

export interface ShippingMethodType {
    name: string
    price: number
    info?: string
    form: {
        address: Optionality
        message: Optionality
    }
}

export type PaymentAccountCodeProviderType = 'tossID' | 'KakaopayQR'

export interface PaymentReceiveAccountType {
    bankAccount: {
        bank: string
        accountNumber: string
    }
    other: {
        key: string
        type: PaymentAccountCodeProviderType
    }[]
}

export interface StoreType {
    name: string
    payment_receive_account: PaymentReceiveAccountType
    shipping_method: ShippingMethodType[]
}

export type Doc<T> = T & { id: string }

export interface CartItemType {
    product: Doc<ProductType>
    amount: number
    selectedOptions: string[]
}

export interface OrdererInfoType {
    name: string
    phoneNumber: string
    email: string
}

export interface ReceiverInfoType {
    name: string
    phoneNumber: string
}

export interface ShippingInfoType {
    address?: {
        roadname: string
        detail: string
    }
    method: string
    message: string
}

export interface CreateOrderType {
    cart: (Omit<CartItemType, 'product'> & {
        product_id: string
    })[]
    shipping: ShippingInfoType
    orderer: OrdererInfoType
    receiver: ReceiverInfoType
}

export interface OrderType {
    store_id: string
    shipping_info: ShippingInfoType
    orderer_name: string
    orderer_phone: string
    orderer_email: string
    receiver_name: string
    receiver_phone: string
}
