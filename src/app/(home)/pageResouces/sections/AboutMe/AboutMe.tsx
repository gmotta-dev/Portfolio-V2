import ContentWrapper from "@/components/ContentWrapper";
import { MyLottie } from "@/components/Lottie";
import AboutMeHeader from "./Header";
import IDE from "./IDE/IDE";

const getLottie = async () =>
  await fetch(process.env.NEXT_PUBLIC_CLOUDFRONT_URL + "/lotties/hero-lottie.json")
    .then((res) => res.json())
    .catch((err) => console.log(err));

export default async function Hero(): Promise<JSX.Element> {
  const lottie = await getLottie();

  return (
    <section className="relative w-full overflow-x-clip pt-32 lg:pt-56" id="about-me">
      <ContentWrapper element="div" className=" mx-auto flex w-full flex-col content-center items-center justify-center">
        <AboutMeHeader />
        <IDE />
        <MyLottie JSON={lottie} classNames={{ container: "hidden md:block max-w-[250px] md:absolute md:-translate-x-1/2 md:-translate-y-1/2 left-0 top-0 md:block lg:max-w-none" }} />
      </ContentWrapper>
    </section>
  );
}
