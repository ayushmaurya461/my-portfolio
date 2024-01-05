import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { expandCollapse } from '../../shared/animations/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [expandCollapse],
})
export class HomeComponent {
  showDetails = false;
  selected = {
    title: '',
    description: '',
  };
  projects = [
    {
      title: 'TMSERP',
      url: 'https://tmserp.com',
      image: 'assets/projects/tms.png',
      description: `TMSERP is a comprehensive Transport Management System designed to assist transporters in efficiently maintaining records of their vehicles. The application encompasses various functionalities, including managing vehicle details, consignments, drivers, salary information, and live location tracking.`,
      technologies: 'Angular 14, jQuery, PrimeNg, Bootstrap, SQL',
    },
    {
      title: 'OSM - Online Service Marketplace',
      image: 'assets/projects/osm.png',
      description:
        'As part of my college project last year, I conceptualized and developed an innovative Online Service Marketplace (OSM) using cutting-edge technologies to address the needs of both service providers and seekers. Leveraging Angular 16, Express, and MongoDB with Mongoose for backend operations.',
      url: 'https://github.com/ayushmaurya461/online-service-marketplace',
      technologies:
        'Angular 16, Express 4.2, PrimeNg, Bootstrap, MongoDB, Mongoose',
    },
    {
      title: 'TMS - Driver',
      image: 'assets/projects/tms-driver.png',
      url: 'https://github.com/ayushmaurya461/driver-consignment-tracking',
      description: `TMS-Driver is a Mobile Application designed to assist drivers in keeping track of their salary, consignments, and vehicle etails, providing a comprehensive solution for efficient management.`,
      technologies: 'Angular 16, Capacitor, PrimeNg, SCSS, MapMyIndia',
    },
    {
      title: 'GardenGO',
      image: 'assets/projects/angular.jpg',
      description: `As part of my college project last year, I conceptualized and developed an innovative Online Service Marketplace (OSM) using cutting-edge technologies to address the needs of both service providers and seekers. Leveraging Angular 16, Express, and MongoDB with Mongoose for backend operations.`,
      url: 'https://github.com/ayushmaurya461/online-service-marketplace',
      technologies: `Angular, Firebase, Bootstrap, CSS.`,
    },
  ];

  technologies = [
    {
      title: 'Frontend',
      stack: [
        { id: 0, title: 'Angular', description: '' },
        { id: 1, title: 'Typescript', description: '' },
        { id: 2, title: 'Javascript', description: '' },
        { id: 3, title: 'HTML', description: '' },
        { id: 6, title: 'React', description: '' },
        { id: 4, title: 'jQuery', description: '' },
        { id: 5, title: 'Capacitor', description: '' },
      ],
    },
    {
      title: 'Backend',
      stack: [
        { id: 0, title: 'Nodejs', description: '' },
        { id: 1, title: 'Express', description: '' },
      ],
    },
    {
      title: 'Database',
      stack: [
        { id: 0, title: 'SQL', description: '' },
        { id: 1, title: 'MongoDB', description: '' },
        { id: 2, title: 'GraphQL', description: '' },
      ],
    },
    {
      title: 'Design & Styling',
      stack: [
        { id: 0, title: 'CSS', description: '' },
        { id: 1, title: 'SCSS', description: '' },
        { id: 2, title: 'Tailwind', description: '' },
        { id: 2, title: 'Bootstrap', description: '' },
        { id: 2, title: 'Angular Material', description: '' },
        { id: 2, title: 'PrimeNg', description: '' },
        { id: 2, title: 'Ngx-Bootstrap', description: '' },
      ],
    },
  ];

  setSelected(tech: any, selected: any) {
    this.showDetails = true;
    this.selected = selected;
  }
}
