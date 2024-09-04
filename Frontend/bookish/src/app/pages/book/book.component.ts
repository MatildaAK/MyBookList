import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books$!: Observable<Book[]>;
  http = inject(HttpClient);

  constructor(private router: Router, private bookService: BookService){};

  bookForm = new FormGroup({
    title: new FormControl<string>(''),
    author: new FormControl<string>(''),
    genre: new FormControl<string>(''),
    releseDate: new FormControl<Date | null>(null),
    pages: new FormControl<number | null>(null),

  });

  onFormSubmit() {
    const addBook = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      genre: this.bookForm.value.genre,
      releseDate: this.bookForm.value.releseDate,
      pages: this.bookForm.value.pages,
    }

    this.http.post('https://localhost:7271/api/Book', addBook).subscribe({
      next: (value) => {
        alert('Bok Tillagd!');
        this.router.navigate(['/']);
      }
    });

    // this.bookService.addBook(addook).subscribe({
    //   next: (value) => {
    //       alert('Bok Tillagd!');
    //       this.router.navigate(['/']);
    //   }
    // })
  }
  
}
