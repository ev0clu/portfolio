import { hostingConfig } from "@/config/hosting";
import Section from "../Section/Section";
import SectionMotion from "../Section/SectionMotion";
import SectionTitle from "../Section/SectionTitle";
import ListWrapper from "./ListWrapper";
import React from "react";

const Hosting = () => {
  return (
    <Section id="Hosting" className="pt-0">
      <SectionMotion>
        <SectionTitle className="mb-4 !text-lg tracking-[0.5rem]">
          HOSTING
        </SectionTitle>
        <ul className="gap:1 flex w-screen flex-col items-center justify-center bg-accent text-muted-foreground sm:flex-row sm:gap-5">
          {hostingConfig.map((element, index) => {
            return (
              <React.Fragment key={`list-wrapper_${element}-${index}`}>
                <ListWrapper>{element}</ListWrapper>
                {index !== hostingConfig.length - 1 && (
                  <span className="text-emerald-500">●</span>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </SectionMotion>
    </Section>
  );
};

export default Hosting;
