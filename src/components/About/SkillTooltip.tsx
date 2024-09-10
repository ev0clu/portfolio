import { IconType } from "react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Icon className={tileClassName} aria-label={tooltipText} />
        </TooltipTrigger>
        <TooltipContent className={tooltipClassName}>
          <span>{tooltipText}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillTooltip;
