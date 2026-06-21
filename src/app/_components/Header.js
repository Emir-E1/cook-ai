import { Separator } from "@/components/ui/separator";

function Header({ title, sub }) {
  return (
    <div className="flex items-center gap-7">
      <h2>{title}</h2>
      <div className="relative w-20 h-20 flex items-center justify-center">
        <Separator
          className={"bg-secondary rotate-45"}
          orientation="vertical"
        />
      </div>
      <p className="text-body">{sub}</p>
    </div>
  );
}

export default Header;
