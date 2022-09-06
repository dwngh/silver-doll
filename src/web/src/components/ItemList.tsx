import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "./Item";
import { ItemService } from "../service/ItemService";

export const ItemList = () => {
    const [items, setItems] = useState<any[]>([]);
    const { getAllItem, updateItem, deleteItem } = ItemService();

    const onSave = async (id: number, data: any) => {
        await updateItem(id, data);
        fetchData();
    };

    const fetchData = async () => {
        const temp = await getAllItem();
        console.log(temp);
        setItems(temp);
    };

    const onDelete = async (id: number) => {
        if (id !== undefined) {
            await deleteItem(id);
            console.log("Delete successfully!");
            fetchData();
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {items.map((item) => (
                <Item
                    id={item?.id}
                    name={item?.name}
                    status={item?.status}
                    created_at={item?.created_at}
                    onSave={onSave}
                    onDelete={onDelete}
                />
            ))}
            <button
                style={{
                    backgroundColor: "gray",
                    padding: 30,
                    margin: 20,
                }}
            >
                Add More ...
            </button>
        </div>
    );
};
