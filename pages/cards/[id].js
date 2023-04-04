import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashHeader from '../../components/sharedPage/DashHeader';

const CardDetails = () => {
    const [cardDetails, setCardDetails] = useState({})
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        fetch(`https://smart-intro-server.onrender.com/cards/${id}`)
            .then(res => res.json())
            .then(data => setCardDetails(data))
    }, [id]);


    console.log(cardDetails)



    return (
        <>
            <DashHeader />
            <div className='flex items-center justify-center mx-auto bg-mainBg py-20 h-[100vh]'>
                <div >
                    <div className='bg-cardBg text-fontclr transition ease-in duration-100  hover:-translate-y-3 w-96 rounded-b-lg'>
                        <div className='w-full'>
                            <Image src={cardDetails?.img} className="rounded-t-lg" layout="responsive" objectFit="cover" width={1} height={1} alt={cardDetails?.cardName} />
                        </div>

                        <div className='card-border flex flex-col items-center py-3 w-full'>
                            <h3 className='text-2xl font-bold my-2  '>{cardDetails?.cardName}</h3>
                            <div className='flex items-center justify-center gap-5'>
                                <p className=' font-semibold'><del>&#2547; {cardDetails?.oldPrice}</del></p>
                                <p className=' font-semibold text-primary text-2xl '>&#2547; {cardDetails?.newPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;