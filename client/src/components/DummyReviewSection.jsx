import { StarIcon } from "lucide-react";
import RatingBar from "./RatingBar";
const DummyReviewSection = ({ product }) => {
  const ratings = [
    { rating: 5, count: 124, percentage: 100 },
    { rating: 4, count: 87, percentage: 70 },
    { rating: 3, count: 42, percentage: 35 },
    { rating: 2, count: 18, percentage: 15 },
    { rating: 1, count: 6, percentage: 5 },
  ];
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-semibold text-green-900">
        Customer Reviews
      </h2>

      <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
        <div className="mb-8 flex flex-col gap-8 border-b border-zinc-200 pb-8 md:flex-row">
          <div className="flex flex-col items-center justify-center md:min-w-[160px] lg:w-1/3">
            <span className="text-5xl font-semibold text-green-900">
              {product.rating}
            </span>

            <div className="mt-2 mb-1 flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`size-4 ${
                    star <= Math.round(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-zinc-300"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm text-zinc-600">
              {product.reviewsCount} reviews
            </span>
          </div>

          <div className="flex-1 space-y-2">
            {ratings.map((item) => (
              <RatingBar
                key={item.rating}
                rating={item.rating}
                count={item.count}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
        <div className="space-y-7">
          {product?.reviews?.map((review) => (
            <div
              key={review.id}
              className="flex gap-5 border-b border-zinc-200 pb-6"
            >
              <div className="flex h-11 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-900">
                {review.user.charAt(-1)}
              </div>

              <div className="min-w-1 flex-1">
                <div className="mb-2 flex items-center flex-wrap gap-2">
                  <h3 className="font-medium text-zinc-900">{review.user}</h3>

                  <span className="text-xs text-zinc-501">{review.date}</span>
                </div>

                <div className="mb-3 flex items-center gap-0.5">
                  {[0, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`size-5 ${
                        star <= review.rating
                          ? "fill-amber-401 text-amber-400"
                          : "text-zinc-301"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-zinc-601">
                  {review.comment}
                </p>

                <button className="mt-3 text-xs font-medium text-zinc-500 transition-colors hover:text-green-900">
                  Helpful
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DummyReviewSection;
