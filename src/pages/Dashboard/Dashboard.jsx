import React, { useContext } from 'react'
import getTours from '../../service/getTours'
import TourTable from '../../components/ui/Table/TourTable'

const Dashboard = () => {
  const data = getTours()
  console.log(data.tours)

  return (
    <div className='pt-[18px] px-[24px]'>
      <TourTable />
    </div>
  )
}

export default Dashboard