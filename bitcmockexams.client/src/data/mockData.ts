import type { Service, MockExam, BlogPost, TeamMember, Testimonial, Stat, CompanyValue } from '../types';

export const services: Service[] = [
    {
        id: 1,
        title: 'Cloud Certification Training',
        description: 'Expert-led live training for AWS, Azure, and Google Cloud certifications.',
        icon: '☁️',
        features: ['Live Online Classes', 'Hands-on Labs', 'Expert Instructors', 'Flexible Schedule']
    },
    {
        id: 2,
        title: 'Mock Exams & Practice Tests',
        description: 'Comprehensive practice exams that simulate real certification tests.',
        icon: '📝',
        features: ['Real Exam Questions', 'Detailed Explanations', 'Performance Analytics', 'Unlimited Attempts']
    },
    {
        id: 3,
        title: 'Certification Guidance',
        description: 'Personalized roadmap and mentorship for your certification journey.',
        icon: '🎯',
        features: ['Career Counseling', 'Study Plans', 'Resource Recommendations', 'One-on-One Support']
    },
    {
        id: 4,
        title: 'Interview Preparation',
        description: 'Technical interview prep with real-world scenarios and questions.',
        icon: '💼',
        features: ['Mock Interviews', 'Technical Questions', 'Behavioral Prep', 'Resume Review']
    },
    {
        id: 5,
        title: 'Corporate Training',
        description: 'Customized training programs for teams and organizations.',
        icon: '🏢',
        features: ['Custom Curriculum', 'On-site/Remote', 'Team Assessments', 'Progress Tracking']
    },
    {
        id: 6,
        title: 'Technology Consulting',
        description: 'Strategic consulting for cloud migration and digital transformation.',
        icon: '🚀',
        features: ['Architecture Design', 'Migration Planning', 'Best Practices', 'Cost Optimization']
    }
];

