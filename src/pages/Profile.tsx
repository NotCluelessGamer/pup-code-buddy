import { useState } from 'react';
import { BookOpen, Trophy, Flame, Target, Calendar, Award, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  const userData = {
    name: 'Alex Johnson',
    email: 'alex@learntodo.com',
    avatar: '',
    joinDate: 'January 2025',
    totalPoints: 2450,
    currentStreak: 7,
    longestStreak: 12,
    coursesCompleted: 3,
    coursesInProgress: 4,
    rank: 42,
    level: 8
  };

  const badges = [
    { id: 1, name: 'First Steps', description: 'Complete your first lesson', icon: '🎯', earned: true },
    { id: 2, name: 'Week Warrior', description: '7-day learning streak', icon: '🔥', earned: true },
    { id: 3, name: 'Fast Learner', description: 'Complete 5 lessons in a day', icon: '⚡', earned: true },
    { id: 4, name: 'Night Owl', description: 'Learn after 10 PM', icon: '🦉', earned: true },
    { id: 5, name: 'Century Club', description: 'Complete 100 lessons', icon: '💯', earned: false },
    { id: 6, name: 'Master Mind', description: 'Complete advanced course', icon: '🧠', earned: false }
  ];

  const recentActivity = [
    { date: '2 hours ago', action: 'Completed', item: 'Binary Search Trees', points: 50 },
    { date: '1 day ago', action: 'Started', item: 'Graph Algorithms', points: 0 },
    { date: '2 days ago', action: 'Completed', item: 'Dynamic Programming Basics', points: 75 },
    { date: '3 days ago', action: 'Earned Badge', item: 'Week Warrior', points: 100 }
  ];

  const coursesInProgress = [
    { id: 1, name: 'Advanced Algorithms', progress: 65, modules: 18, completedModules: 12 },
    { id: 2, name: 'Modern Frontend', progress: 40, modules: 15, completedModules: 6 },
    { id: 3, name: 'SQL Mastery', progress: 80, modules: 10, completedModules: 8 },
    { id: 4, name: 'Backend Development', progress: 25, modules: 14, completedModules: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">LearnToDo</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/courses')}>Courses</Button>
              <Button variant="ghost" onClick={() => navigate('/leaderboard')}>Leaderboard</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-primary to-accent"></div>
          <CardContent className="relative pt-0">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16">
              <Avatar className="w-32 h-32 border-4 border-background">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{userData.name}</h1>
                    <p className="text-muted-foreground">{userData.email}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Edit Profile</Button>
                    <Button>Settings</Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Joined</span>
                    <span className="font-medium">{userData.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Rank</span>
                    <span className="font-medium">#{userData.rank}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Level</span>
                    <span className="font-medium">{userData.level}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{userData.totalPoints}</div>
                <Trophy className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">{userData.currentStreak}</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <Flame className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">{userData.coursesCompleted}</div>
                  <div className="text-xs text-muted-foreground">courses</div>
                </div>
                <Award className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">{userData.coursesInProgress}</div>
                  <div className="text-xs text-muted-foreground">courses</div>
                </div>
                <BookOpen className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Courses in Progress</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {coursesInProgress.map(course => (
                  <div key={course.id} className="p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer" onClick={() => navigate(`/course/${course.id}`)}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{course.name}</h3>
                      <Badge variant="secondary">{course.completedModules}/{course.modules} modules</Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress value={course.progress} />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{course.progress}% complete</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievement Badges</CardTitle>
                <CardDescription>Earn badges by completing challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badges.map(badge => (
                    <div 
                      key={badge.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        badge.earned 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted bg-muted/20 opacity-60'
                      }`}
                    >
                      <div className="text-4xl mb-2">{badge.icon}</div>
                      <h3 className="font-semibold mb-1">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                      {badge.earned && (
                        <Badge className="mt-2" variant="secondary">Earned</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning journey timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{activity.action} {activity.item}</span>
                          {activity.points > 0 && (
                            <Badge variant="secondary">+{activity.points} pts</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
