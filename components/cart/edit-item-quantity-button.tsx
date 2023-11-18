import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { updateItemQuantity, removeItem } from "./actions";
import clsx from "clsx";
import type { CartItem } from "@/lib/sadida/types";
import LoadingDots from "../LoadingDot";

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
          const error =
            item.quantity === 1 && type === "minus"
              ? await removeItem(item.id)
              : await updateItemQuantity({
                  lineId: item.id,
                  variantId: item.merchandise.id,
                  quantity:
                    type === "plus" ? item.quantity + 1 : item.quantity - 1,
                });
          if (error) throw new Error(error.toString());
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
