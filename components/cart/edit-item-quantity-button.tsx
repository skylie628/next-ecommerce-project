import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { CartItem } from "@/lib/sadida/types";
import LoadingDots from "../LoadingDot";
import {
  decreaseLineQuantityFromCartAction,
  removeLineFromCartAction,
  addLineToCartAction,
} from "@/lib/sadida/actions/cart";
export default function EditItemQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: "plus" | "minus";
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      onClick={() => {
        startTransition(async () => {
          router.refresh();
          if (type === "plus") {
            await addLineToCartAction({ sku: item.sku });
          } else {
            await decreaseLineQuantityFromCartAction({ sku: item.sku });
          }
          router.refresh();
          ///router.refresh() : refresh page to get new value
        });
      }}
      disabled={isPending}
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "cursor-not-allowed": isPending,
          "ml-auto": type === "minus",
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
