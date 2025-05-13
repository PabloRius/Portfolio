import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/content.config";
import ArrowUpRightIcon from "./icons/arrow-up-right-icon";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const id = project.title.replace(" ", "-").toLowerCase();
  return (
    <div className="hover:-translate-y-2 transition-all">
      <a href={`/projects/${id}`}>
        <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
          <div className="relative flex items-center h-auto w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              alt={project.title}
              src={project.img[0] || "/placeholder.png"}
              className="w-full h-auto max-w-full"
            />
            <div className="absolute bottom-3 left-3 z-20 flex gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-black/70 text-white hover:bg-black/80 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-black/70 text-white hover:bg-black/80 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  +{project.stack.length - 3}
                </Badge>
              )}
            </div>
          </div>
          <CardContent className="p-6">
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
