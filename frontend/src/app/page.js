import Image from "next/image";
import me from "../../public/me.jpg";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center">
      <Image src={me} alt="Me" width={400} className="mt-8" />
      <h1 className="font-bold mt-8">
        Felix McCuaig, Full Stack Software Engineer.
      </h1>
      <p>I have a passion for machine learning, AI, and data science.</p>
      <p className="font-bold mt-8">Contact Me:</p>
      <p>felixmccuaig@gmail.com</p>
      <a href="https://www.linkedin.com/in/felixmccuaig/">/in/felixmccuaig/</a>
      <a href="https://github.com/felixmccuaig">github.com/felixmccuaig</a>
      <a href="/cv" className="font-bold mt-8 underline">
        CV
      </a>
    </main>
  );
}
