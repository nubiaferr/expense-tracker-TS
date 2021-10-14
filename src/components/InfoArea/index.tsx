import React from 'react'
import MonthArea from '../MonthArea'
import { ResumeItem } from '../ResumeItem'
import * as C from './styles'

type Props ={
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    expense: number;
    income: number;
}


export const InfoArea = ({currentMonth, onMonthChange, expense, income}: Props) => {
    
    return (
        <C.Container>
            <MonthArea currentMonth={currentMonth} onMonthChange={onMonthChange}/>
            <C.ResumeArea>
                <ResumeItem title={"Receitas"} value={income} />
                <ResumeItem title={"Despesas"} value={expense} />
                <ResumeItem 
                title={"Balanço"} 
                value={income - expense} 
                color={(income-expense) < 0 ? 'red' : 'green'}/>
            </C.ResumeArea>
        </C.Container>
    )
}
