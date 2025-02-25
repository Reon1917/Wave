import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockTeams, mockUsers, mockProjects } from "@/data/mock"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Users } from "lucide-react"

export default function TeamsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teams</h2>
          <p className="text-muted-foreground">Manage your teams and their projects</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Team
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockTeams.map((team) => {
          const teamProjects = mockProjects.filter(p => team.projects.includes(p.id))
          const teamMembers = team.members.map(m => mockUsers.find(u => u.id === m.userId)!)

          return (
            <Card key={team.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{team.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {team.members.length}
                    </span>
                  </div>
                </div>
                <CardDescription>{team.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Team Members</h3>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center space-x-2 rounded-full bg-secondary px-2 py-1"
                        >
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex items-center text-sm">
                            <span>{member.name}</span>
                            {team.members.find(m => m.userId === member.id)?.role === 'team_leader' && (
                              <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
                                Lead
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Active Projects</h3>
                    <div className="space-y-2">
                      {teamProjects.map((project) => (
                        <div
                          key={project.id}
                          className="flex items-center justify-between rounded-lg border p-2"
                        >
                          <div>
                            <div className="font-medium">{project.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {project.tasks.length} tasks
                            </div>
                          </div>
                          <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            project.status === 'active' ? 'bg-green-100 text-green-800' :
                            project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.progress}% Complete
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
