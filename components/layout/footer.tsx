import Link from "next/link";
import Image from "next/image";
import iconsHelper from "../icons";
import LogoIcon from "../icons/logo-square";
const footerItem = [
  {
    title: "Features",
    items: ["Marketing", "Commerce", "Analytics", "Merchandise"],
  },
  {
    title: "Supports",
    items: ["Pricing", "Docs", "Audition", "Art Status"],
  },
  {
    title: "Delivery",
    items: ["Term", "Condition", "Privacy", "License"],
  },
  {
    title: "Documents",
    items: ["Countries", "Information", "Restrictions", "Payment"],
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] dark:bg-black flex flex-col gap-10 mt-3">
      <div className="flex">
        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex gap-2 items-center">
                <div className="p-2 border border-1 border-white">
                  <LogoIcon />
                </div>
                <div className=" text-blue text-2xl font-bold">Sadida</div>
              </div>
              <span className="max-w-[500px] text-wrap ">
                Stay up to date with the latest discounts through our social
                media.
              </span>
            </div>
            <div className="flex gap-2">
              <Link href="https://github.com/skylie628">
                {" "}
                {iconsHelper.github}
              </Link>
              <Link href="#"> {iconsHelper.instagram}</Link>
              <Link href="#">{iconsHelper.linkedin}</Link>
              <Link href="#">{iconsHelper.twitter}</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-1/2  gap-5 p-5">
          {footerItem.map((item) => (
            <div key={item.title} className="flex flex-1 flex-col gap-5">
              <h4 className="text-xl">{item.title}</h4>
              <ul className="flex flex-col gap-2">
                {item.items.map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t border-1 p-5 mt-5 ">
        <span>© 2023 Skylie. All rights reserved.</span>
        <div className="flex items-center space-x-3">
          <Image
            src="https://sadida.s3.ap-southeast-2.amazonaws.com/5968299.png"
            alt="Visa icon"
            width={32}
            height={8}
          />
          <Image
            className="h-8"
            src="https://sadida.s3.ap-southeast-2.amazonaws.com/349228.png"
            alt="AE icon"
            width={32}
            height={8}
          />
          <Image
            className="h-8"
            src="https://sadida.s3.ap-southeast-2.amazonaws.com/5968144.png"
            alt="Apple pay icon"
            width={32}
            height={8}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
