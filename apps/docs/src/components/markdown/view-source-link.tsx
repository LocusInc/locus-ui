import Link from "next/link";

export function ViewSourceLink({ href }: { href: string }) {
  return (
    <div className="mt-2 flex justify-end">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sm opacity-70 hover:opacity-100 hover:underline"
      >
        View Source
      </Link>
    </div>
  );
}
