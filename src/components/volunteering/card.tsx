import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/content.config";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import CalendarIcon from "../icons/calendar-icon";
import ChevronDownIcon from "../icons/chevron-down-icon";
import ChevronUpIcon from "../icons/chevron-up-icon";
import MapPinIcon from "../icons/map-pin-icon";
import SparklesIcon from "../icons/sparkles-icon";

export default function VolunteeringCard({
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
      className={`flex-grow ml-6 rounded-xl p-6 shadow-sm bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900`}
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
          <div className="text-lg font-medium text-green-600 dark:text-green-400">
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
                className="bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/50 dark:hover:bg-green-900 dark:text-green-100"
              >
                {skill}
              </Badge>
            ))}
            {experience.skills.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/50 dark:hover:bg-green-900 dark:text-green-100"
              >
                +{experience.skills.length - 3}
              </Badge>
            )}
          </div>

          <div className={`text-green-600 dark:text-green-400`}>
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
            <SparklesIcon
              className={`h-4 w-4 mr-2 text-green-600 dark:text-green-400`}
            />
            Impact & Contributions
          </h5>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <div
                  className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-green-100 dark:bg-green-900/50`}
                >
                  <div
                    className={`h-2 w-2 rounded-full bg-green-600 dark:bg-green-400`}
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
                    className="bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/50 dark:hover:bg-green-900 dark:text-green-100"
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
