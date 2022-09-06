import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "./Item";
import { ItemService } from "../service/ItemService";
import { AppendingItem } from "./AppendingItem";

export const ItemList = () => {
    const [items, setItems] = useState<any[]>([]);
    const [isAppend, setIsAppend] = useState(false);
    const { getAllItem, updateItem, deleteItem, createItem } = ItemService();

    const onSave = async (id: number, data: any) => {
        await updateItem(id, data);
        fetchData();
    };

    const fetchData = async () => {
        const temp = await getAllItem();
        console.log(temp);
        setItems(temp);
    };

    const addItem = async (item: any) => {
        setIsAppend(false);
        await createItem(item);
        fetchData();
    };

    const openAppend = () => {
        setIsAppend(true);
    };

    const onDelete = async (id: number) => {
        if (id !== undefined) {
            await deleteItem(id);
            console.log("Delete successfully!");
            fetchData();
        }
    };

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
            {isAppend ? (
                <AppendingItem onSave={addItem} close={() => setIsAppend(false)} />
            ) : (
                <button
                    style={{
                        backgroundColor: "gray",
                        padding: 30,
                        margin: 20,
                    }}
                    onClick={openAppend}
                >
                    Add More ...
                </button>
            )}
        </div>
    );
};
