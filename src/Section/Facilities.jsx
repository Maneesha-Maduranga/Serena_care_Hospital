import Button from '../Component/Button';
import PortfolioCard from '../Component/PortfolioCard';

import cafe from '../assets/cafe.jpg';
import carPark from '../assets/carpark.jpg';
import carParkTwo from '../assets/carpark02.jpg';
import general from '../assets/general.jpg';
import pharmacyOne from '../assets/HospitalPha.jpg';
import labortary from '../assets/labortary.jpg';
import laundry from '../assets/laundry.jpg';
import laxuary from '../assets/laxuary.jpg';
import mealTwo from '../assets/mealTwo.jpg';
import meal from '../assets/meal.jpg';
import pharmacy from '../assets/pharmacy.jpg';
import genralTwo from '../assets/rooms.jpg';

function Facilities() {
  return (
    <div className='w-full h-auto py-4 my-10' id='portfolio'>
      <div className='head  container mx-auto  text-center'>
        <h4 className='font-semibold text-sky-400 text-xl'>Facilities</h4>
        <h2 className='text-3xl font-extrabold mt-2'>Our Offered Facilities</h2>
        <p className='my-4'>
          At Serene Care Center, we are dedicated to providing a comfortable and
          nurturing environment for our patients. Our state-of-the-art
          facilities are designed to meet the diverse needs of individuals
          seeking healthcare services. Here are some of the exceptional
          facilities
        </p>
      </div>
      <div className='btn flex flex-row flex-wrap gap-2 items-center justify-center py-4 mx-auto'>
        <Button title='Show All' />
        <Button title='Normal Rooms' />
        <Button title='Luxary Rooms' />
        <Button title='Pharmacy' />
        <Button title='Meals' />
        <Button title='Cafe' />
        <Button title='Car Parking' />
        <Button title='Luandry' />
      </div>
      <div className='card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4'>
        <PortfolioCard image={laxuary} title='Laxary Rooms' />
        <PortfolioCard image={general} title='Normal Rooms' />
        <PortfolioCard image={genralTwo} title='Normal Rooms' />
        <PortfolioCard image={pharmacy} title='Pharmacy' />
        <PortfolioCard image={pharmacyOne} title='Pharmacy' />
        <PortfolioCard image={labortary} title='Laboratory' />
        <PortfolioCard image={cafe} title='Cafe' />
        <PortfolioCard image={meal} title='Meals' />
        <PortfolioCard image={mealTwo} title='Meals' />
        <PortfolioCard image={carPark} title='Car Parking' />
        <PortfolioCard image={carParkTwo} title='Car Parking' />
        <PortfolioCard image={laundry} title='Luandry' />
      </div>
    </div>
  );
}

export default Facilities;
