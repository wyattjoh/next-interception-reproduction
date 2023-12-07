import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog/first", label: "Blog: First" },
  { href: "/blog/second", label: "Blog: Second" },
  { href: "/blog/third", label: "Blog: Third" },
  { href: "/blog/fourth", label: "Blog: Fourth" },
  { href: "/author/first", label: "Author: First", extra: "Nested Modal" },
  { href: "/author/second", label: "Author: Second", extra: "Nested Modal" },
  { href: "/author/third", label: "Author: Third", extra: "Nested Modal" },
  { href: "/author/fourth", label: "Author: Fourth", extra: "Root Modal" },
];

export const Common = () => {
  return (
    <div>
      <h2>Links</h2>
      <ul>
        {links.map(({ href, label, extra }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>{label}</Link>
            {extra && (
              <span className="ml-3 text-sm text-slate-600">{extra}</span>
            )}
          </li>
        ))}
      </ul>
      <h2>Description</h2>
      <p>
        By navigating from the Blog page to the Author page using the links
        above, you'll see the bug being encountered in the server console.
      </p>
    </div>
  );
};
