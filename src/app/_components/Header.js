import { Separator } from "@/components/ui/separator";

function Header({ title, sub }) {
  return (
    <div className="flex flex-col md:flex-row items-center text-center gap-3 md:gap-7">
      <h2>{title}</h2>

      <Separator
        orientation="vertical"
        className="hidden md:block h-12 rotate-45 bg-secondary"
      />

      <p className="text-body">{sub}</p>
    </div>
  );
}

export default Header;
