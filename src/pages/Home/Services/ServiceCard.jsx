import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <div>
                        <p className="text-xl text-orange-500">Price: ${price}</p>
                    </div>
                    <div className="card-actions mt-2">

                        <button className='text-orange-500 '>  <FaArrowRight /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;