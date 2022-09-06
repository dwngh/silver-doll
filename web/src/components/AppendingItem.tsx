import { useState } from "react";
export const AppendingItem = ({ onSave, close}: { onSave: Function; close: Function;}) => {

    const [name, setName] = useState('');

    const onSaveItem = () => {
        const item = {
            name: name,
        }
        onSave(item);
        close();
    }

    const onCancel = () => {
        close();
    }

    return (
        <div
            style={{
                backgroundColor: "green",
                padding: 30,
                margin: 20,
            }}
        >
            <table>
                <tr>
                    <td>
                        <span>ID: </span>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td>
                        <span>Name: </span>
                    </td>
                    <td>
                        <input
                            id="itemName"
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.currentTarget.value)
                            }
                        />
                    </td>
                </tr>

                <tr>
                    <td>
                        <button onClick={onSaveItem}>Save</button>
                    </td>
                    <td>
                        <button onClick={onCancel}>Cancel</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};
