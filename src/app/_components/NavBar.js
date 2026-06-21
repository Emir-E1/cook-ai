import Logo from "./Logo";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

function NavBar() {
  const navLinks = [
    { label: "Recipes", href: "#recipes" },
    { label: "Blog", href: "#blog" },
    { label: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-36 md:py-4 grid grid-cols-2 md:grid-cols-3 items-center w-full bg-background/70 backdrop-blur-md border-b border-secondary/5">
      <div className="flex justify-start md:justify-center">
        <Logo />
      </div>

      <nav className="hidden md:flex items-center text-center justify-center gap-10 font-semibold">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:opacity-80 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center justify-center gap-x-16">
        <button className="hover:opacity-80 text-subheading transition-opacity">
          Login
        </button>

        <button className="bg-secondary text-subheading text-white px-10 py-4 rounded-full hover:text-primary transition-all">
          Start For Free
        </button>
      </div>

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <button className="md:hidden justify-self-end text-2xl">☰</button>
        </DrawerTrigger>

        <DrawerContent className="h-full bg-background border-l border-secondary/10">
          {console.log("open")}
          <div className="flex flex-col h-full px-8 py-8">
            <div className="flex items-center justify-between">
              <Logo />

              <DrawerClose asChild>
                <button className="text-2xl text-secondary">✕</button>
              </DrawerClose>
            </div>

            <div className="flex flex-col gap-8 mt-14">
              {navLinks.map((link) => (
                <DrawerClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="text-xl font-subheading text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </DrawerClose>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full bg-primary rounded-full py-4 font-medium text-secondary">
                Start For Free
              </button>
              <button className="w-full border border-secondary rounded-full py-4 font-medium text-secondary">
                Login
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}

export default NavBar;
