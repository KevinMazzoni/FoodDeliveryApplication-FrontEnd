export interface Customer {
    name: string;
    surname: string;
    address: string;
    id: number;
}

export interface Item {
        quantity: number,
        name: string,
        id: string
}

export interface ItemPut {
        items: Item[]
}

export interface Order {
        user_id: number,
        items: Item[],
        id: string,
        status: string

}