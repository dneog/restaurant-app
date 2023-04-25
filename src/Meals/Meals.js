import React from 'react'
import { Fragment } from 'react'
import MealSummery from './MealSummery'
import AvailableMeals from './AvailableMeal'
const Meals = () => {
  return (
    <Fragment>
        <MealSummery />
        <AvailableMeals />
    </Fragment>
  )
}

export default Meals;