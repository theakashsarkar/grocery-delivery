import { Loader2Icon } from "lucide-react";
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-8 animate-spin text-green-950" />
    </div>
  );
};
export default Loading;
