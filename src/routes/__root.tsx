import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SG Global Healthcare Corp — Pharmaceutical & Medical Distributor" },
      { name: "description", content: "SG Global Healthcare Corp delivers quality, affordable pharmaceutical products and medical equipment across the Philippines." },
      { name: "author", content: "SG Global Healthcare Corp" },
      { property: "og:title", content: "SG Global Healthcare Corp" },
      { property: "og:description", content: "Delivering wellness, ensuring access — quality medicines and medical equipment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background overflow-hidden">
      {/* Subtle side decorations */}
      <div aria-hidden className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden w-24 lg:block">
        <div className="absolute left-0 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.06] blur-3xl" />
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      </div>
      <div aria-hidden className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden w-24 lg:block">
        <div className="absolute right-0 top-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] opacity-[0.06] blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
