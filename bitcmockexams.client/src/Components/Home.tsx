import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaCloud,
    FaCertificate,
    FaChalkboardTeacher,
    FaUsers,
    FaArrowRight,
    FaCheckCircle
} from 'react-icons/fa';

import Button from './Button';
import './Home.css';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Home: React.FC = () => {
    const services: Service[] = [
        {
            icon: <FaCloud />,
            title: 'Azure Training',
            description: 'Comprehensive Azure cloud training programs designed for all skill levels, from beginners to advanced professionals.'
        },
        {
            icon: <FaCertificate />,
            title: 'Certification Guidance',
            description: 'Expert guidance to help you prepare for and pass Azure certification exams with confidence.'
        },
        {
            icon: <FaChalkboardTeacher />,
            title: 'Live Online Classes',
            description: 'Interactive live sessions with experienced instructors, real-world scenarios, and hands-on labs.'
        },
        {
            icon: <FaUsers />,
            title: 'Corporate Training',
            description: 'Customized training solutions for organizations looking to upskill their teams in Azure technologies.'
        }
    ];

    const features: string[] = [
        'Expert-led training programs',
        '100+ hours of content',
        'Hands-on lab exercises',
        'Mock exams and practice tests',
        'Lifetime access to materials',
        'Certificate of completion'
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container">
                    <div className="hero-content fade-in">
                        <h1 className="hero-title">
                            Master Azure Cloud with <span className="hero-highlight">Expert Training</span>
                        </h1>
                        <p className="hero-subtitle">
                            Your complete guide to Azure certification and cloud excellence.
                            Join thousands of professionals who have transformed their careers with our comprehensive training programs.
                        </p>
                        <div className="hero-buttons">
                            <Button size="large" icon={<FaArrowRight />}>
                                <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Explore Courses
                                </Link>
                            </Button>

                            <Button variant="outline" size="large">
                                <Link to="/mock-exams" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Try Mock Exams
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Services</h2>
                        <p className="section-description">
                            Comprehensive Azure training and consulting services to accelerate your cloud journey
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="primary" size="large">
                            <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>
                                View All Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-section">
                <div className="container">
                    <div className="why-content">
                        <div className="why-text">
                            <h2>Why Choose AzureA2Z?</h2>
                            <p className="why-description">
                                We provide industry-leading Azure training with a proven track record of success.
                                Our comprehensive approach ensures you gain practical skills and certification readiness.
                            </p>

                            <ul className="features-list">
                                {features.map((feature, index) => (
                                    <li key={index}>
                                        <FaCheckCircle className="feature-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="primary" size="large">
                                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Learn More About Us
                                </Link>
                            </Button>
                        </div>

                        <div className="why-image">
                            <div className="stats-card">
                                <div className="stat">
                                    <h3>5000+</h3>
                                    <p>Students Trained</p>
                                </div>
                                <div className="stat">
                                    <h3>95%</h3>
                                    <p>Success Rate</p>
                                </div>
                                <div className="stat">
                                    <h3>50+</h3>
                                    <p>Corporate Clients</p>
                                </div>
                                <div className="stat">
                                    <h3>100+</h3>
                                    <p>Hours of Content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content text-center">
                        <h2>Ready to Start Your Azure Journey?</h2>
                        <p>Join our community of successful Azure professionals today</p>

                        <div className="cta-buttons">
                            <Button variant="primary" size="large">
                                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Get Started Now
                                </Link>
                            </Button>

                            <Button variant="outline" size="large">
                                <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Read Our Blog
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
