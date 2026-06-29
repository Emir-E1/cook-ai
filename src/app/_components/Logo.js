import Image from "next/image";
import LogoIcon from "@/../public/Logo.png";
import LogoIconPrimary from "@/../public/Logo2.png";

function Logo({ type }) {
  return (
    <div className={"relative h-6 w-6  md:h-12 w-12 "}>
      <Image
        src={type === "primary" ? LogoIconPrimary : LogoIcon}
        fill
        className="object-contain "
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
