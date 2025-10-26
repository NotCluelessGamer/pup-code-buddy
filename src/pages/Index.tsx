import { useState } from 'react';
import { BookOpen, Trophy, Users, Zap, ArrowRight, CheckCircle, Target, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      icon: <Target className="w-10 h-10" />,
      description: 'Master DSA from basics to advanced with 450+ problems',
      lessons: 180,
      duration: '150+ hours',
      level: 'Beginner to Advanced',
      color: 'bg-primary/10 hover:bg-primary/20',
      iconColor: 'text-primary'
    },
    {
      id: 'webdev',
      title: 'Web Development',
      icon: <BookOpen className="w-10 h-10" />,
      description: 'Build modern web apps with React, Node.js, and more',
      lessons: 120,
      duration: '100+ hours',
      level: 'Beginner Friendly',
      color: 'bg-accent/10 hover:bg-accent/20',
      iconColor: 'text-accent'
    },
    {
      id: 'database',
      title: 'Database Systems',
      icon: <Trophy className="w-10 h-10" />,
      description: 'Learn SQL, NoSQL, and database design patterns',
      lessons: 80,
      duration: '60+ hours',
      level: 'Intermediate',
      color: 'bg-warning/10 hover:bg-warning/20',
      iconColor: 'text-warning'
    },
    {
      id: 'aiml',
      title: 'AI & Machine Learning',
      icon: <Zap className="w-10 h-10" />,
      description: 'Dive into AI, ML algorithms, and neural networks',
      lessons: 150,
      duration: '120+ hours',
      level: 'Advanced',
      color: 'bg-destructive/10 hover:bg-destructive/20',
      iconColor: 'text-destructive'
    }
  ];

  const features = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Gamification',
      description: 'Earn badges, maintain streaks, and compete on leaderboards'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Interactive Lessons',
      description: 'Learn by doing with hands-on exercises and real projects'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Connect with learners worldwide and grow together'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Assistance',
      description: 'Get instant help from our AI-powered learning assistant'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Learners' },
    { value: '500+', label: 'Lessons' },
    { value: '50+', label: 'Achievements' },
    { value: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="mx-auto px-6 py-2 text-sm" variant="secondary">
              <Zap className="w-4 h-4 mr-2" />
              Transform Your Learning Journey
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Master Skills Through
              <span className="block text-primary mt-2">Interactive Learning</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              LearnToDo combines gamification with structured courses to help you achieve your learning goals faster and more effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 py-6 group" onClick={() => navigate('/courses')}>
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => navigate('/about')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Learning Paths</h2>
            <p className="text-xl text-muted-foreground">Choose your track and start mastering new skills today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={course.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  hoveredCourse === course.id ? 'border-primary' : ''
                } animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                onClick={() => navigate('/courses')}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredCourse === course.id ? 'scale-110' : ''
                  }`}>
                    <div className={course.iconColor}>{course.icon}</div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.lessons} Lessons
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <Button className="w-full group" variant="outline">
                    Explore Course
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LearnToDo?</h2>
            <p className="text-xl text-muted-foreground">Everything you need to succeed in your learning journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of learners who are mastering new skills every day with LearnToDo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => navigate('/courses')}>
              Browse Courses
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Leaderboard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">LearnToDo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Master productivity through learning</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 LearnToDo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
