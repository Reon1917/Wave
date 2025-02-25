import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockProjects, mockUsers } from "@/data/mock"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Plus } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">Manage your active projects and teams</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-muted-foreground">Progress</div>
                    <div className="font-medium">{project.progress}%</div>
                  </div>
                  <Progress value={project.progress} />
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Team Members</div>
                  <div className="flex -space-x-2">
                    {project.members.map((member) => (
                      <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-muted-foreground">Start Date</div>
                    <div className="font-medium">
                      {new Date(project.startDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">End Date</div>
                    <div className="font-medium">
                      {new Date(project.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <div className="text-muted-foreground">Tasks</div>
                    <div className="font-medium">{project.tasks.length} total</div>
                  </div>
                  <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    project.status === 'active' ? 'bg-green-100 text-green-800' :
                    project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
