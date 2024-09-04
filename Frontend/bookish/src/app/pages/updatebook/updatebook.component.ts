import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './updatebook.component.html',
  styleUrl: './updatebook.component.css'
})
export class UpdatebookComponent {
  updateBookForm!: FormGroup;
  bookId!: number;
  book!: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    
    this.updateBookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      releseDate: ['', Validators.required],
      pages: [0, Validators.required]
  });

      this.bookService.getBookById(this.bookId).subscribe((book: Book) => {
        this.book = book;

        const formattedDate = new Date(book.releseDate).toISOString().split('T')[0];

        this.updateBookForm.patchValue({ ...book, releseDate: formattedDate});
      });
    }

  onSubmit(): void {
    if (this.updateBookForm.valid) {
      const updatedBook: Book = { ...this.book, ...this.updateBookForm.value };

      this.bookService.updateBook(updatedBook).subscribe(() => {
        alert('Bok uppdaterad!');
        this.router.navigate(['/']);
      });
    }
  }

}
