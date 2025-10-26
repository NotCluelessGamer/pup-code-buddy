import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Play, CheckCircle, Lock, Clock, Award, ArrowLeft, ChevronRight, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState<string>('module-1');

  // Mock course data - would come from API/database
  const course = {
    id: courseId,
    title: 'DSA Fundamentals',
    description: 'Master the basics of data structures and algorithms with hands-on practice and real-world examples',
    level: 'Beginner',
    duration: '30 hours',
    totalLessons: 45,
    completedLessons: 12,
    progress: 27,
    rating: 4.8,
    students: 15420,
    instructor: 'Dr. Sarah Chen',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Data Structures',
        duration: '4 hours',
        lessons: [
          { id: 1, title: 'What are Data Structures?', duration: '15 min', completed: true, locked: false },
          { id: 2, title: 'Time and Space Complexity', duration: '20 min', completed: true, locked: false },
          { id: 3, title: 'Big O Notation', duration: '25 min', completed: true, locked: false },
          { id: 4, title: 'Practice Problems', duration: '30 min', completed: false, locked: false }
        ]
      },
      {
        id: 'module-2',
        title: 'Arrays and Strings',
        duration: '6 hours',
        lessons: [
          { id: 5, title: 'Array Basics', duration: '20 min', completed: true, locked: false },
          { id: 6, title: 'Dynamic Arrays', duration: '25 min', completed: true, locked: false },
          { id: 7, title: 'Two Pointer Technique', duration: '30 min', completed: false, locked: false },
          { id: 8, title: 'Sliding Window', duration: '35 min', completed: false, locked: false },
          { id: 9, title: 'String Manipulation', duration: '25 min', completed: false, locked: false },
          { id: 10, title: 'Array Problems - Easy', duration: '40 min', completed: false, locked: false },
          { id: 11, title: 'Array Problems - Medium', duration: '45 min', completed: false, locked: false }
        ]
      },
      {
        id: 'module-3',
        title: 'Linked Lists',
        duration: '5 hours',
        lessons: [
          { id: 12, title: 'Introduction to Linked Lists', duration: '20 min', completed: false, locked: false },
          { id: 13, title: 'Singly Linked Lists', duration: '30 min', completed: false, locked: false },
          { id: 14, title: 'Doubly Linked Lists', duration: '30 min', completed: false, locked: false },
          { id: 15, title: 'Circular Linked Lists', duration: '25 min', completed: false, locked: false },
          { id: 16, title: 'Common Operations', duration: '35 min', completed: false, locked: false },
          { id: 17, title: 'Linked List Problems', duration: '40 min', completed: false, locked: false }
        ]
      },
      {
        id: 'module-4',
        title: 'Stacks and Queues',
        duration: '5 hours',
        lessons: [
          { id: 18, title: 'Stack Implementation', duration: '25 min', completed: false, locked: true },
          { id: 19, title: 'Queue Implementation', duration: '25 min', completed: false, locked: true },
          { id: 20, title: 'Priority Queues', duration: '30 min', completed: false, locked: true },
          { id: 21, title: 'Deque', duration: '20 min', completed: false, locked: true },
          { id: 22, title: 'Applications', duration: '35 min', completed: false, locked: true }
        ]
      }
    ]
  };

  const handleStartLesson = (lessonId: number, locked: boolean) => {
    if (!locked) {
      navigate(`/lesson/${courseId}/${lessonId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/courses')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">LearnToDo</span>
              </div>
            </div>
            <Button onClick={() => navigate('/profile')}>My Profile</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <Badge className="w-fit mb-2">{course.level}</Badge>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Your Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">Lessons</span>
                    </div>
                    <span className="font-medium">{course.totalLessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">Rating</span>
                    </div>
                    <span className="font-medium">{course.rating} ⭐</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full mt-4" size="lg" onClick={() => handleStartLesson(4, false)}>
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Course Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Course Content</CardTitle>
                <CardDescription>
                  {course.modules.length} modules • {course.totalLessons} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible value={expandedModule} onValueChange={setExpandedModule}>
                  {course.modules.map((module, moduleIndex) => {
                    const completedCount = module.lessons.filter(l => l.completed).length;
                    const moduleProgress = (completedCount / module.lessons.length) * 100;

                    return (
                      <AccordionItem key={module.id} value={module.id}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-4 flex-1 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">{moduleIndex + 1}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold mb-1">{module.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{module.duration}</span>
                                <span>{completedCount}/{module.lessons.length} completed</span>
                              </div>
                              {moduleProgress > 0 && (
                                <Progress value={moduleProgress} className="h-1 mt-2" />
                              )}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2 pl-12">
                            {module.lessons.map((lesson) => (
                              <button
                                key={lesson.id}
                                onClick={() => handleStartLesson(lesson.id, lesson.locked)}
                                disabled={lesson.locked}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                                  lesson.locked
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-muted cursor-pointer hover:translate-x-1'
                                } ${lesson.completed ? 'bg-success/5' : ''}`}
                              >
                                <div className="flex-shrink-0">
                                  {lesson.locked ? (
                                    <Lock className="w-5 h-5 text-muted-foreground" />
                                  ) : lesson.completed ? (
                                    <CheckCircle className="w-5 h-5 text-success" />
                                  ) : (
                                    <Play className="w-5 h-5 text-primary" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className={`font-medium ${lesson.completed ? 'text-success' : ''}`}>
                                    {lesson.title}
                                  </p>
                                  <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                                </div>
                                {!lesson.locked && (
                                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                              </button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Understand fundamental data structures and their use cases',
                    'Analyze time and space complexity of algorithms',
                    'Implement arrays, linked lists, stacks, and queues',
                    'Master common problem-solving patterns',
                    'Solve 100+ practice problems with detailed explanations',
                    'Prepare for technical interviews confidently'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
