import Head from "next/head";

export default function CustomHead() {
  //icon must be placed in public folder not outer link
  return (
    <head>
      <title>SADIDA - Ecommerce Case Flatform</title>
      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
    </head>
  );
}
