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
        <SectionTitle className="mb-2 !text-lg tracking-[0.5rem]">
          HOSTING
        </SectionTitle>
        <ul className="flex w-screen flex-row items-center justify-center gap-5 bg-accent text-muted-foreground">
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
