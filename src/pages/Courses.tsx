import { useState } from 'react';
import { BookOpen, Code, Database, Brain, Trophy, Search, Filter, ArrowRight, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 'dsa-basics',
      title: 'DSA Fundamentals',
      category: 'dsa',
      icon: <Brain className="w-6 h-6" />,
      description: 'Master the basics of data structures and algorithms',
      modules: 12,
      lessons: 45,
      duration: '30 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 15420,
      progress: 0,
      color: 'primary',
      topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues']
    },
    {
      id: 'dsa-advanced',
      title: 'Advanced Algorithms',
      category: 'dsa',
      icon: <Brain className="w-6 h-6" />,
      description: 'Deep dive into complex algorithms and problem-solving',
      modules: 18,
      lessons: 72,
      duration: '50 hours',
      level: 'Advanced',
      rating: 4.9,
      students: 8320,
      progress: 0,
      color: 'primary',
      topics: ['Dynamic Programming', 'Graph Algorithms', 'Greedy', 'Backtracking']
    },
    {
      id: 'web-frontend',
      title: 'Modern Frontend Development',
      category: 'webdev',
      icon: <Code className="w-6 h-6" />,
      description: 'Build responsive web apps with React and TypeScript',
      modules: 15,
      lessons: 60,
      duration: '40 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: 12540,
      progress: 0,
      color: 'accent',
      topics: ['React', 'TypeScript', 'Tailwind CSS', 'State Management']
    },
    {
      id: 'web-backend',
      title: 'Backend Development',
      category: 'webdev',
      icon: <Code className="w-6 h-6" />,
      description: 'Create scalable APIs with Node.js and databases',
      modules: 14,
      lessons: 55,
      duration: '35 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: 9870,
      progress: 0,
      color: 'accent',
      topics: ['Node.js', 'Express', 'REST APIs', 'Authentication']
    },
    {
      id: 'sql-basics',
      title: 'SQL Mastery',
      category: 'database',
      icon: <Database className="w-6 h-6" />,
      description: 'Master SQL queries and database design',
      modules: 10,
      lessons: 40,
      duration: '25 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 11200,
      progress: 0,
      color: 'warning',
      topics: ['SQL Queries', 'Joins', 'Indexing', 'Normalization']
    },
    {
      id: 'nosql-db',
      title: 'NoSQL Databases',
      category: 'database',
      icon: <Database className="w-6 h-6" />,
      description: 'Explore MongoDB, Redis, and modern databases',
      modules: 8,
      lessons: 32,
      duration: '20 hours',
      level: 'Intermediate',
      rating: 4.5,
      students: 6540,
      progress: 0,
      color: 'warning',
      topics: ['MongoDB', 'Redis', 'Document DBs', 'Caching']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Courses', count: courses.length },
    { id: 'dsa', label: 'DSA', count: courses.filter(c => c.category === 'dsa').length },
    { id: 'webdev', label: 'Web Dev', count: courses.filter(c => c.category === 'webdev').length },
    { id: 'database', label: 'Database', count: courses.filter(c => c.category === 'database').length }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Button variant="ghost" onClick={() => navigate('/leaderboard')}>Leaderboard</Button>
              <Button onClick={() => navigate('/profile')}>My Profile</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Explore Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated selection of courses designed to help you master new skills
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              {categories.map(cat => (
                <TabsTrigger key={cat.id} value={cat.id} className="relative">
                  {cat.label}
                  <Badge variant="secondary" className="ml-1 text-xs">{cat.count}</Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => navigate(`/course/${course.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${course.color}/10 flex items-center justify-center text-${course.color}`}>
                    {course.icon}
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {course.topics.slice(0, 3).map((topic, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>

                  {course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No courses found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
