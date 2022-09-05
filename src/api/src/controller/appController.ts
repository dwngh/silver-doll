'use strict';

import Item from '../model/interface/item';
import {itemModelFunction} from '../model/itemModel'


const {createItem, getItem, getItemList} = itemModelFunction();

export const get_item = (req, res) => {
    getItem(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else res.json(result);
    })
}

export const get_item_list = (req, res) => {
    getItemList((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

export const create_item = (req, res) => {
    const item = req.body;
    if (!item.name || !item.status){
        res.status(400).send({ error:true, message: 'Name or status cannot be empty' });
    } else {
        createItem(item, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
}