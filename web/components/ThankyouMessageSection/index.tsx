import { ThankYouImageType } from "@/lib/sanity/types/page"
import CustomImage from "../CustomImage"

const ThankyouMessageSection: React.FC<ThankYouImageType> = ( block ) => {
    const  {thank_you_image}  = block || {}

    return (
        <div className="pt-40 md:pt-52 pb-16">
            <div className="container">
                <div className="py-0 sm:py-12 lg:py-20 mx-auto text-center [&>img]:max-w-[90%] em:[&>img]:max-w-[70%] md:[&>img]:max-w-[50%] [&>img]:mx-auto">
                  {thank_you_image &&  <CustomImage block={thank_you_image} />}
                </div>
            </div>
        </div>
    )
}

export default ThankyouMessageSection
