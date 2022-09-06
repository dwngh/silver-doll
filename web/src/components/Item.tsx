import { useState } from "react";

export const Item = ({
    id,
    name,
    status,
    created_at,
    onSave,
    onDelete,
}: {
    id: number;
    name: string;
    status: number;
    created_at: Date;
    onSave: Function;
    onDelete: Function;
}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputStatus, setInputStatus] = useState(false);

    const toggleEdit = () => {
        setInputName(name);
        setIsEdit(!isEdit);
    };

    const onSaveItem = () => {
        const temp = {
            id: id,
            name: inputName,
            status: status,
            created_at: created_at
        }
        onSave(id, temp);
        toggleEdit();
    };

    const onDeleteItem = () => {
        onDelete(id);
    }

    return (
        <div
            style={{
                backgroundColor: status == 1 ? "gray" : "red",
                padding: 30,
                margin: 20,
            }}
            key={id}
        >
            {!isEdit ? (
                <table>
                <tr>
                    <td>
                        <b>ID: </b>
                    </td>
                    <td>{id}</td>
                </tr>

                <tr>
                    <td>
                        <b>Name: </b>
                    </td>
                    <td>
                        {name}
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={onDeleteItem}>Delete</button>
                    </td>
                    <td>
                        <button onClick={toggleEdit}>Edit</button>
                    </td>
                </tr>
            </table>
            ) : (
                <table>
                    <tr>
                        <td>
                            <span>ID: </span>
                        </td>
                        <td>{id}</td>
                    </tr>

                    <tr>
                        <td>
                            <span>Name: </span>
                        </td>
                        <td>
                            <input
                                id="itemName"
                                type="text"
                                value={inputName}
                                onChange={(e) =>
                                    setInputName(e.currentTarget.value)
                                }
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button onClick={onSaveItem}>Save</button>
                        </td>
                        <td>
                            <button onClick={toggleEdit}>Cancel</button>
                        </td>
                    </tr>
                </table>
            )}
        </div>
    );
};
