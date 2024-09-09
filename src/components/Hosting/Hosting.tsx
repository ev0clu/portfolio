import { hostingConfig } from "@/config/hosting";
import Section from "../Section/Section";
import SectionMotion from "../Section/SectionMotion";
import SectionTitle from "../Section/SectionTitle";
import ListWrapper from "./ListWrapper";
import { Separator } from "../ui/separator";

const Hosting = () => {
  return (
    <Section id="Hosting">
      <SectionMotion>
        <SectionTitle className="!text-lg tracking-[0.5rem]">
          HOSTING
        </SectionTitle>
        <ul className="flex w-screen flex-row items-center justify-center gap-5 bg-accent text-muted-foreground">
          {hostingConfig.map((element, index) => {
            return (
              <>
                <ListWrapper key={element + "_" + index}>{element}</ListWrapper>
                {index !== hostingConfig.length - 1 && (
                  <span key={"dot_" + index} className="text-emerald-500">
                    ●
                  </span>
                )}
              </>
            );
          })}
        </ul>
      </SectionMotion>
    </Section>
  );
};

export default Hosting;
