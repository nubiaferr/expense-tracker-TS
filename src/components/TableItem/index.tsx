import React from 'react'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'
import { formatDate } from '../../helpers/dateFilter'
import * as C from './styles'
import { Category } from '../../types/Category'

type Props = {
    item: Item;
    onDelete: (id: string) => void;
}

export const TableItem = ({item, onDelete}: Props) => {

    const deleteItem = () => (
        onDelete(item.id)
    )

    return (
        <C.TableLine >
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.Button onClick={() => deleteItem()}>Deletar</C.Button>
            </C.TableColumn>
        </C.TableLine>
    )
}

