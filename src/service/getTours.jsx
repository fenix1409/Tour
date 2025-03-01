import React, { useContext } from 'react'
import { Context } from '../context/useContext'
import { instance } from '../hook/instance'
import { useQuery } from '@tanstack/react-query'

const getTours = () => {
    const { token } = useContext(Context)

    const { data: tours = [], isLoading, isError } = useQuery({
        queryKey: ['tours'],
        queryFn: async () => {
            const response = await instance().get('/tours/', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return response.data.data
        }
    })
    return { tours, isLoading, isError }
}

export default getTours