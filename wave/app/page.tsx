import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockProjects, mockTasks, mockUsers } from "@/data/mock"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, CheckCircle2, Clock, Users, Folders } from "lucide-react"

export default function Home() {
  const totalTasks = mockTasks.length
  const completedTasks = mockTasks.filter(t => t.status === 'done').length
  const activeProjects = mockProjects.filter(p => p.status === 'active').length

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Folders className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              {mockProjects.length} total projects
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}/{totalTasks}</div>
            <Progress value={completedTasks/totalTasks * 100} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUsers.length}</div>
            <div className="flex -space-x-2 mt-2">
              {mockUsers.map((user) => (
                <Avatar key={user.id} className="h-8 w-8 border-2 border-background">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Deadline</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 10</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              User Research due
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {mockProjects.map(project => (
                <div key={project.id} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {project.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Progress value={project.progress} className="w-[80px]" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
            <CardDescription>
              {completedTasks} completed out of {totalTasks} total tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {mockTasks.map(task => (
                <div key={task.id} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {task.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Due {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      task.priority === 'critical' ? 'bg-red-100 text-red-700' :
                      task.priority === 'major' ? 'bg-orange-100 text-orange-700' :
                      task.priority === 'normal' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