export const mockExams: MockExam[] = [
    // Fundamentals
    {
        id: 1,
        title: 'Azure Fundamentals',
        code: 'AZ-900',
        vendor: 'Microsoft',
        category: 'Fundamentals',
        description: 'Master the basics',
        questions: 40,
        duration: 60,
        difficulty: 'Beginner',
        price: 19.99,
        rating: 4.8,
        students: 25000
    },
    {
        id: 2,
        title: 'Azure AI Fundamentals',
        code: 'AI-900',
        vendor: 'Microsoft',
        category: 'Fundamentals',
        description: 'Master the basics',
        questions: 40,
        duration: 60,
        difficulty: 'Beginner',
        price: 19.99,
        rating: 4.7,
        students: 18000
    },
    {
        id: 3,
        title: 'Azure Data Fundamentals',
        code: 'DP-900',
        vendor: 'Microsoft',
        category: 'Fundamentals',
        description: 'Master the basics',
        questions: 40,
        duration: 60,
        difficulty: 'Beginner',
        price: 19.99,
        rating: 4.8,
        students: 20000
    },
    {
        id: 4,
        title: 'Microsoft 365 Fundamentals',
        code: 'MS-900',
        vendor: 'Microsoft',
        category: 'Fundamentals',
        description: 'Master the basics',
        questions: 40,
        duration: 60,
        difficulty: 'Beginner',
        price: 19.99,
        rating: 4.6,
        students: 15000
    },
    // Role-Based
    {
        id: 5,
        title: 'Azure Administrator',
        code: 'AZ-104',
        vendor: 'Microsoft',
        category: 'Role-Based',
        description: 'Expand your technical skill set',
        questions: 60,
        duration: 120,
        difficulty: 'Intermediate',
        price: 29.99,
        rating: 4.9,
        students: 22000
    },
    {
        id: 6,
        title: 'Azure Developer',
        code: 'AZ-204',
        vendor: 'Microsoft',
        category: 'Role-Based',
        description: 'Expand your technical skill set',
        questions: 60,
        duration: 120,
        difficulty: 'Intermediate',
        price: 29.99,
        rating: 4.8,
        students: 18500
    },
    {
        id: 7,
        title: 'Azure Solution Architect Expert',
        code: 'AZ-305',
        vendor: 'Microsoft',
        category: 'Role-Based',
        description: 'Expand your technical skill set',
        questions: 60,
        duration: 120,
        difficulty: 'Advanced',
        price: 34.99,
        rating: 4.9,
        students: 16000
    },
    {
        id: 8,
        title: 'Microsoft DevOps Engineer',
        code: 'AZ-400',
        vendor: 'Microsoft',
        category: 'Role-Based',
        description: 'Expand your technical skill set',
        questions: 60,
        duration: 120,
        difficulty: 'Advanced',
        price: 34.99,
        rating: 4.8,
        students: 14500
    },
    // Speciality
    {
        id: 9,
        title: 'Azure for SAP Workloads',
        code: 'AZ-120',
        vendor: 'Microsoft',
        category: 'Speciality',
        description: 'Deepen your technical skills and manage industry solutions',
        questions: 50,
        duration: 120,
        difficulty: 'Advanced',
        price: 39.99,
        rating: 4.7,
        students: 8000
    },
    {
        id: 10,
        title: 'Azure Virtual Desktop',
        code: 'AZ-140',
        vendor: 'Microsoft',
        category: 'Speciality',
        description: 'Deepen your technical skills and manage industry solutions',
        questions: 50,
        duration: 120,
        difficulty: 'Advanced',
        price: 39.99,
        rating: 4.8,
        students: 9500
    },
    {
        id: 11,
        title: 'Azure Cosmos DB',
        code: 'DP-420',
        vendor: 'Microsoft',
        category: 'Speciality',
        description: 'Deepen your technical skills and manage industry solutions',
        questions: 50,
        duration: 120,
        difficulty: 'Advanced',
        price: 39.99,
        rating: 4.9,
        students: 7500
    }
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Top 10 Tips for Passing AWS Solutions Architect Exam',
        excerpt: 'Discover proven strategies and study techniques to ace your AWS certification on the first attempt.',
        category: 'Certification Tips',
        author: 'John Smith',
        date: '2024-11-20',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
        id: 2,
        title: 'Azure vs AWS: Which Cloud Platform Should You Choose?',
        excerpt: 'A comprehensive comparison of the two leading cloud platforms to help you make an informed decision.',
        category: 'Cloud Computing',
        author: 'Sarah Johnson',
        date: '2024-11-18',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
    },
    {
        id: 3,
        title: 'The Ultimate Guide to Kubernetes Certification',
        excerpt: 'Everything you need to know about CKA and CKAD certifications, from preparation to exam day.',
        category: 'DevOps',
        author: 'Michael Chen',
        date: '2024-11-15',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80'
    },
    {
        id: 4,
        title: 'Cloud Security Best Practices for 2024',
        excerpt: 'Essential security practices every cloud professional should implement to protect their infrastructure.',
        category: 'Security',
        author: 'Emily Davis',
        date: '2024-11-12',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
        id: 5,
        title: 'How to Build a Successful Career in Cloud Computing',
        excerpt: 'Career roadmap and advice for aspiring cloud professionals looking to break into the industry.',
        category: 'Career',
        author: 'David Wilson',
        date: '2024-11-10',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    {
        id: 6,
        title: 'Understanding Serverless Architecture',
        excerpt: 'A deep dive into serverless computing, its benefits, and when to use it in your projects.',
        category: 'Architecture',
        author: 'Lisa Anderson',
        date: '2024-11-08',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    }
];

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'John Smith',
        title: 'Founder & CEO',
        bio: '15+ years in cloud architecture and enterprise solutions. AWS & Azure certified.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        linkedin: '#'
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        title: 'Head of Training',
        bio: 'Certified instructor with 10+ years teaching cloud technologies to thousands of students.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        linkedin: '#'
    },
    {
        id: 3,
        name: 'Michael Chen',
        title: 'Lead Cloud Architect',
        bio: 'Expert in multi-cloud solutions and DevOps practices. Google Cloud and AWS certified.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        linkedin: '#'
    },
    {
        id: 4,
        name: 'Emily Davis',
        title: 'Security Specialist',
        bio: 'Cybersecurity expert specializing in cloud security and compliance frameworks.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        linkedin: '#'
    }
];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Robert Martinez',
        role: 'Cloud Engineer at Tech Corp',
        content: 'The mock exams were incredibly helpful! They closely mirrored the actual AWS exam and helped me pass on my first attempt.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
        id: 2,
        name: 'Jennifer Lee',
        role: 'DevOps Engineer',
        content: 'Excellent training program with knowledgeable instructors. The hands-on labs were particularly valuable.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
    },
    {
        id: 3,
        name: 'David Thompson',
        role: 'Solutions Architect',
        content: 'Best investment I made in my career. Passed three certifications with their guidance and practice tests.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'
    }
];

