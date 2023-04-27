import Card from '../UI/Card';
import './AvailableMeal.css';
import MealItem from './MealItem/MealItem';
const DummyMeals=[
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
   },

    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A German Speciality',
        price: 16.99
    },

    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },

    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy and Green',
        price: 20.99
    }
]
const AvailableMeals= ()=> {

    return (
        <section className='lists'>
            <Card>
            <ul>
                {DummyMeals.map(meal => (
                   <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
                )
                )}
            </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;