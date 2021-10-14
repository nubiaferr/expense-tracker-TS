import React from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';
import {TableItem} from '../TableItem';

type Props = {
    list: Item[];
    onDelete: (id: string) => void;
}

export const TableArea = ({list, onDelete}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </tbody>
        </C.Table>
    )
}

