import type { Education } from "@/content.config";
import { format, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import BookOpenIcon from "../icons/book-open-icon";
import CalendarIcon from "../icons/calendar-icon";
import ChevronDownIcon from "../icons/chevron-down-icon";
import ChevronUpIcon from "../icons/chevron-up-icon";
import GraduationCapIcon from "../icons/graduation-cap-icon";
import MapPinIcon from "../icons/map-pin-icon";

export default function EducationCard({ education }: { education: Education }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(expanded ? contentRef.current.scrollHeight : 0);
    }
  }, [expanded]);

  const toggleExpand = (id: number) => {
    setExpanded((prev) => !prev);
  };

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    try {
      return format(parseISO(`${dateString}-01`), "MMM yyyy");
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div
      key={education.id}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl p-6 border border-blue-100 dark:border-blue-900 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center border-2 dark:border-blue-900 border-slate-900 overflow-hidden">
            {education.logo ? (
              <img src={education.logo}></img>
            ) : (
              <GraduationCapIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            )}
          </div>
        </div>

        <div className="flex-grow">
          <div
            className="cursor-pointer"
            onClick={() => toggleExpand(education.id)}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-bold">{education.degree}</h4>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>
                  {formatDate(education.startDate)} -{" "}
                  {formatDate(education.endDate)}
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                {education.institution}
              </div>
              <div className="hidden md:block text-muted-foreground">•</div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>{education.location}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              {education.description}
            </p>

            <div className="flex justify-end">
              <div className="text-blue-600 dark:text-blue-400">
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
            <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold flex items-center mb-3">
                    <BookOpenIcon className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    Relevant Courses
                  </h5>
                  <ul className="space-y-2">
                    {education.courses.map((course, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                        </div>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Achievements</h5>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                        </div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
