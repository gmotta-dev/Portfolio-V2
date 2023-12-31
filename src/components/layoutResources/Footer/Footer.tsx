import ContentWrapper from "@/components/ContentWrapper";
import InformationContact from "@/components/Information/ComponentVariants/InformationContact";
import InformationGeneral from "@/components/Information/ComponentVariants/InformationGeneral";
import MyLogo from "@/components/MyLogo";

export default function Footer() {
  return (
    <ContentWrapper element="footer" className="my-48 border-t-[2px] border-t-purple-heart-700 pt-16">
      <div className="flex w-full flex-col justify-between gap-20 md:flex-row">
        <MyLogo className="text-purple-heart-700" />
        <div className="flex w-full gap-16 md:w-auto">
          <div className="md:ml-auto">
            <p className="text-sm text-gray-500">Contact</p>
            <InformationContact classNames={{ container: "flex flex-col gap-4 mt-1", "all-items-icons": "w-4 h-4 text-purple-heart-700", "all-items-labels": "text-purple-heart-950 text-sm" }} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Info</p>
            <InformationGeneral
              label
              classNames={{ container: "flex flex-col gap-4 mt-1", "all-items-icons": "w-4 h-4 text-purple-heart-700", "all-items-labels": "text-purple-heart-950 text-sm" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-5 md:flex-row ">
        {anchors.map((i, key) => (
          <a href={"#" + i.href} key={key} className="text-sm text-purple-heart-950">
            {i.label}
          </a>
        ))}

        <span className="text-sm text-gray-400 md:ml-auto">All Rights Reserved by Gabriel Motta</span>
      </div>
    </ContentWrapper>
  );
}

const anchors = [
  { label: "ABOUT ME", href: "about-me" },
  { label: "SKILLS", href: "skills" },
  { label: "PROJECTS", href: "projects" },
  { label: "CONTACT", href: "contact" },
];
