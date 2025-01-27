import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-center h-screen">
          <Image
            src="https://res.cloudinary.com/ddz8cmo2p/image/upload/v1629744671/fvvo0uoxwivyvzacli1d.png"
            alt="image"
            style={{ width: "auto" }}
            width={400}
            height={1200}
          />
        </div>
      </main>
    </div>
  );
}
