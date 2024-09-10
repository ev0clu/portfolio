"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

interface SkillTooltipProps {
  Icon: IconType;
  tileClassName: string;
  tooltipClassName: string;
  tooltipText: string;
}

const SkillTooltip = ({
  Icon,
  tileClassName,
  tooltipClassName,
  tooltipText,
}: SkillTooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={open}>
        <TooltipTrigger>
          <Icon
            className={tileClassName}
            aria-label={tooltipText}
            onClick={() => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 2500);
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          />
        </TooltipTrigger>
        <TooltipContent className={tooltipClassName}>
          <span>{tooltipText}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillTooltip;
