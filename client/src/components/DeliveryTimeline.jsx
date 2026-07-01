import { Clock, Check, Truck, Package } from "lucide-react";

const timelineSteps = [
  {
    title: "Placed",
    icon: Clock,
  },
  {
    title: "Confirmed",
    icon: Check,
  },
  {
    title: "Packed",
    icon: Package,
  },
  {
    title: "Shipped",
    icon: Truck,
  },
  {
    title: "Out for Delivery",
    icon: Truck,
  },
  {
    title: "Delivered",
    icon: Check,
  },
];

const DeliveryTimeline = ({ order }) => {
  return (
    <div className="rounded-2xl bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-green-600">
        Delivery Progress
      </h2>

      <div>
        {timelineSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === timelineSteps.length - 1;

          return (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white ring-4 ring-green-200">
                  <Icon className="h-4 w-4" />
                </div>

                {!isLast && <div className="h-12 w-px bg-slate-300"></div>}
              </div>

              <div className="pb-6">
                <p className="text-sm font-semibold text-green-600">
                  {step.title}
                </p>

                {index === 0 && (
                  <p className="mt-0.5 text-xs text-slate-500">
                    {new Date(order.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryTimeline;
