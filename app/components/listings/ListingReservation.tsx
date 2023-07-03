'use client'

import { Range } from 'react-date-range'


interface ListingReservationProps {
    price:number
    dateRange: Range
    totalPrice: number
    onChangeDate: (value: Range) => void
    onSubmit: () => void
    disabled?: boolean
    disabledDates: Date[]
}



const ListingReservation: React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates


}) => {
  return (
    <div>
      listingreservation
    </div>
  )
}

export default ListingReservation