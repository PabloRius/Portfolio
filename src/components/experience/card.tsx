import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/content.config";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import AwardIcon from "../icons/award-icon";
import CalendarIcon from "../icons/calendar-icon";
import ChevronDownIcon from "../icons/chevron-down-icon";
import ChevronUpIcon from "../icons/chevron-up-icon";
import MapPinIcon from "../icons/map-pin-icon";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(expanded ? contentRef.current.scrollHeight : 0);
    }
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`flex-grow ml-6 rounded-xl p-6 shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700`}
    >
      <div className="cursor-pointer" onClick={toggleExpand}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h4 className="text-xl font-bold">{experience.title}</h4>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
            {experience.company}
          </div>
          <div className="hidden md:block text-muted-foreground">•</div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{experience.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{experience.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 3).map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                {skill}
              </Badge>
            ))}
            {experience.skills.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                +{experience.skills.length - 3}
              </Badge>
            )}
          </div>

          <div className={`text-blue-600 dark:text-blue-400`}>
            {expanded ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h5 className="font-semibold flex items-center mb-3">
            <AwardIcon
              className={`h-4 w-4 mr-2 text-blue-600 dark:text-blue-400`}
            />
            Key Achievements
          </h5>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <div
                  className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-100 dark:bg-blue-900/50`}
                >
                  <div
                    className={`h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400`}
                  ></div>
                </div>
                <ReactMarkdown>{achievement}</ReactMarkdown>
              </li>
            ))}
          </ul>

          {experience.skills.length > 3 && (
            <div className="mt-4">
              <h5 className="font-semibold mb-3">All Skills</h5>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
