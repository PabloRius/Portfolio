import UC3M from '../assets/images/UC3M.jpg';
import UNSW from '../assets/images/UNSW.jpg';
import UC3M2 from '../assets/images/UC3M2.jpg';
import NTT from '../assets/images/NTT.jpg';
import TKE from '../assets/images/TKE.jpg';

import {
  ES,
  AU,
  // GB,
  FlagComponent,
} from 'country-flag-icons/react/3x2';

interface timelineComponent {
  date: string;
  title: string;
  text: string | Array<string>;
  location: string;
  imageUrl?: string;
  flag: FlagComponent;
  category: 'basic' | 'tech';
}

export const timeline: Array<timelineComponent> = [
  {
    date: 'Sep 2024',
    title: 'Presented my Final Dissertation',
    text: [
      'Successfully presented my Final Dissertation, achieving a score of 9.1. The thesis focused on creating a dataset of socioeconomic indicators for municipalities in the Community of Madrid, formatted as Linked Open Data.',
      'Additionally, I developed a web application (GIS viewer) to visualize this data on a map, along with various statistics and graphs, aiding decision-making to enhance economic dynamism and territorial cohesion among the municipalities.',
      'This project has been recognized by the LODCoreMadrid Chair for its contribution to economic development through innovative project design.',
    ],
    location: 'Madrid, Spain',
    flag: ES,
    category: 'basic',
  },
  {
    date: 'Jul 2024 - Present',
    title: 'Bussiness Intelligence Analyst Intern at TK Elevators',
    text: [
      'Currently interning at TK Elevators, a global leader in elevator installation, within the OSH department as a Business Intelligence Analyst.',
      'I focus on developing safety analysis reports using Power BI, helping the company monitor and improve workplace safety standards.',
      'Additionally, I created a backend application to integrate and analyze reported incidents across various countries, enabling timely and appropriate safety measures.',
    ],
    imageUrl: TKE,
    location: 'Madrid, Spain',
    flag: ES,
    category: 'basic',
  },
  {
    date: 'Jun 2024',
    title: 'Graduated from UC3M',
    text: 'Successfully completed my studies in Computer Science, graduating from Universidad Carlos III de Madrid (UC3M).',
    imageUrl: UC3M2,
    location: 'Madrid, Spain',
    flag: ES,
    category: 'basic',
  },
  {
    date: 'Sep 2023 - May 2024',
    title: 'Software Engineer Intern at Ntt Data',
    text: [
      'Completed an internship at NTT Data, a leading consulting firm',
      'Worked closely with clients to define project requirements and deliver technical solutions.',
      'Developed backend APIs with Node.js and Express for real-time data management, integrating IoT devices with Azure services.',
      'Led the frontend development of a client-facing dashboard using React, enabling real-time data visualization and scenario simulations.',
    ],
    imageUrl: NTT,
    location: 'Madrid, Spain',
    flag: ES,
    category: 'basic',
  },
  {
    date: 'Feb 2023 - Jun 2023',
    title: 'UNSW',
    text: [
      'My time at UNSW in Sydney was part of a study exchange program, offering a unique opportunity to experience life and culture in a continent that was entirely new to me. Alongside immersing myself in Australian culture, I continued to advance my skills as a software developer through courses such as:',
      'Software Development Projects Management',
      'Computer Graphics',
      'Mobile Devices & Communication Security',
    ],
    imageUrl: UNSW,
    location: 'Sydney, Australia',
    flag: AU,
    category: 'basic',
  },
  {
    date: 'Sep 2022 - Dec 2022',
    title: 'Fourth Year at UC3M',
    text: [
      'The fourth year at UC3M was unique as it lasted only until December, as I was preparing for my exchange program in Australia, where I would complete my studies. During these months, I deepened my knowledge in various advanced topics through courses such as:',
      'Computing Technologies for the Web',
      'Real-Time Systems',
      'Multimedia',
      'AGILE in the Corporate Culture',
    ],

    location: 'Madrid, Spain',
    flag: ES,
    category: 'tech',
  },
  {
    date: 'Sep 2021 - Jun 2022',
    title: 'Third Year at UC3M',
    text: [
      'The third year at UC3M was pivotal for diving deeper into the tech industry, offering courses that strengthened my technical expertise. Key courses included:',
      'User Interfaces',
      'Computer Architecture & Computer Networks',
      'Distributed Systems',
      'Cryptography & Cybersecurity',
      'Throughout this year, I worked on various projects, focusing on the professional design and development of software.',
      'These projects allowed me to apply theoretical concepts to real-world scenarios, sharpening my skills in software architecture and system design.',
      'By the end of the year, I was gearing up for an even more exciting challenge in the next phase of my studies.',
    ],

    location: 'Madrid, Spain',
    flag: ES,
    category: 'tech',
  },
  {
    date: 'Sep 2020 - Jun 2021',
    title: 'Second Year at UC3M',
    text: [
      'The second year at UC3M focused on expanding opportunities in the tech industry, offering courses that provided a solid foundation for the future. Key courses included:',
      'Introduction to Business Management',
      'Artificial Intelligence & Automata Theory',
      'Operating Systems, Files & Databases',
      'Software Engineering & Development',
      'At the end of this year, I had to choose a specialization. Having developed a strong passion for programming and exploring new programming languages, I decided to focus on Software Engineering.',
    ],

    location: 'Madrid, Spain',
    flag: ES,
    category: 'tech',
  },
  {
    date: 'Sep 2019 - Jun 2020',
    title: 'First Year at UC3M',
    text: [
      'I began my journey as a Computer Science Engineer at Universidad Carlos III de Madrid, diving into foundational courses like:',
      'Programming I',
      'Data Structures & Algorithms',
      'Logic',
      'Algebra, Calculus & Discrete Mathematics',
      'Physics I & II',
      'During this year, I built the essential knowledge required for advanced courses, gaining a deep understanding of data structures and widely used algorithms in the software industry.',
    ],

    location: 'Madrid, Spain',
    flag: ES,
    category: 'tech',
  },
  {
    date: 'Sep 2019',
    title: 'Enrolled at Universidad Carlos III',
    text: 'I embarked on my journey as a Computer Science Engineer, starting my studies at Universidad Carlos III de Madrid.',
    imageUrl: UC3M,
    location: 'Madrid, Spain',
    flag: ES,
    category: 'basic',
  },
];
