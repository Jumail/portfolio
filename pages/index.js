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
            <a
              href="https://github.com/jumail"
              className="font-semibold hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.facebook.com/jumailll/"
              className="font-semibold hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/MohamedJumail"
              className="font-semibold hover:underline"
            >
              Twitter
            </a>
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
            <h3 className="font-bold w-56">Workflow</h3>
            <p className="h-auto w-auto text-2xl">
              I like learning new technologies that make my development process
              easier and also I like to think alanytically about the problems I
              have. I also love collecting and storing logs about my work
              process which and try my best to be more efficient based on the
              data.{" "}
            </p>
          </div>
        </div>
        <div className="grid px-64 pr-64 space-x-8 justify-items-end">
          <div className="flex space-y-8">
            <h3 className="font-bold w-56">What I do</h3>
            <p className="h-auto w-auto text-2xl">
              I like learning new technologies that make my development process
              easier and also I like to think alanytically about the problems I
              have. I also love collecting and storing logs about my work
              process which and try my best to be more efficient based on the
              data.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="p-32 my-32 space-y-20">
        <div className="flex justify-center align-center space-x-20 px-32">
          <p>01</p>
          <div>
            <a
              href="https://www.followme.mv"
              className="font-bold text-7xl mb-5 hover:underline cursor-pointer"
            >
              FollowMe Tracking
            </a>

            <div className="space-y-2 ml-2 mt-5">
              <p className="text-2xl">
                FollowMe is a tracking app for IOS and Android. With over a
                100,000+ installs I have helped the company grow in the
                following ways:
              </p>
              <div className="ml-2">
                <p className="text-2xl">
                  &#8226; Collect feedback from users and implement features for
                  the application based on user data.
                </p>
                <p className="text-2xl">
                  &#8226; Collect and send out bills and invoices for the
                  required users or companies.
                </p>
                <p className="text-2xl">
                  &#8226; Develop the mobile applications for IOS.
                </p>
                <p className="text-2xl">
                  &#8226; Perform device installations on vessels.
                </p>
                <p className="text-2xl">
                  &#8226; Represent customer service for the company and help
                  users with the app.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-center space-x-20 px-32">
          <p>02</p>
          <div>
            <Link href="https://github.com/Jumail/mocklava-mobile.git">
              <h2 className="font-bold text-7xl mb-5 hover:underline cursor-pointer">
                Mocklava Mobile App
              </h2>
            </Link>
            <div className="space-y-2 ml-2">
              <p className="text-2xl">
                This is an demo app that I have created while learning
                React-Native. I have tried to implement complex UI that are hard
                to accomplish.
              </p>
              <p className="text-2xl">
                The app is an ecommerce app that shop owners can register and
                create an profile for the shop however they want.
              </p>
            </div>
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
