import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  sidebar = inject(SidebarService);

  projects = [
    {
      name: 'TMSERP',
      img: 'assets/projects/tms.png',
      description: {
        brief:
          'Undertaking a pivotal role at KSS Company, I spearheaded the entire frontend development of TMSERP, a comprehensive ERP application designed specifically for the Transport Management System. This ambitious project evolved from Angular 12 to Angular 14, demonstrating my adaptability and expertise in frontend technologies. TMSERP emerged as a robust solution, encompassing live location tracking of drivers, salary management, attendance tracking, vehicle management, and intricate calculations, making it a cornerstone in the transportation industry.',
        achievements: [
          `Orchestrated a feature-rich application addressing every facet of the Transport Management System, from real-time location tracking of drivers to precise salary calculations and attendance management.`,
          `Crafted a dynamic and user-friendly interface using CSS and Bootstrap, ensuring an optimal user experience for managing diverse components within the transportation domain.`,
          `Incorporated jQuery for data tables, enhancing data presentation and interactivity, showcasing my versatility in utilizing different technologies to meet project requirements.`,
          `Implemented a secure Single Sign-On (SSO) mechanism, allowing seamless access to multiple applications within the ERP suite.`,
          `Integrated MapmyIndia for mapping functionalities, enriching the application with geospatial capabilities crucial for a Transport Management System.`,
          `Constructed around 20 distinct dashboards, each tailored to specific needs, providing users with insightful and actionable data for effective decision-making.`,
          `Managed the unexpected scale of the project, addressing the intricacies of real-time data handling, precise calculations, and diverse components within the Transport Management System.`,
          `Successfully established a secure Single Sign-On mechanism, streamlining user access across multiple applications within the ERP suite, enhancing user experience and security.`,
          `Integrated MapmyIndia to provide geospatial insights, a critical aspect in a Transport Management System, showcasing my ability to incorporate external APIs for enhanced functionality.`,
        ],
      },
      url: 'https://tmserp.com',
      tech: 'Angular, jQuery, SQL, CSS, Bootstrap.',
    },
    {
      name: 'itsAyush',
      url: 'https://github.com/ayushmaurya461/itsAyush',
      img: 'assets/projects/angular.jpg',
      description: {
        brief: `Presenting my latest creation, the portfolio website you are currently exploring, built with cutting-edge technology and a swift development process. Crafted using Angular 17, this website showcases my proficiency in frontend development. Leveraging standalone components in Angular, SCSS for styling, and incorporating some Primeng components, I curated a sleek and dynamic user interface in just two days.
        
        
        If you find this portfolio compelling, I am open to further collaboration on similar projects. Feel free to contact me for more information or to explore additional opportunities.`,
        achievements: [
          `Utilized the latest features of Angular 17 to create a modern and dynamic user interface, showcasing my dedication to staying current with emerging technologies.`,
          `Employed SCSS for efficient styling and enhanced the visual appeal using Primeng components, ensuring a seamless and visually engaging user experience.`,
          `Demonstrated a swift development process by utilizing standalone Angular components, streamlining the creation of the portfolio frontend in a mere two days.`,
          `Incorporated Node.js for the backend, empowering the website with a blogging platform and efficient handling of contact forms.`,
          `Successfully developed the entire frontend of the portfolio website within two days, showcasing my efficiency and proficiency in creating dynamic user interfaces.`,
          `Implemented a robust backend using Node.js to support the blogging section and manage contact forms, enhancing the website's functionality and interactivity.`,
          `Crafted a responsive and engaging user interface, reflecting my commitment to delivering aesthetically pleasing and user-friendly digital experiences.`,
        ],
      },
      tech: 'Angular, Nodejs, PrimeNG, SCSS.',
    },
    {
      name: 'Tms-Driver',
      url: 'https://github.com/ayushmaurya461/driver-consignment-tracking',
      img: 'assets/projects/tms-driver.png',
      description: {
        brief:
          'Continuing my collaboration with the same company that utilized TMSERP, I ventured into the mobile realm by crafting the TMS-Driver application. Tailored for drivers, this mobile app provides a comprehensive suite of features, including the creation of change requests, real-time tracking of consignments and live locations, and access to vital information such as vehicle status and salary details. Developed with Angular 16, styled using SCSS, and enhanced with UI components from the Primeng library, this mobile application was brought to life with the use of Capacitor for optimal cross-device functionality.',
        achievements: [
          `Leveraged Angular 16 to develop a responsive and feature-rich mobile application catering specifically to the needs of drivers within the transport management system.`,
          `Implemented Capacitor to ensure cross-device compatibility, enabling the TMS-Driver application to run seamlessly on various mobile devices.`,
          `Integrated features allowing drivers to create change requests, track consignments in real-time, check the status of their vehicles, and access detailed salary information.`,
          `Utilized SCSS for styling to create a visually appealing and user-friendly interface. Integrated UI components from the Primeng library to enhance the application's functionality and aesthetics.`,
          `Successfully implemented Capacitor to ensure a smooth and consistent experience across various mobile devices, expanding the reach and usability of the TMS-Driver application.`,
          `Designed and implemented features specifically tailored for drivers, including change request creation, consignment tracking, and real-time access to critical information, enhancing the efficiency and experience for drivers.`,
          `Found immense enjoyment and satisfaction in delving into mobile application development, broadening my skill set and delivering a valuable tool for drivers in the transportation industry.`,
        ],
      },
      tech: 'Angular, SCSS, Capacitor, PrimeNG, Android.',
    },
    {
      name: 'OSM - Online Service Marketplace',
      img: 'assets/projects/osm.png',
      url: 'https://github.com/ayushmaurya461/online-service-marketplace',
      description: {
        brief: `As part of my college project last year, I conceptualized and developed an innovative Online Service Marketplace (OSM) using cutting-edge technologies to address the needs of both service providers and seekers. Leveraging Angular 16, Express, and MongoDB with Mongoose for backend operations, I crafted a dynamic platform that fosters connections between skilled professionals such as carpenters and electricians and those seeking their services.`,
        achievements: [
          `Successfully leveraged Angular's capabilities to create advanced service listings, showcasing not only my proficiency but also an understanding of how to optimize frontend experiences.`,
          `Overcame challenges in backend development using Express, particularly in enabling real-time communication. This achievement reflects my dedication to learning and implementing cutting-edge technologies in my projects.`,
        ],
      },
      tech: 'Angular, Express, CSS, Bootstrap, PrimeNg, JWT, MongoDB, Mongoose.',
    },

    {
      name: 'GardenGO',
      url: 'https://github.com/ayushmaurya461/GardenGo',
      img: 'assets/projects/angular.jpg',
      description: {
        brief:
          'Embarking on the early stages of my journey with Angular, I developed GardenGO, a website dedicated to providing lawn services. During this project, I employed Angular 13 for frontend development and Firebase for backend support. This endeavor not only honed my skills in frontend technologies but also introduced me to the intricacies of authentication and user permissions.',
        achievements: [
          `Leveraged the capabilities of Angular 13 to create a dynamic and interactive user interface, showcasing my early proficiency in frontend development.`,
          `Implemented Firebase for backend operations, gaining hands-on experience in utilizing cloud services for authentication, database management, and other crucial backend functionalities.`,
          `Crafted an aesthetically pleasing user interface using a combination of CSS and Bootstrap, demonstrating my ability to enhance user experiences through thoughtful design.`,
          `During the initial days of working on GardenGO, grappling with concepts like authentication and user permissions seemed daunting. However, overcoming these challenges became a significant milestone, showcasing my perseverance and growth in handling complex aspects of web development.`,
          `From finding certain aspects challenging to making them as routine as a cup of coffee, the GardenGO project symbolizes my progression in self-learning and adapting to the evolving landscape of frontend development.`,
        ],
      },
      tech: 'Angular, Firebase, Bootstrap, CSS.',
    },

    {
      name: 'Handlemenu Directive',
      url: 'https://github.com/ayushmaurya461/hadnleMenuDirective',
      img: 'assets/projects/angular.jpg',
      description: {
        brief:
          'In response to the challenge posed by an outdated library (metisMenu) in a project, I took the initiative to develop the "handleMenu" directive in Angular, a robust solution to manage menus seamlessly. This directive is designed to be easily integrated into any Angular project, providing a dynamic and feature-rich menu system with nested submenus, animations, and other engaging features. The project was crafted using Angular 14 and styled using CSS, ensuring a modern and responsive user interface.',
        achievements: [
          `Addressed the deprecated status of the metisMenu library by creating a modern and Angular-native solution, ensuring continued support for menu handling with enhanced features.`,
          `Developed a versatile directive capable of handling menu bars dynamically, catering to various project requirements with nested submenus, animations, and other interactive elements.`,
          `Utilized the features of Angular 14 to ensure the directive aligns with the latest advancements in Angular development, providing an up-to-date and efficient solution.`,
          `Successfully addressed the deprecation of the outdated metisMenu library by creating an Angular-native solution, ensuring seamless and feature-rich menu handling for projects.`,
          `Implemented a dynamic and modern user interface using CSS, ensuring that the handleMenu directive not only provides functionality but also a visually appealing experience.`,
        ],
      },
      tech: 'Angular, Typescript, CSS.',
    },
    {
      name: 'Weather Application',
      img: 'assets/projects/js.jpg',
      url: 'https://github.com/ayushmaurya461/weatherApp',
      description: {
        brief:
          'Embarking on my programming journey, the Weather Application stands out as my inaugural project, crafted with the trifecta of JavaScript, HTML, and CSS. This simple yet impactful application delivers real-time temperature and weather information for any city searched, accompanied by dynamically refreshing backgrounds for an engaging visual experience.',
        achievements: [
          `Leveraged JavaScript to dynamically fetch and display real-time weather data, demonstrating my early proficiency in using the language for interactive web applications.`,
          `Introduced dynamic background changes to the application, enhancing the visual experience and demonstrating creativity in user interface design.`,
        ],
      },
      tech: 'HTML, CSS, JavaScript.',
    },
    {
      name: 'Snake Game',
      url: 'https://github.com/ayushmaurya461/Snake-Game',
      img: 'assets/projects/js.jpg',
      description: {
        brief:
          'The Snake Game serves as an early exploration of working with the HTML canvas using HTML, CSS, and JavaScript. Despite its simplicity, the game showcases my foundational understanding of canvas manipulation..',
        achievements: [
          `Explored and implemented game rendering using the HTML canvas, laying the groundwork for understanding how to manipulate graphics within a web environment.`,
          `Established straightforward game rules—touching the wall results in the game's end, keeping the gameplay simple and accessible.`,
          `Gained hands-on experience with HTML canvas, mastering the basics of rendering and manipulating graphics to create a functional game environment.`,
        ],
      },
      tech: 'HTML, CSS, JavaScript',
    },
    {
      name: 'Lawnmakers - HTML Template',
      url: 'https://github.com/ayushmaurya461/lawnMaker_temlpate',
      img: 'assets/projects/html.png',
      tech: 'HTML, CSS, JavaScript',
      description: {
        brief:
          'Completing the roster of early projects, my first HTML and CSS template stands as a pivotal moment in my web development journey. This project signifies my entry into the world of web design, focusing on creating a responsive template using plain HTML and CSS.',
        achievements: [
          `Established a foundational understanding of HTML, creating a structured template that laid the groundwork for future web design projects.`,
          `Delved into responsive design concepts using CSS, adapting the template for optimal display on different devices and screen sizes.`,
        ],
      },
    },
  ];

  showSidebar() {
    this.sidebar.toggleEnable = true;
    this.sidebar.showSidebar();
  }
}
