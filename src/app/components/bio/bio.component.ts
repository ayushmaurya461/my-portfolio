import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
})
export class BioComponent {
  sidebar = inject(SidebarService);

  expperience = [
    {
      company: 'Kataria Software Solutions Pvt. Ltd., Gurgugram. ',
      duration: '6 Months',
      start: 'March, 2023',
      role: 'Full Stack Javascript Developer',
    },
    {
      company: 'Kataria Software Solutions Pvt. Ltd., Gurgugram. ',
      duration: '3 Months',
      start: 'March, 2023',
      role: 'Angular Developer',
    },
    {
      company: 'Tata Consultancy Services, Hyderabad.',
      duration: '8 Months',
      start: 'July, 2022',
      role: 'Angular Developer',
    },
    {
      company: 'Tata Consultancy Services, Hyderabad.',
      duration: '1 year',
      start: 'August, 2021',
      role: 'System Engineer',
    },
  ];

  education = [
    {
      college: 'Jain University, Banglore.',
      course: 'Master of Computer Applications',
      start: 'Jan, 2022',
      specialization: 'Information Technology',
      description: '',
    },
    {
      college: 'Mukand Lal National College',
      course: 'Bachelor of Computer Applications',
      start: 'July, 2018',
      specialization: 'Information Technology',
      description: '',
    },
  ];

  showSidebar() {
    this.sidebar.toggleEnable = true;
    this.sidebar.showSidebar();
  }
}