export const stats: Stat[] = [
    { label: 'Students Trained', value: '50,000+' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Certifications', value: '100+' },
    { label: 'Countries', value: '75+' }
];

export const companyValues: CompanyValue[] = [
    {
        id: 1,
        title: 'Excellence',
        description: 'We strive for excellence in everything we do, from course content to student support.',
        icon: '⭐'
    },
    {
        id: 2,
        title: 'Innovation',
        description: 'Continuously updating our content and methods to reflect the latest industry trends.',
        icon: '💡'
    },
    {
        id: 3,
        title: 'Integrity',
        description: 'We maintain the highest standards of honesty and ethical practices in all our operations.',
        icon: '🤝'
    },
    {
        id: 4,
        title: 'Student Success',
        description: 'Your success is our success. We are committed to helping you achieve your career goals.',
        icon: '🎓'
    }
];

// Test suite modules per exam title (suiteName)
export const suiteModules: Record<string, Array<{ id: number; title: string; description: string; questions: number; durationMins: number }>> = {
    'AI-102: DESIGNING AND IMPLEMENTING A MICROSOFT AZURE AI SOLUTION': [
        { id: 1, title: 'Plan and manage an Azure AI solution', description: 'Select the appropriate Azure AI service, Plan and configure security for Azure AI services, Create and manage an Azure AI service, Deploy Azure AI services, Create solutions to detect anomalies and improve content', questions: 55, durationMins: 60 },
        { id: 2, title: 'Implement image and video processing solutions', description: 'Analyze images, Extract text from images, Implement image classification and object detection by using the Custom Vision service, part of Azure Cognitive Services, Process videos', questions: 62, durationMins: 60 },
        { id: 3, title: 'Implement natural language processing solutions', description: 'Analyze text, Process speech, Translate language, Build and manage a language understanding model, Create a question answering solution', questions: 77, durationMins: 60 },
        { id: 4, title: 'Implement knowledge mining solutions', description: 'Implement a Cognitive Search solution, Apply AI enrichment skills to an indexer pipeline', questions: 28, durationMins: 60 },
        { id: 5, title: 'Implement conversational AI solutions', description: 'Design and implement conversation flow, Build a conversational bot, Test, publish, and maintain a conversational bot', questions: 76, durationMins: 60 },
    ],
    'Azure AI Fundamentals': [
        { id: 1, title: 'Describe Artificial Intelligence workloads and considerations', description: 'Identify features of common AI workloads | Identify guiding principles of responsible AI', questions: 61, durationMins: 60 },
        { id: 2, title: 'Describe Fundamental principles of machine learning on Azure', description: 'Identify common machine learning techniques | Core Machine learning Concepts', questions: 90, durationMins: 60 },
        { id: 3, title: 'Describe features of Natural Language Processing (NLP) workloads on Azure', description: 'Identify features of common NLP Workload Scenarios | Azure tools and services for NLP workloads', questions: 71, durationMins: 60 },
        { id: 4, title: 'Describe features of generative AI workloads on Azure', description: 'Identify features of generative AI solutions | Capabilities of Azure OpenAI Service', questions: 37, durationMins: 60 },
        { id: 5, title: 'Describe features of computer vision workloads on Azure', description: 'Identify common types of computer vision solution | Identify Azure tools and services for computer vision tasks', questions: 63, durationMins: 60 },
    ],
};

// Minimal stub for module-specific questions per suite
export const suiteQuestions: Record<string, Record<number, Array<{ id: number; domain: string; prompt: string; scenario?: string; options: { key: string; text: string }[]; correct: string; explanation?: string }>>> = {
    'Azure AI Fundamentals': {
        1: [
            {
                id: 1,
                domain: 'Identify common types of computer vision solution',
                prompt: 'Match the types of computer vision workloads to the following scenario.',
                scenario: 'Generate captions for images',
                options: [
                    { key: 'A', text: 'Image classification' },
                    { key: 'B', text: 'Object detection' },
                    { key: 'C', text: 'Optical character recognition (OCR)' },
                ],
                correct: 'A',
            },
        ],
        2: [],
        3: [],
        4: [],
        5: [],
    },
    'AI-102: DESIGNING AND IMPLEMENTING A MICROSOFT AZURE AI SOLUTION': {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    },
};
