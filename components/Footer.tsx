import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-max py-10 text-sm text-text-secondary flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
