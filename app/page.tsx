import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header>
        <nav className="px-8 py-2 flex items-center justify-between ">
          <Image
            src="/static/assets/actq_logo.png"
            width={270}
            height={81}
            alt="ACTQ Business Logo"
          ></Image>
          <ul className=" flex px-5 py-9 gap-5">
            <li className="text-lg font-medium">
              Home
              {/* <Link></Link> */}
            </li>
            <li className="text-lg font-medium">
              Services
              {/* <Link></Link> */}
            </li>
            <li className="text-lg font-medium">
              Financial Calculators
              {/* <Link></Link> */}
            </li>
            <li className="text-lg font-medium">
              About Us
              {/* <Link></Link> */}
            </li>
          </ul>
        </nav>
        <section className="hero-section h-dvh">
          <h1 className="text-5xl">Don't plan for the future by yourself</h1>
          <h6 className="text-xl">Get tax and accounting expertise for your situation</h6>
        </section>

      </header>
      <main>

      </main>
    </>


  );
}
