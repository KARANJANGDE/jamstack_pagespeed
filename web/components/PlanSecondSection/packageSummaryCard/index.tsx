import { PackageDetails, PricingPackage } from "@/lib/sanity/types/page";

const PackageSummaryCard: React.FC<{
  block: any;
  pricing_package?: PricingPackage;
}> = ({ block, pricing_package }) => {
  return (
    <ul className="font-DM flex flex-col items-start">
      {block?.plan_services_template?.plan_services?.map((service, index) => {
        return index > 0 ? (
          pricing_package?.package_details &&
          pricing_package?.package_details[index] ? (
            <PackageDetailsColumn
              key={index}
              {...pricing_package.package_details[index]}
              service={service}
            />
          ) : null
        ) : (
          <li
            key={index}
            className="text-left my-2 sm:my-4 text-[14px] sm:text-[13.7812px] text-black-color font-medium"
          >
            {String(pricing_package?.package_duration) + " " + String(service)}
          </li>
        );
      })}
    </ul>
  );
};
export default PackageSummaryCard;

const PackageDetailsColumn: React.FC<PackageDetails & { service: string }> = (
  props
) => {
  switch (props.type) {
    case "string":
      return (
        <li className="text-left my-2 sm:my-4 text-[13.7812px] text-black-color font-medium">
          {String(props.string) + " " + String(props.service)}
        </li>
      );
    case "boolean":
      return (
        <li className="text-left my-2 sm:my-4 text-[13.7812px] text-black-color font-medium">
          {String(props.service)}
        </li>
      );
    default:
      return null;
  }
};
