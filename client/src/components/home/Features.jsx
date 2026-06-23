import { ArrowRightIcon } from "lucide-react";

const features = [
  {
    title: "Free Delivery",
    description: "Orders over $20",
  },
  {
    title: "Fast Shipping",
    description: "Within 24 hours",
  },
  {
    title: "Best Quality",
    description: "Fresh products daily",
  },
  {
    title: "Best Quality",
    description: "Fresh products daily",
  },
];
const Features = () => {
  return (
    <section>
      <div className="bg-white py-5 border border-zinc-200 rounded-xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 py-3"
              >
                <div className="size-10 rounded-lg bg-app-cream flex items-center shrink-0">
                  <ArrowRightIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-app-green">
                    {feature.title}
                  </p>
                  <p className="text-xs text-app-text-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
