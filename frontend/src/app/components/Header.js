const links = ["Me", "Projects", "Blog", "Cv"];

export const Header = () => (
  <div className="w-screen flex justify-center">
    {links.map((x) => (
      <a className="p-4 text-lg font-semibold text-white cursor-pointer">{x}</a>
    ))}
  </div>
);
