import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'AMRITHA P',
    wordmark: 'AMRITHA P',
    greeting: "HELLO, I'M AMRITHA",
    headline: 'Computer Science Student',
    mainHeading: 'Building ideas into meaningful technology.',
    shortBio: 'An enthusiastic Computer Science student passionate about programming, problem-solving and technology-driven innovation.',
    college: 'Amal Jyothi College of Engineering',
    degree: 'B.Tech Computer Science Engineering',
    email: 'amritaprathibha@gmail.com',
    location: 'Kerala, India',
    resumeUrl: '/resume.pdf',
    // Set hasResume to true once the real resume is uploaded into public/resume.pdf
    hasResume: false,
    // Provide a valid image path (e.g. '/profile.jpg') when available; otherwise the elegant monogram placeholder is used
    profilePhotoUrl: '',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    heading: 'A Little About Me',
    paragraphs: [
      "I'm Amritha P, a Computer Science Engineering student at Amal Jyothi College of Engineering. I'm enthusiastic about programming, problem-solving and exploring innovative technological solutions.",
      "I enjoy learning new concepts, collaborating with teams and transforming ideas into practical projects. Through academic activities, workshops and hackathon experiences, I'm continuously developing my technical and teamwork skills.",
    ],
    infoCards: [
      {
        label: 'Education',
        value: 'Amal Jyothi College of Engineering',
        subValue: 'Autonomous Engineering Institution',
        iconName: 'GraduationCap',
      },
      {
        label: 'Programme',
        value: 'B.Tech Computer Science Engineering',
        subValue: 'Undergraduate Degree',
        iconName: 'Code2',
      },
      {
        label: 'Focus',
        value: 'Programming, Problem Solving & Innovation',
        subValue: 'Algorithms, Systems & Applied Tech',
        iconName: 'Compass',
      },
    ],
  },

  skills: {
    heading: 'Skills & Technologies',
    description: 'Core foundational competencies and technologies actively applied in coursework and projects.',
    items: [
      {
        name: 'C Programming',
        description: 'Structured programming, memory management, pointers, and foundational data structures.',
        category: 'core',
        badge: 'Core Foundation',
      },
      // Easy to expand with more skills as they are verified:
      // { name: 'Python', category: 'exploring', description: '...' },
      // { name: 'Git & GitHub', category: 'tools', description: '...' },
    ],
  },

  projects: {
    heading: 'Featured Projects',
    description: 'Hands-on practical exploration in emerging technology and applied problem solving.',
    items: [
      {
        id: 'smart-water-purification',
        number: '01',
        title: 'Smart Water Purification System Using IoT',
        description: 'An IoT-based project focused on exploring smart water purification and technology-driven water monitoring solutions.',
        category: 'Internet of Things | Innovation',
        tags: ['Internet of Things', 'Smart Monitoring', 'Sensor Integration', 'Problem Solving'],
        githubUrl: '', // Set when repository is public
        demoUrl: '',   // Set when demo or documentation is live
        featured: true,
      },
    ],
  },

  activities: {
    heading: 'Activities & Experiences',
    description: 'Engagement in competitive hackathons, innovation initiatives, and technical workshops.',
    items: [
      {
        id: 'sih-hackathon',
        title: 'SIH Hackathon',
        badge: 'National Hackathon',
        subtitle: 'Smart India Hackathon Initiative',
        description: 'Participation and exposure to innovation, problem-solving and collaborative hackathon activities tackling real-world problem statements.',
        iconName: 'Zap',
        period: 'Academic Experience',
      },
      {
        id: 'workshops',
        title: 'Workshops',
        badge: 'Skill Development',
        subtitle: 'Hands-on Technical Sessions',
        description: 'Technical learning and practical skill development through structured domain workshops and peer learning environments.',
        iconName: 'Wrench',
        period: 'Continuous Learning',
      },
      {
        id: 'yip',
        title: 'YIP',
        badge: 'Innovation Programme',
        subtitle: 'Young Innovators Programme',
        description: 'Young Innovators Programme experience, fostering innovative thinking, project ideation, and structured problem identification.',
        iconName: 'Lightbulb',
        period: 'Innovation Exposure',
      },
    ],
  },

  contact: {
    heading: "Let's Connect",
    subheading: "Have an idea, opportunity or something interesting to discuss? I'd love to connect.",
    email: 'amritaprathibha@gmail.com',
    formspreeEndpoint: (import.meta.env.VITE_FORMSPREE_ENDPOINT as string) || '',
    socialLinks: [
      {
        platform: 'linkedin',
        url: '', // Left empty until actual profile URL is provided
        label: 'LinkedIn',
        visible: false,
      },
      {
        platform: 'github',
        url: '', // Left empty until actual profile URL is provided
        label: 'GitHub',
        visible: false,
      },
      {
        platform: 'email',
        url: 'mailto:amritaprathibha@gmail.com',
        label: 'Email',
        visible: true,
      },
    ],
  },

  footer: {
    tagline: 'Aspiring Computer Science Engineer • Amal Jyothi College of Engineering',
    rights: 'All rights reserved.',
  },
};

