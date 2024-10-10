import React, { useState } from 'react'
import plus from '../assets/Icons/plus.png'
import minus from '../assets/Icons/minus.png'

function Faqs() {

    const [Activequestion, SetActiveQuestion] = useState (null)

    const toggleQuestion = (id) => {
        SetActiveQuestion(Activequestion === id ? null : id);
    };


    const questions =[
        {
            id:1,
            Question:'Is the Pharmetrade site secure?',
            Answer:`Yes, Pharmetrade is a secure site. However, it is your sole responsibility to maintain your account. This includes the security of your email address and password for all activity that occurs.`,
           src: plus,
           src1:minus
        },
        {
            id:2,
            Question:'Who are the users for the website?',
            Answer:'Independent Pharmacies and Wholesale Distributors',
            src: plus,
           src1:minus
        },
        {
            id:3,
            Question:'How do i know buying and selling my overstock prescription drugs is legal?',
            Answer:`You will need to review and follow your state's rules and regulations. While Pharmetrade operates only in the states that allow such sales, it is your responsibility as a buyer and seller to be`,
            src: plus,
           src1:minus
        },
        {
            id:4,
            Question:'How does pharmetrade charge me for selling on the website?',
            Answer:'Pharmetrade charges a fee of 8% of the total sale or $5.00, whichever is higher.',
            src: plus,
           src1:minus
        },
        {
            id:5,
            Question:'Are transactions made through pharmetrade classified as wholesale transaction?',
            Answer:'No, transactions made through pharmetrade are intended for specific patient needs or declared',
            src: plus,
           src1:minus
        },
        {
            id:6,
            Question:'Can a Buyer cancel an order after it hs been placed?',
            Answer:'Yes, but only if the order has not been confirmed by the seller.',
            src: plus,
            src1:minus

       },
       {
        id:7,
        Question:'How do I get Started on pharmetrade?',
        Answer:`To get started on Pharmetrade, you must register.
         To register, go to pharmetrade.com and click on 
         'Free Registration.' Follow the prompts to enter 
         your business information. When your registration
          is complete, we will verify your business information.
           Once all of your information is verified, `,
           src: plus,
           src1:minus


       },
        {
            id:8,
            Question:'What if I want Refund',
            Answer:'pharmetrade.com does 100% refund if you are not satisfied',
            src: plus,
           src1:minus

        },
        {
            id:9,
            Question:'How can I track my  order?',
            Answer:'You can go to your dashboard and view all of your orders',
            src: plus,
           src1:minus
        },
        {
            id:10,
            Question:'How long is shipping?',
             Answer:'Shipping is between 5-10 business working days',
             src: plus,
           src1:minus
        },
       
       
    ]

  return (
    <div className='w-screen h-full flex flex-col  '>
         
        <div className='flex justify-center items-center overflow-y-auto'>
       
            <div className='flex flex-col justify-center items-center rounded-md shadow-lg bg-gray-50  w-[85%] h-full'>
                {questions.map((question) => (
                    <div
                        key={question.id}
                        className='bg-slate-300 w-[85%] flex justify-start gap-6 p-4 border shadow-md rounded-md items-start my-2'
                    >
                        <div className='flex flex-col w-full h-full'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold'>{question.Question}</p>
                                <div onClick={() => toggleQuestion(question.id)}>
                                    {Activequestion === question.id ? (
                                        <img src={question.src1} className='cursor-pointer w-7 h-5'/>
                                        // <question.src1 className='text-xl cursor-pointer w-7 h-6' />
                                    ) : (
                                        <img src={question.src} className='cursor-pointer w-7 h-5'/>
                                        // <question.src className='text-xl cursor-pointer w-7 h-6' />
                                    )}
                                </div>
                            </div>
                            {Activequestion === question.id && (
                                <div className='mt-2'>
                                    <p>{question.Answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
  )
}

export default Faqs