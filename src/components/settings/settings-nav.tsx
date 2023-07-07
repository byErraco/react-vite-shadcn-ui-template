import { NavLink } from "react-router-dom";

import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <NavLink
          to={item.href}
          key={item.href}
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "default" }),
              isActive
                ? "bg-muted hover:bg-muted "
                : "hover:bg-transparent hover:underline",
              "justify-start text-muted-foreground "
            )
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
