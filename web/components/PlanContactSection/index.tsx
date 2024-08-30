import React from 'react'
import PlanContactInformation from './PlanContactInformation'
import PlanContactForm from './PlanContactForm'

const PlancontactSection = ({ setCurStep }) => {
    return (
        <section className="pt-12 sm:pt-24 emd:pt-[8.625rem] pb-8 em:pb-12 sm:pb-20">
            <div className='container'>
                <div className='mt-14 sm:mt-20 p-2 emd:p-[2.375rem] bg-pricing-gradient shadow-pricing-box rounded-xl block emd:flex'>
                    <PlanContactInformation />
                    <PlanContactForm setCurStep={setCurStep} />
                </div>
            </div>

        </section>
    )
}

export default PlancontactSection
