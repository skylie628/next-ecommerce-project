import clsx from "clsx";

const Price = ({
  minPrice,
  maxPrice,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  minPrice: string;
  maxPrice: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const PriceFormat = ({
    amount,
    currencyCode,
  }: {
    amount: string;
    currencyCode: string;
  }) => (
    <>
      {" "}
      {`${new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount))}`}
      <span
        className={clsx("ml-1 inline", currencyCodeClassName)}
      >{`${currencyCode}`}</span>
    </>
  );
  return (
    <p suppressHydrationWarning={true} className={className}>
      <PriceFormat amount={minPrice} currencyCode={currencyCode} />
      {minPrice !== maxPrice && maxPrice && (
        <>
          - <PriceFormat amount={maxPrice} currencyCode={currencyCode} />
        </>
      )}
    </p>
  );
};

export default Price;
