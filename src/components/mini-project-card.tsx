import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/content.config";
import ArrowUpRightIcon from "./icons/arrow-up-right-icon";

interface MiniProjectCardProps {
  project: Project;
}

export default function MiniProjectCard({ project }: MiniProjectCardProps) {
  const id = project.title.replace(" ", "-").toLowerCase();
  return (
    <div className="hover:-translate-y-2 transition-all">
      <a href={`/projects/${id}`}>
        <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
          <div className="relative h-32 flex items-center w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              width={962}
              height={364}
              alt={project.title}
              src={project.img[0] || "/placeholder.png"}
            />
          </div>
          <CardContent>
            <h3 className="text-xl font-bold mb-2 flex items-center justify-between group">
              {project.title}
              <ArrowUpRightIcon className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {project.shortDescription}
            </p>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
