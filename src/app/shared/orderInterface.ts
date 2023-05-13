export interface Customer {
    name: string;
    surname: string;
    address: string;
    id: number;
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