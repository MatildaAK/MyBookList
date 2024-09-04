import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Book } from "../models/book.model";

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
    private apiUrl = 'https://localhost:7271/api/Book';
  
    constructor(private http: HttpClient) {}
  
    getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.apiUrl).pipe(
        map(books => {
          return books.map(book => {
            book.releseDate = new Date(book.releseDate).toISOString().split('T')[0];
            return book;
          })
        })
      )
    }

    getBookById(id: number): Observable<Book> {
      return this.http.get<Book>(`${this.apiUrl}/${id}`).pipe(
        map(book => {
          book.releseDate = new Date(book.releseDate).toISOString().split('T')[0];
          return book;
        })
      );;
    }

    addBook(book: Book): Observable<Book> {
      const bookToAdd = {
        ...book,
        releseDate: book.releseDate
      };

      return this.http.post<Book>(this.apiUrl, bookToAdd);
    }
  
    updateBook(book: Book): Observable<Book> {
      return this.http.put<Book>(`${this.apiUrl}/${book.id}`, book);
    }
  
    deleteBook(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  
  }