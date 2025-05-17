"use client";

import type { Education } from "@/content.config";
import EducationCard from "./card";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Education</h3>

      <div className="grid grid-cols-1 gap-6">
        {education.map((edu) => (
          <EducationCard education={edu} />
        ))}
      </div>
    </div>
  );
}
