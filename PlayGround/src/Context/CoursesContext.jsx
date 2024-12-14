import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const CoursesContext = ({ children }) => {
    var obj = [
        {
            "courseName": "Full-Stack Web Development Bootcamp",
            "duration": "12 weeks",
            "price": "$499",
            "description": "A comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more.",
            "level": "Beginner to Intermediate",
            "features": [
                "Project-based learning",
                "Certificate upon completion",
                "Access to mentors and community",
                "Flexible schedule"
            ]
        },
        {
            "courseName": "Frontend Web Development Mastery",
            "duration": "8 weeks",
            "price": "$349",
            "description": "Learn to build stunning user interfaces with HTML, CSS, and JavaScript.",
            "level": "Beginner",
            "features": [
                "Hands-on projects",
                "Focus on responsive design",
                "Lifetime access",
                "HTML, CSS, JavaScript basics"
            ]
        },
        {
            "courseName": "Advanced JavaScript for Developers",
            "duration": "6 weeks",
            "price": "$299",
            "description": "Master JavaScript concepts, including ES6, asynchronous programming, and advanced patterns.",
            "level": "Intermediate",
            "features": [
                "Deep dive into ES6+",
                "Interactive coding challenges",
                "Real-world projects",
                "Best practices for debugging"
            ]
        },
        {
            "courseName": "React and Redux Complete Guide",
            "duration": "10 weeks",
            "price": "$399",
            "description": "Learn to build dynamic web applications using React and state management with Redux.",
            "level": "Intermediate",
            "features": [
                "React fundamentals and hooks",
                "State management with Redux",
                "API integration",
                "Performance optimization tips"
            ]
        },
        {
            "courseName": "Node.js and Express.js Essentials",
            "duration": "7 weeks",
            "price": "$349",
            "description": "Understand backend development by building scalable web applications with Node.js and Express.",
            "level": "Intermediate",
            "features": [
                "Introduction to backend concepts",
                "Database integration with MongoDB",
                "API design principles",
                "Security and authentication"
            ]
        },
        {
            "courseName": "Web Development for Beginners",
            "duration": "5 weeks",
            "price": "$199",
            "description": "Kickstart your journey in web development with an easy-to-follow beginner course.",
            "level": "Beginner",
            "features": [
                "HTML, CSS basics",
                "Introduction to JavaScript",
                "Simple project to build a portfolio website",
                "Supportive learning community"
            ]
        },
        {
            "courseName": "CSS Animations and Transitions",
            "duration": "4 weeks",
            "price": "$149",
            "description": "Create engaging and interactive user interfaces with advanced CSS animations and transitions.",
            "level": "Beginner to Intermediate",
            "features": [
                "Learn keyframe animations",
                "Master transition effects",
                "Build animation-rich websites",
                "Practical examples included"
            ]
        },
        {
            "courseName": "TypeScript for Web Developers",
            "duration": "6 weeks",
            "price": "$249",
            "description": "Enhance your JavaScript skills with TypeScript to build scalable and maintainable web applications.",
            "level": "Intermediate",
            "features": [
                "TypeScript fundamentals",
                "Strongly typed programming",
                "Integration with React and Node.js",
                "Debugging and best practices"
            ]
        },
        {
            "courseName": "Build and Deploy with Next.js",
            "duration": "8 weeks",
            "price": "$399",
            "description": "Learn to create SEO-friendly and high-performance web apps using the Next.js framework.",
            "level": "Intermediate to Advanced",
            "features": [
                "Server-side rendering (SSR)",
                "Static site generation (SSG)",
                "API routes and integration",
                "Deploying on Vercel and other platforms"
            ]
        }
    ]

    const [username, SetUsername] = useState('User')
    const data = {
        obj,
        username,
        SetUsername
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default CoursesContext