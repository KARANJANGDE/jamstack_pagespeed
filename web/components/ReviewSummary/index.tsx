import React, { useState } from "react";
import PageStepCounter from "@/components/PlanContactSection/PageStepCounterSection";


const ReviewPlanSummary = ({ setCurStep, block, priceValue, curStep }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState("")

  const OnchangerHandler = (e) => {
    e.preventDefault()
    setUser(e.target.value)
  }
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const { section } = block;
  

  const AVATAR = section[1].image_array[1].image.asset.url;
  const CREDIT_CARD = section[1].image_array[0].image.asset.url;
  const CARD = [
    {
      "key": "User", "Value": `${user === '' ? "John Doe" : user}`
    },
    {
      "key": "Plan", "Value": `$${priceValue}/month`
    },
    {
      "key": "Final", "Value": `$${priceValue}`
    },
  ]


  return (
    <div className="pt-[120px] pb-[50px] em:pb-[80px]">
      <div className="container">
        <div className="mt-0 em:mt-10 sm:mt-20 lg:mt-24">
          <div className="max-w-full em:max-w-[804px] mx-auto mb-12">
            <h4 className="text-center text-xl sm:text-2xl lg:text-3xl font-medium">
              You re just 3 Steps away from unlocking your Agency growth and
              increasing your bandwidth.
            </h4>
            <div>
              <PageStepCounter curStep={curStep} setCurStep={setCurStep} />
            </div>
          </div>
          <div className="bg-dark-pink rounded-lg shadow-priceCard px-3 esm:px-6 py-6 esm:py-10 sm:py-14">
            <form>
              <div className="">
                <h2 className="text-white-color text-xl em:text-2xl font-semibold">
                  Review plan Summary
                </h2>
              </div>
              <div className="block emd:flex justify-between items-center">
                <div className="w-full emd:w-[60%] lg:w-1/2">
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-6 sm:gap-8 emd:gap-4 lg:gap-[2.313rem] py-6 sm:py-10">
                    <div>
                      <label className="text-[0.921rem] text-white-color">
                        Email-addresses*
                      </label>
                      <div className="mt-[0.512rem]">
                        <input
                          type="text "
                          placeholder="Abc@example.com"
                          className="block w-full rounded-lg border py-[0.665em] text-black h-[2.075em] px-4 border-whisper-color shadow-input-box text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[0.921rem] text-white-color">
                        Phone Number*
                      </label>
                      <div className="mt-[0.512rem]">
                        <input
                          type="text "
                          placeholder="(123) 125-2560"
                          className="block w-full rounded-lg border py-[0.665em] text-black h-[2.075em] px-4 border-whisper-color shadow-input-box text-base "
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl em:text-2xl text-white-color font-semibold">Payment method</h1>
                  </div>
                  <div className="pt-5 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 gap-[2.313rem] items-end">
                    <div className="">
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label className="text-[0.921rem] text-white-color">Card Holder Name*</label>
                          <div className="mt-[0.512rem]">
                            <input type="text " placeholder="John Doe" className="block w-full rounded-lg border py-[0.665em] text-black-color h-[2.075em] px-4 border-whisper-color shadow-input-box text-base"
                              onChange={OnchangerHandler} />
                          </div>
                        </div>
                        <div>
                          <label className="text-[0.921rem] text-white-color">Card Number*</label>
                          <div className="mt-[0.512rem]">
                            <input type="text " placeholder=".........." className="block w-full rounded-lg border py-[0.665em] text-black-color h-[2.075em] px-4 border-whisper-color shadow-input-box text-base" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[0.921rem] text-white-color">CVV Number*</label>
                          <div className="mt-[0.512rem]">
                            <input type="text " placeholder="235" className="block w-full rounded-lg border py-[0.665em] text-black-color h-[2.075em] px-4 border-whisper-color shadow-input-box text-base" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[0.921rem] text-white-color">Expiry Date*</label>
                          <div className="mt-[0.512rem]">
                            <input type="text " placeholder="05/22" className="block w-full rounded-lg border py-[0.665em] text-black-color h-[2.075em] px-4 border-whisper-color shadow-input-box text-base" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white-color text-xs">
                            We do not store your credit or debit card details
                            anywhere in our database OR on our server.
                          </p>
                          <div className="flex items-center pt-4">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                              className="w-[16px] h-[16px]"
                            />
                            <p className="text-dark-blue text-[0.614rem] pl-2 pb-0">
                              I have read and agree to E2M Service Agreement.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="py-[1.531rem] px-4 esm:px-[1.375rem] bg-white-color rounded-lg">
                        <div className="">
                          <div>
                            <img
                              src={CREDIT_CARD}
                              className="h-full esm:h-[200px] sm:h-[144px] max-w-full emd:max-w-[230px] w-full object-cover emd:object-contain rounded-xl"
                            />
                          </div>

                          <div className="py-[1.813rem] pb-4 border-b-[1px] border-dark-blue border-opacity-50 border-dashed">
                            <div>
                              {
                                CARD.map((item,index) => {
                                  return (
                                    <ul className="flex justify-between items-center pb-4" key={index}>
                                      <li className="text-dark-blue text-[0.819rem] font-medium opacity-50">{item.key}</li>
                                      <li className="text-dark-blue text-[0.819rem] font-medium">{item.Value}</li>
                                    </ul>
                                  )
                                })
                              }
                            </div>
                          </div>
                          <div>
                            <div className="pt-5">
                              <p className="text-xs text-dark-blue opacity-50 font-medium">You have to pay</p>
                              <div className="flex">
                                <p className="text-3xl font-semibold text-dark-blue pb-0">${priceValue}</p>
                                <p className="pl-2 text-sm text-dark-blue font-medium opacity-50 pt-3 pb-0">USD</p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[90%] sm:w-[60%] emd:w-[30%] lg:w-[40%] ml-auto mr-auto emd:mr-0 mt-10 emd:mt-0">
                  <img src={AVATAR} className="h-full sm:h-[350px] w-full emd:w-[423px] object-contain" />
                </div>
              </div>
              {/* <div className='flex justify-between'>
                <button
                  className={`bg-blue-color text-white-color font-semibold px-4 py-2 rounded ${isChecked ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                    }`}
                  disabled={!isChecked}
                >Confirm</button>
                <button onClick={() => { setCurStep(1) }} >Go Back</button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPlanSummary;
