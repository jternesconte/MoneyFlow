import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private darkMode = signal(this.getInitialMode());

  readonly isDarkMode = computed(() => this.darkMode());

  toggle(): void {
    const newMode = !this.darkMode();
    this.darkMode.set(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  }

  private getInitialMode(): boolean {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  }

}
