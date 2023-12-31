import ContentWrapper from "@/components/ContentWrapper";
import InformationContact from "@/components/Information/ComponentVariants/InformationContact";
import InformationGeneral from "@/components/Information/ComponentVariants/InformationGeneral";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact(): JSX.Element {
  return (
    <ContentWrapper element="section" className="my-24 scroll-mt-28 py-9 md:bg-none md:py-0" id="contact">
      <div className="flex flex-col gap-8 bg-stone-50 px-4 py-9 shadow-md shadow-gray-300 md:flex-row md:flex-wrap md:px-7 lg:rounded-lg">
        <div className="mx-auto flex w-full flex-1 flex-col items-center rounded-lg md:mx-0 md:min-w-[588px] lg:items-start">
          <h2 className="text-center text-2xl font-bold text-purple-heart-700 md:text-4xl lg:text-left">Wanna work together?</h2>
          <ContactForm />
        </div>
        <div className="flex flex-1 flex-col gap-11 rounded-lg bg-purple-heart-700 p-6 text-sulu-300 md:min-w-[420px]">
          <h3 className="text-4xl font-bold md:pl-6">Contacts</h3>

          <InformationContact
            classNames={{
              container: "flex-col",
              "all-items": "px-6 py-4 rounded-lg",
              "phone-container": "text-black bg-sulu-300 !text-black",
              "email-label": "text-zinc-50",
              "location-label": "text-zinc-50",
              "all-items-labels": "font-medium md:text-lg",
            }}
          />
          <InformationGeneral classNames={{ container: "mt-auto md:pl-5" }} />
        </div>
      </div>
    </ContentWrapper>
  );
}
