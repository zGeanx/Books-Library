export interface Book {
    id: number;
    title: string;
    author: string;
    biography: string;
}

export interface BooksResponse {
    books: Book[];
    page: number;
    page_size: number;
    total: number;
}

