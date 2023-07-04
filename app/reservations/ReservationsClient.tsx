'use client'

import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import { SafeReservation, SafeUser } from '../types'

import Heading from '../components/Heading'
import Container from '../components/Container'
import ListingCard from '../components/listings/ListingCard'


interface ReservationsClientProps {
    reservations: SafeReservation[]
    currentUser?: SafeUser | null
}





const ReservationsClient:React.FC<ReservationsClientProps> = ({

    reservations,
    currentUser,

}) => {

    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')

    const onCancel = useCallback((id:string)=> {
        setDeletingId(id)

        axios.delete(`/api/reservations/${id}`)
        .then(()=>{
            toast.success('Reservation Cancelled')
            router.refresh()
        })
        .catch(()=>{
            toast.error('Something went wrong.')
        })
        .finally(() => {
            setDeletingId('')
        })
        
    },[router])

  return (
    <Container>
        <Heading
            title='Reservations'
            subtitle='Bookings on your properties'
        />
        <div className='
            mt-10
            grid
            sm:grid-cols-2
            md:grid-col-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
        '>
            {reservations.map((reservations)=> (
                <ListingCard
                    key={reservations.id}
                    data={reservations.listing}
                    reservation={reservations}
                    actionId={reservations.id}
                    onAction={onCancel}
                    disabled={deletingId === reservations.id}
                    actionLabel='Cancel guest reservation'
                    currentUser={currentUser}
                />
            ))}
        </div>
    </Container>
  )
}

export default ReservationsClient
