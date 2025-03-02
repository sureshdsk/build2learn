
import { Code2, BookOpen, Users, Lightbulb, Github, Globe } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        About Build2Learn
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Building a community where developers learn through collaboration and hands-on projects.
                    </p>
                </div>

                <div className="space-y-12">
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="h-8 w-8 text-primary" />
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-lg leading-relaxed">
                                Build2Learn was founded with a simple yet powerful mission: to create a space where developers at all levels can learn by doing. We believe that the most effective way to master programming skills is through hands-on experience, collaboration, and community feedback.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Lightbulb className="h-8 w-8 text-primary" />
                            <h2 className="text-2xl font-bold">Our Philosophy</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-lg leading-relaxed mb-4">
                                At Build2Learn, we embrace these core principles:
                            </p>
                            <ul className="space-y-3 text-lg">
                                <li className="flex items-start gap-2">
                                    <Code2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span><strong>Learning by Building</strong>: Theory is important, but application is where true understanding happens.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span><strong>Community Support</strong>: We grow faster when we learn together and help each other overcome challenges.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Github className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span><strong>Open Source Mindset</strong>: Sharing knowledge and code makes everyone better.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span><strong>Inclusive Environment</strong>: Everyone, regardless of background or experience level, has something valuable to contribute.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="h-8 w-8 text-primary" />
                            <h2 className="text-2xl font-bold">Our Community</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-lg leading-relaxed">
                                Build2Learn brings together developers from diverse backgrounds – from beginners taking their first steps in coding to seasoned professionals looking to explore new technologies. Our community is united by a passion for continuous learning and a desire to build meaningful projects.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                By sharing projects, providing feedback, and collaborating, members not only improve their technical skills but also develop the soft skills essential for successful software development careers.
                            </p>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
                        <p className="text-lg mb-6">
                            Ready to learn, build, and grow with us? Sign up today and start sharing your projects!
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/auth/signup" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                Sign Up
                            </a>
                            <a href="/projects" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                Explore Projects
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}