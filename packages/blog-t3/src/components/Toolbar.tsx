import Link from "next/link";

export const Toolbar = () => {
  return (
    <div className="flex flex-row">
      <ToolbarItem to="/me" text="Me" />
      <ToolbarItem to="/projects" text="Projects" />
      <ToolbarItem to="/blog" text="Blog" />
      <ToolbarItem to="/cv" text="Cv" />
    </div>
  );
};

const ToolbarItem = ({ to, text }: ToolbarItemProps) => {
  return (
    <Link href={to}>
      <button className="text-center rounded p-2 m-2 w-24 md:w-32 bg-slate-500 text-white hover:bg-slate-600 transition-all duration-200">
        <p>{text}</p>
      </button>
    </Link>
  );
};

type ToolbarItemProps = {
  to: string;
  text: string;
};
