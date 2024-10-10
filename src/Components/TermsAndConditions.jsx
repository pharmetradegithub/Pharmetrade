import React from 'react'
import mobile from '../assets/Mobile app.png'
import playstore from '../assets/googleplay.png'
import appstore from '../assets/apple[1].png'
import back from '../assets/Previous_icon.png'
function TermsAndConditions({ topMargin, setActiveStep }) {
    return (
        <div
            className='w-full  flex  flex-col justify-center items-center bg-slate-100'
            style={{ marginTop: `${topMargin}px ` }}>
            <div className='w-[80%]  px-20 py-8 h-full border-b'>
                <h1 className='text-3xl font-medium text-blue-900 text-start py-6 underline'>
                    Terms & Conditions
                </h1>
                <button onClick={() => setActiveStep(3)} className=' flex text-red-500 text-xl hover:under  gap-1'>
                    <img src={back} className='w-4 h-4' />
                    <p className='-mt-1 hover:text-red-500'> Back</p>
                </button>
                <div className='   ' >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tenetur ea enim, ut laboriosam commodi veniam repellendus voluptates fugiat excepturi dignissimos delectus ipsam odio nobis earum itaque aliquid tempora temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nobis ratione sunt earum, sequi vel facere natus dicta a quidem magnam nisi perferendis molestias optio fugiat dolor aspernatur numquam recusandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae odio? Inventore maiores cupiditate vero sed asperiores blanditiis labore hic quam reiciendis, perferendis molestiae, nam veritatis pariatur earum ipsa! Nobis.
                    <div className='my-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, iusto debitis! Obcaecati, voluptatum natus. Quas doloremque suscipit blanditiis veniam ut labore in sunt, recusandae nulla assumenda illo natus ipsum ab.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi iste qui. Qui dolorum quod a tempore in atque nam neque ut error accusamus! Odit beatae quasi fugiat officia commodi.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='text-blue-900 font-semibold text-xl'>1.  Eligibility</h1>
                    <div className='py-2'>
                        <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "}
                        You must be at least 18 years old to use our Services.
                        You agree to provide accurate, current, and complete information as required when using the Services.
                        If you are purchasing prescription medications, you must have a valid prescription issued by a licensed healthcare provider.   </div>
                </div>

                <div className='py-4'>
                    <h1 className='text-blue-900 font-semibold text-xl'>2. Prescription Medications
                    </h1>
                    <div className='py-2'>
                        Prescription medications will only be dispensed upon receipt of a valid prescription.
                        [Pharmacy Name] reserves the right to verify the authenticity of any prescription provided.
                        The fulfillment of any prescription is subject to stock availability and approval by a licensed pharmacist.  </div>
                    <div className='py-2'>
                        Over-the-counter (OTC) products are available for purchase without a prescription.
                        It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                    <div className='py-2'>
                        Over-the-counter (OTC) products are available for purchase without a prescription.
                        It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                </div>

                <div className='py-4'>
                    <h1 className='text-blue-900 font-semibold text-xl'> 3. Consultation with Healthcare Providers
                    </h1>
                    <div className='py-2'>
                        Information provided on the Services is for informational purposes only and is not intended as medical advice.
                        Always seek the advice of a qualified healthcare provider with any questions regarding medications or medical conditions.
                        Use of the Services does not create a healthcare provider-patient relationship between you and [PharmEtrade].   </div>

                    <div className='py-2'>
                        Information provided on the Services is for informational purposes only and is not intended as medical advice.
                        Always seek the advice of a qualified healthcare provider with any questions regarding medications or medical conditions.
                        Use of the Services does not create a healthcare provider-patient relationship between you and [Pharmacy Name].  </div>
                </div>

                <div className='py-4'>
                    <h1 className='font-semibold text-blue-900 text-xl'>4. Payment and Pricing</h1>
                    <div className='py-2'>
                        All prices for medications and products are subject to change without notice.
                        Payment must be made in full at the time of purchase through the available payment methods on our platform.
                        [PharmEtrade] reserves the right to cancel any order if the payment is not received or if there is a pricing error.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='font-semibold text-xl text-blue-900'>5. Shipping and Delivery
                    </h1>
                    <div className='py-2'>
                        Shipping and delivery times are estimated and may vary depending on your location and product availability.
                        [Pharmetrade] is not responsible for any delays in shipping due to external factors such as weather, postal service issues, or supplier delays.
                        Some products, such as certain medications, may be subject to additional shipping restrictions or regulations.
                    </div>
                    <div className='py-4'>
                        <h1 className='text-lg font-medium text-blue-900'>Click here Page Content- </h1>
                        <div>
                            <p className='text-lg'>a.{" "} GPay <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>

                            <p className='text-lg'>b. {" "}Paytm <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>c.{" "} PhonePe <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>d.{" "} Mobikwik <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>e.{" "} Amazon Pay <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>f. {"   "} {" "}Visa, Mastro, Rupay and Maestro cards;
                            </p>
                            <p className='text-lg'> g. {"    "}Cash on delivery for offline payments.
                            </p>


                        </div>
                    </div>
                </div>


            </div>

            <div className='flex py-4'>
                <div>
                    <img src={mobile} className='w-60 h-96' />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <h1 className='flex  text-xl'>Download App for Free</h1>
                    <div className=' flex py-6'>

                        <button className='bg-blue-900 text-white mx-6 w-32 h-8 rounded-md flex items-center p-2'>
                            <img src={playstore} className='w-6' />
                            {" "}  Google Play
                        </button>

                        <button className='bg-blue-900 rounded-md text-white mx-6 w-28 flex h-8 items-center'>
                            <img src={appstore} className='w-8 ' />
                            App Store</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions;