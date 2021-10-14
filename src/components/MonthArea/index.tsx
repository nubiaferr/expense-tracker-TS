import React from 'react'
import * as C from './styles'
import {formatCurrentMonth} from '../../helpers/dateFilter'

type Props ={
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

const MonthArea = ({currentMonth, onMonthChange}: Props) => {
    const handlePrevious = () => {
        let [year, month] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth()+1}`);
    }

    const handleNext = () => {
         let [year, month] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth()+1}`);
    }

    return (
        <C.Container>
             <C.MonthArrow onClick={handlePrevious}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNext}>➡️</C.MonthArrow>
        </C.Container>
        
    )
}

export default MonthArea
