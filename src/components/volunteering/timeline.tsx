"use client";

import type { Experience } from "@/content.config";
import HeartIcon from "../icons/heart-icon";
import VolunteeringCard from "./card";

interface VolunteeringTimelineProps {
  experiences: Experience[];
}

export default function VolunteeringTimeline({
  experiences,
}: VolunteeringTimelineProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Volunteering & Community</h3>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-900"></div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative">
              <div className="flex">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 bg-green-100 dark:bg-green-900 overflow-hidden  `}
                  >
                    {experience.logo ? (
                      <img src={experience.logo} />
                    ) : (
                      <HeartIcon
                        className={`h-6 w-6 text-green-600 dark:text-green-400`}
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <VolunteeringCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
