import ContentWrapper from "@/components/ContentWrapper";
import AboutMeHeader from "./Header";
import IDE from "./IDE/IDE";

export default async function Hero(): Promise<JSX.Element> {
  return (
    <section className="relative w-full overflow-x-clip pt-32 lg:pt-56" id="about-me">
      <ContentWrapper element="div" className=" mx-auto flex w-full flex-col content-center items-center justify-center">
        <AboutMeHeader />
        <IDE />
      </ContentWrapper>
    </section>
  );
}
