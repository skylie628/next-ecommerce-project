import clsx from "clsx";
import Image from "next/image";
import Label from "../ui/label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    minPrice: string;
    maxPrice: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <article
      className={clsx(
        "flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black",
        {
          relative: label,
          "border-2 border-blue-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx("relative h-full w-full object-contain", {
            "transition duration-300 ease-in-out hover:scale-105":
              isInteractive,
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          minPrice={label.minPrice}
          maxPrice={label.maxPrice}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </article>
  );
}
