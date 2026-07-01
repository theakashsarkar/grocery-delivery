const RatingBar = ({ rating, count, percentage }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 text-right text-sm text-zinc-600">{rating} ★</span>

      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="w-6 text-xs text-zinc-600">{count}</span>
    </div>
  );
};
export default RatingBar;
