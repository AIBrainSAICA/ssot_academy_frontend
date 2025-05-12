import Image from "next/image"
import { Video, Brain, Trophy, MessageSquare, Upload, Star, ArrowUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardNav from "@/components/dashboard-nav"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <DashboardNav />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Alex Johnson</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            Upload Training Video <Upload className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="ai-coach">AI Coach</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="feedback">Coach Feedback</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Training Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <ArrowUp className="h-3 w-3 mr-1" /> 12% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Skill Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Advanced</div>
                  <p className="text-xs text-gray-500 mt-1">Top 15% in your age group</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-gray-500 mt-1">2 new this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Leaderboard Rank</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">#12</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <ArrowUp className="h-3 w-3 mr-1" /> Up 3 positions
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Profile and Skills */}
            <div className="grid gap-6 md:grid-cols-6">
              {/* Profile Card */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Player Profile</CardTitle>
                  <CardDescription>Your personal information and team details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile picture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Alex Johnson</h3>
                    <p className="text-sm text-gray-500">Forward / Midfielder</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Age:</span>
                      <span className="font-medium">14</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Team:</span>
                      <span className="font-medium">Elite Academy U15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Joined:</span>
                      <span className="font-medium">March 2023</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Coach:</span>
                      <span className="font-medium">David Martinez</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Skill Performance</CardTitle>
                  <CardDescription>AI-analyzed skill metrics based on your training videos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Ball Control</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-gray-100" indicatorClassName="bg-red-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Passing Accuracy</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2 bg-gray-100" indicatorClassName="bg-red-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Shooting Power</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2 bg-gray-100" indicatorClassName="bg-red-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Speed & Agility</span>
                        <span className="text-sm font-medium">81%</span>
                      </div>
                      <Progress value={81} className="h-2 bg-gray-100" indicatorClassName="bg-red-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Game Awareness</span>
                        <span className="text-sm font-medium">73%</span>
                      </div>
                      <Progress value={73} className="h-2 bg-gray-100" indicatorClassName="bg-red-600" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div>
                      <h4 className="font-medium">Overall Rating</h4>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-current text-yellow-500" />
                        ))}
                        <Star className="h-4 w-4 fill-current text-yellow-500 text-opacity-50" />
                        <span className="ml-2 text-sm font-medium">4.2/5.0</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Full Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity and Achievements */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest training sessions and achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Video className="h-4 w-4 text-red-600" />,
                        title: "Training video analyzed",
                        description: "Passing drills - 15 min session",
                        time: "2 hours ago",
                      },
                      {
                        icon: <Brain className="h-4 w-4 text-purple-600" />,
                        title: "AI Coach recommendation",
                        description: "New training plan created",
                        time: "Yesterday",
                      },
                      {
                        icon: <Trophy className="h-4 w-4 text-yellow-500" />,
                        title: "Achievement unlocked",
                        description: "Perfect Passing - 95% accuracy",
                        time: "2 days ago",
                      },
                      {
                        icon: <MessageSquare className="h-4 w-4 text-blue-500" />,
                        title: "Coach feedback received",
                        description: "On your shooting technique video",
                        time: "3 days ago",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3 mt-0.5 rounded-full bg-gray-100 p-2">{item.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="mr-1 h-3 w-3" />
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Badges and milestones you've earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "Perfect Pass",
                        description: "90%+ passing accuracy",
                        icon: "🎯",
                        date: "Apr 10",
                      },
                      {
                        name: "Speed Demon",
                        description: "Top sprint speed",
                        icon: "⚡",
                        date: "Apr 5",
                      },
                      {
                        name: "Team Player",
                        description: "10+ assists",
                        icon: "🤝",
                        date: "Mar 28",
                      },
                      {
                        name: "Goal Machine",
                        description: "Score 5 goals",
                        icon: "⚽",
                        date: "Mar 22",
                      },
                      {
                        name: "Dedicated",
                        description: "20+ training sessions",
                        icon: "🏆",
                        date: "Mar 15",
                      },
                      {
                        name: "Improver",
                        description: "10% skill improvement",
                        icon: "📈",
                        date: "Mar 8",
                      },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-2 rounded-lg border bg-white"
                      >
                        <div className="text-2xl mb-1">{achievement.icon}</div>
                        <h4 className="text-sm font-medium">{achievement.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Training Tab */}
          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Training Analysis</CardTitle>
                <CardDescription>Upload your training videos for AI analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Upload Training Video</h3>
                  <p className="text-sm text-gray-500 mb-4">Drag and drop your video file here, or click to browse</p>
                  <Button className="bg-red-600 hover:bg-red-700">Select Video File</Button>
                  <p className="text-xs text-gray-400 mt-4">Supported formats: MP4, MOV, AVI (Max size: 500MB)</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Recent Training Videos</h3>

                  {[
                    {
                      title: "Shooting Practice - Apr 12",
                      duration: "12:45",
                      status: "Analyzed",
                      thumbnail: "/placeholder.svg?height=90&width=160",
                    },
                    {
                      title: "Dribbling Drills - Apr 8",
                      duration: "18:22",
                      status: "Analyzed",
                      thumbnail: "/placeholder.svg?height=90&width=160",
                    },
                    {
                      title: "Match Highlights - Apr 2",
                      duration: "24:10",
                      status: "Analyzed",
                      thumbnail: "/placeholder.svg?height=90&width=160",
                    },
                  ].map((video, index) => (
                    <div key={index} className="flex items-center p-4 border rounded-lg">
                      <div className="relative h-[90px] w-[160px] rounded overflow-hidden mr-4">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{video.title}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            {video.status}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Analysis
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Coach Tab */}
          <TabsContent value="ai-coach" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>AI Coach</CardTitle>
                  <CardDescription>Your personalized AI training assistant</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <div className="flex items-start mb-4">
                      <div className="mr-3 rounded-full bg-red-100 p-2">
                        <Brain className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">AI Coach</p>
                        <p className="text-sm text-gray-500">
                          Based on your recent training videos, here are some areas to focus on:
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pl-12">
                      <div>
                        <h4 className="font-medium text-sm">1. Passing Technique</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Your passing accuracy is good, but I noticed you could improve your body positioning. Try
                          keeping your non-kicking foot pointed toward your target.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">2. First Touch</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Your first touch could be more consistent. Practice cushioning the ball with different parts
                          of your foot to maintain better control.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">3. Recommended Drills</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          I've created a new training plan focusing on these areas. Would you like to see it?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-3">Ask AI Coach</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ask about training, techniques, or get motivation..."
                        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                      <Button className="bg-red-600 hover:bg-red-700">Send</Button>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {["How can I improve my shooting?", "Recommend drills for speed", "Tips for game day"].map(
                        (suggestion, index) => (
                          <Button key={index} variant="outline" size="sm" className="text-xs">
                            {suggestion}
                          </Button>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training Plan</CardTitle>
                  <CardDescription>AI-generated personalized plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm">This Week's Focus:</h3>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <h4 className="font-medium text-red-800">Passing & First Touch</h4>
                      <p className="text-xs text-red-700 mt-1">Based on your recent performance analysis</p>
                    </div>

                    <h3 className="font-medium text-sm pt-2">Recommended Sessions:</h3>
                    {[
                      {
                        day: "Monday",
                        focus: "Passing Technique",
                        duration: "45 min",
                      },
                      {
                        day: "Wednesday",
                        focus: "First Touch Control",
                        duration: "40 min",
                      },
                      {
                        day: "Friday",
                        focus: "Game Situations",
                        duration: "60 min",
                      },
                      {
                        day: "Saturday",
                        focus: "Match Application",
                        duration: "90 min",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex justify-between items-center p-2 border-b text-sm">
                        <div>
                          <p className="font-medium">{session.day}</p>
                          <p className="text-xs text-gray-500">{session.focus}</p>
                        </div>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded">{session.duration}</div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">View Complete Plan</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Feed</CardTitle>
                    <CardDescription>Training videos and updates from other players</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        user: "Marcus Wilson",
                        age: 15,
                        time: "2 hours ago",
                        content: "Just completed the advanced dribbling challenge! Check out my progress 🔥",
                        likes: 24,
                        comments: 8,
                        thumbnail: "/placeholder.svg?height=200&width=400",
                      },
                      {
                        user: "Sophia Chen",
                        age: 14,
                        time: "Yesterday",
                        content:
                          "New personal best on the shooting accuracy drill! The AI coach tips really helped improve my technique.",
                        likes: 32,
                        comments: 12,
                        thumbnail: "/placeholder.svg?height=200&width=400",
                      },
                    ].map((post, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                          <div>
                            <p className="font-medium">
                              {post.user} <span className="text-xs text-gray-500">({post.age})</span>
                            </p>
                            <p className="text-xs text-gray-500">{post.time}</p>
                          </div>
                        </div>
                        <p className="text-sm mb-3">{post.content}</p>
                        <div className="relative h-[200px] w-full rounded-lg overflow-hidden mb-3">
                          <Image
                            src={post.thumbnail || "/placeholder.svg"}
                            alt="Training video thumbnail"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                              <Video className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center text-sm text-gray-500 hover:text-red-600">
                              <Star className="h-4 w-4 mr-1" /> {post.likes}
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-red-600">
                              <MessageSquare className="h-4 w-4 mr-1" /> {post.comments}
                            </button>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Leaderboard</CardTitle>
                    <CardDescription>Top performers this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { rank: 1, name: "James Rodriguez", age: 15, points: 1250 },
                        { rank: 2, name: "Emma Thompson", age: 14, points: 1180 },
                        { rank: 3, name: "Lucas Silva", age: 15, points: 1120 },
                        { rank: 4, name: "Olivia Wang", age: 14, points: 1050 },
                        { rank: 5, name: "Noah Martinez", age: 15, points: 980 },
                      ].map((player, index) => (
                        <div
                          key={index}
                          className={`flex items-center p-2 rounded-lg ${player.rank <= 3 ? "bg-red-50" : ""}`}
                        >
                          <div
                            className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 text-xs font-bold ${
                              player.rank === 1
                                ? "bg-yellow-400 text-yellow-800"
                                : player.rank === 2
                                  ? "bg-gray-300 text-gray-700"
                                  : player.rank === 3
                                    ? "bg-amber-600 text-amber-900"
                                    : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {player.rank}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{player.name}</p>
                            <p className="text-xs text-gray-500">Age {player.age}</p>
                          </div>
                          <div className="text-sm font-medium">{player.points}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center p-2 bg-gray-50 rounded-lg">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center mr-3 text-xs font-bold bg-gray-100 text-gray-500">
                          12
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">You (Alex Johnson)</p>
                          <p className="text-xs text-gray-500">Age 14</p>
                        </div>
                        <div className="text-sm font-medium">820</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-4">
                      View Full Leaderboard
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trending Challenges</CardTitle>
                    <CardDescription>Popular training challenges</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      {
                        title: "Precision Passing",
                        participants: 128,
                        difficulty: "Intermediate",
                      },
                      {
                        title: "Shooting Accuracy",
                        participants: 95,
                        difficulty: "Advanced",
                      },
                      {
                        title: "Speed Dribbling",
                        participants: 76,
                        difficulty: "All Levels",
                      },
                    ].map((challenge, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <h4 className="font-medium text-sm">{challenge.title}</h4>
                        <div className="flex justify-between mt-1">
                          <p className="text-xs text-gray-500">{challenge.participants} participants</p>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100">{challenge.difficulty}</span>
                        </div>
                      </div>
                    ))}

                    <Button className="w-full bg-red-600 hover:bg-red-700 mt-2">Join a Challenge</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Coach Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Coach Feedback</CardTitle>
                <CardDescription>Professional feedback on your training videos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      coach: "Coach David Martinez",
                      date: "April 10, 2023",
                      video: "Shooting Practice - Apr 8",
                      feedback:
                        "Great improvement on your shooting technique, Alex! Your follow-through has improved significantly. Focus on planting your non-kicking foot more firmly next to the ball for better stability and power. Let's work on this in our next session.",
                      thumbnail: "/placeholder.svg?height=120&width=200",
                    },
                    {
                      coach: "Coach Sarah Williams",
                      date: "April 3, 2023",
                      video: "Dribbling Drills - Apr 1",
                      feedback:
                        "Your close control is looking much better. I like how you're keeping your head up while dribbling. Try to use the outside of your foot more to change direction quickly. This will help you beat defenders in 1v1 situations. Keep up the good work!",
                      thumbnail: "/placeholder.svg?height=120&width=200",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="relative h-[120px] w-[200px] rounded overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.video}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">{item.coach}</h4>
                            <span className="text-xs text-gray-500">{item.date}</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">Video: {item.video}</p>
                          <p className="text-sm">{item.feedback}</p>
                          <div className="flex gap-2 mt-3">
                            <Button variant="outline" size="sm">
                              Thank Coach
                            </Button>
                            <Button variant="outline" size="sm">
                              Ask Question
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Request Coach Feedback</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Select Video</label>
                      <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                        <option>Shooting Practice - Apr 12</option>
                        <option>Dribbling Drills - Apr 8</option>
                        <option>Match Highlights - Apr 2</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Select Coach</label>
                      <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                        <option>Coach David Martinez</option>
                        <option>Coach Sarah Williams</option>
                        <option>Coach Michael Johnson</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Specific Areas for Feedback (Optional)</label>
                    <textarea
                      className="w-full rounded-md border border-gray-300 px-3 py-2"
                      rows={3}
                      placeholder="Let your coach know if you want feedback on specific aspects of your performance..."
                    />
                  </div>
                  <Button className="mt-4 bg-red-600 hover:bg-red-700">Request Feedback</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
