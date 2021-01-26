import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohamed Jumail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="flex justify-between h-30 w-30 py-4 px-20 pt-16">
          <h1 className=" font-bold text-4xl">Mohamed Jumail</h1>
          <div className="flex space-x-4">
            <Link href="/">
              <a className="font-semibold">Facebook</a>
            </Link>
            <Link href="/">
              <a className="font-semibold">LinkedIn</a>
            </Link>
            <Link href="/">
              <a className="font-semibold">Twitter</a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center align-center p-64 space-y-5">
          <h1 className="text-9xl font-bold">Hi, I am Jumail</h1>
          <p className="text-lg font-medium">
            Tinkerer - Effective Altruist - Software Developer
          </p>
        </div>
      </section>

      <section className="space-y-14">
        <div className="grid px-64 pr-64 space-x-8 justify-items-end">
          <div className="flex space-y-8">
            <h3 className="font-bold w-56">Intro</h3>
            <p className="h-auto w-auto text-2xl">
              It all began in high-school when I volunteered for a local NGO to
              build a website for them. It got a lot of positive feedback and
              that’s where my love for software development came from.{" "}
            </p>
          </div>
        </div>
        <div className="grid px-64 pr-64 space-x-8 justify-items-end">
          <div className="flex space-y-8">
            <h3 className="font-bold w-56">What I do</h3>
            <p className="h-auto w-auto text-2xl">
              It all began in high-school when I volunteered for a local NGO to
              build a website for them. It got a lot of positive feedback and
              that’s when my love for software development came from.{" "}
            </p>
          </div>
        </div>
      </section>

      <footer className="pt-32">
        <div className="flex justify-center align-center py-32">
          <h1 className="text-9xl font-bold">Get in Touch.</h1>
        </div>
        <div className="flex justify-center align-center py-32 space-x-20">
          <h1>Mohamed Jumail</h1>
          <div>
            <p>(+960) 7792324</p>
            <p>jumail641@gmail.com</p>
          </div>
          <div className="flex space-x-1">
            <p>Made with ❤️ from</p>
            <p className="font-semibold">Maldives</p>
          </div>
        </div>
      </footer>
    </>
  );
}
