import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookComponent } from '../book/book.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { bookformatterPipe } from '../../pipes/bookformatter.pipe';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, bookformatterPipe, CommonModule, BookComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  books$!: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

  http = inject(HttpClient);

  onDelete(id: number) {
    this.bookService.deleteBook(id).subscribe({
      next: (value) => {
        alert('Bok borttagen');
        this.books$ = this.bookService.getBooks();
      },
      error: (err) => {
        console.error('Fel vid borttagning av bok:', err);
      }
    })
  }
}
