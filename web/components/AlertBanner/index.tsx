import { useSyncExternalStore } from "react";
import Link from "../Link";

const subscribe = () => () => {};

export default function AlertBanner({
  preview,
  loading,
}: {
  preview?: boolean;
  loading?: boolean;
}) {
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => window.top === window,
    () => false
  );

  if (!shouldShow || !preview) return null;

  return (
    <div
      className={`${
        loading ? "animate-pulse" : ""
      } border-b border-accent-7 bg-accent-7 text-white`}
    >
      <div className="py-2 text-center text-sm">
        {"Previewing drafts. "}
        <Link
          to="/api/disable-draft"
          className="underline transition-colors duration-200 hover:text-cyan"
        >
          Back to published
        </Link>
      </div>
    </div>
  );
}
