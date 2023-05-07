export interface Customer {
    customer_id:
    {
        name: string;
        surname: string;
        address: string;
    }
}

export interface Item {
    item_id: {
        quantity: number,
        name: string
    }
}

export interface Order {
        user_id: number,
        items: Item[]
}