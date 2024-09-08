import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../theme.service';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [NgClass, NgStyle, NgxFileDropModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent implements OnInit{
  isDarkTheme: boolean = false;

  constructor( private themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
    let main = document.querySelector('main')
    main?.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light')
  }


}
