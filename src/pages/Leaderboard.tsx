import { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp, BookOpen, Flame, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'alltime'>('weekly');

  const leaderboardData = [
    { rank: 1, name: 'Sarah Chen', points: 8420, streak: 45, coursesCompleted: 12, avatar: '', level: 15 },
    { rank: 2, name: 'Michael Torres', points: 7850, streak: 38, coursesCompleted: 10, avatar: '', level: 14 },
    { rank: 3, name: 'Emma Wilson', points: 7320, streak: 42, coursesCompleted: 11, avatar: '', level: 13 },
    { rank: 4, name: 'James Park', points: 6890, streak: 28, coursesCompleted: 9, avatar: '', level: 12 },
    { rank: 5, name: 'Lisa Anderson', points: 6450, streak: 35, coursesCompleted: 8, avatar: '', level: 12 },
    { rank: 6, name: 'David Kim', points: 5980, streak: 21, coursesCompleted: 7, avatar: '', level: 11 },
    { rank: 7, name: 'Anna Martinez', points: 5540, streak: 30, coursesCompleted: 7, avatar: '', level: 10 },
    { rank: 8, name: 'Robert Lee', points: 5120, streak: 18, coursesCompleted: 6, avatar: '', level: 10 },
    { rank: 9, name: 'Jessica Brown', points: 4890, streak: 25, coursesCompleted: 6, avatar: '', level: 9 },
    { rank: 10, name: 'Chris Taylor', points: 4560, streak: 22, coursesCompleted: 5, avatar: '', level: 9 }
  ];

  const topStreaks = [
    { name: 'Sarah Chen', streak: 45, avatar: '' },
    { name: 'Emma Wilson', streak: 42, avatar: '' },
    { name: 'Michael Torres', streak: 38, avatar: '' },
    { name: 'Lisa Anderson', streak: 35, avatar: '' },
    { name: 'Anna Martinez', streak: 30, avatar: '' }
  ];

  const topLearners = [
    { name: 'Sarah Chen', courses: 12, avatar: '' },
    { name: 'Emma Wilson', courses: 11, avatar: '' },
    { name: 'Michael Torres', courses: 10, avatar: '' },
    { name: 'James Park', courses: 9, avatar: '' },
    { name: 'Lisa Anderson', courses: 8, avatar: '' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-warning" />;
      case 2:
        return <Medal className="w-6 h-6 text-muted-foreground" />;
      case 3:
        return <Medal className="w-6 h-6 text-warning/60" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">{rank}</div>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-warning/20 to-warning/10 border-warning/30';
      case 2:
        return 'bg-gradient-to-r from-muted to-muted/50 border-muted-foreground/20';
      case 3:
        return 'bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20';
      default:
        return 'bg-card';
    }
  };

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
              <Button onClick={() => navigate('/profile')}>My Profile</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Leaderboard</h1>
          <p className="text-xl text-muted-foreground">Compete with learners worldwide and climb the ranks</p>
        </div>

        {/* Timeframe Tabs */}
        <div className="flex justify-center mb-8">
          <Tabs value={timeframe} onValueChange={(value) => setTimeframe(value as typeof timeframe)} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="alltime">All Time</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Top Performers
                </CardTitle>
                <CardDescription>Based on total points earned</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboardData.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:shadow-md cursor-pointer ${getRankColor(user.rank)} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0">
                      {getRankIcon(user.rank)}
                    </div>

                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate">{user.name}</h3>
                        <Badge variant="outline" className="text-xs">Lvl {user.level}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          {user.points} pts
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="w-3 h-3 text-warning" />
                          {user.streak}d
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {user.coursesCompleted}
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right">
                      <div className="text-2xl font-bold text-primary">{user.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Side Stats */}
          <div className="space-y-6">
            {/* Top Streaks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-warning" />
                  Hottest Streaks
                </CardTitle>
                <CardDescription>Longest learning streaks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {topStreaks.map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-warning/20 text-warning-foreground text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{user.name}</p>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-warning">
                      <Flame className="w-4 h-4" />
                      {user.streak}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Course Completers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Most Courses Completed
                </CardTitle>
                <CardDescription>Achievement leaders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {topLearners.map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-accent/20 text-accent-foreground text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{user.name}</p>
                    </div>
                    <Badge variant="secondary">{user.courses}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Your Rank Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Your Ranking</CardTitle>
                <CardDescription>Keep learning to climb higher!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Rank</span>
                  <div className="text-3xl font-bold text-primary">#42</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Points</span>
                  <div className="text-xl font-semibold">2,450</div>
                </div>
                <Button className="w-full" onClick={() => navigate('/courses')}>
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
