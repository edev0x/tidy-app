import { Button } from "@heroui/button";
import Link from "next/link";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
        <div className="relative z-20 flex flex-col w-full gap-6 lg:w-1/2 xl:mt-8">
          <div className="leading-8 text-center md:leading-10 md:text-left">
            <div className="inline-block">
              <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1.5rem,10vw,3rem)] md:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
                <span className="font-bold dark:text-white">Boost 🚀 </span>
                productivity by effortlessly managing your{" "}
                <span className={title({ color: "blue" })}>
                  {" "}
                  daily tasks
                </span>{" "}
                team&apos;s progress.
              </h1>
            </div>
            <div className={subtitle({ class: "mt-8" })}>
              Tidy is a powerful task manager that helps you stay organized
              things done with ease.
            </div>

            <div>
              <div className="mt-8">
                <Button
                  as={Link}
                  color="primary"
                  href="/getting-started"
                  size="lg"
                  type="button"
                  variant="solid"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
