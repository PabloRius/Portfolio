"use client";

import type { Experience } from "@/content.config";
import BriefcaseIcon from "../icons/briefcase-icon";
import ExperienceCard from "./card";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Work Experience</h3>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-200 to-amber-200 dark:from-blue-900 dark:via-blue-900 dark:to-amber-900"></div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative">
              <div className="flex">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 bg-blue-100 dark:bg-blue-900 overflow-hidden  `}
                  >
                    {experience.logo ? (
                      <img src={experience.logo} />
                    ) : (
                      <BriefcaseIcon
                        className={`h-6 w-6 text-blue-600 dark:text-blue-400`}
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
