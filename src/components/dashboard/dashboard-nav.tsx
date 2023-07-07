import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";

import { Icons } from "../icons";

export function DashboardNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link to="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-sm font-medium transition-colors hover:text-primary"
            : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        }
        // className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </NavLink>
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          isActive
            ? "text-sm font-medium transition-colors hover:text-primary"
            : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        }
        // className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </NavLink>
    </nav>
  );
}
