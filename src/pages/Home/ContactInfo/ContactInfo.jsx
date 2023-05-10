import { SlCalender } from 'react-icons/sl';
import { AiFillClockCircle } from 'react-icons/ai';

const ContactInfo = () => {
    return (
        <div className="bg-black text-white flex justify-between p-24">

            <div className='flex'>
                <div className='pr-5 relative'>
                    <p><SlCalender className='h-10 w-10 bg-white text-black'></SlCalender></p>
                    <p className='absolute top-5 left-4 '><AiFillClockCircle className='text-orange-600 h-5 w-5 bg-black rounded'></AiFillClockCircle></p>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div>
                <p>Have a question?</p>
                <h3>+2546 251 2658</h3>
            </div>
            <div>
                <p>Need a repair? our address</p>
                <h3>Liza Street, New York</h3>
            </div>


        </div>
    );
};

export default ContactInfo;