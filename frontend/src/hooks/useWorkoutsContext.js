import { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutsContext'

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)
  if (!context) {
    throw Error(
      'useWorkouts context must be used inside an WorkoutsContextProvider'
    )
  }
  return context
}
