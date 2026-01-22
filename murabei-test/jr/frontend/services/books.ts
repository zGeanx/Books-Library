import { Book } from '@/types/book';
import { API_BASE_URL, API_ENDPOINTS, DEFAULT_PAGE_SIZE } from './config';

export async function getBooks(
    page: number = 1,
    pageSize: number = DEFAULT_PAGE_SIZE
): Promise<Book[]> {
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.books.list}?page=${page}&page_size=${pageSize}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }

    return response.json();
}

export async function getBooksByAuthor(authorSlug: string): Promise<Book[]> {
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.books.byAuthor(authorSlug)}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch books by author');
    }

    return response.json();
}

export async function getBooksBySubject(subject: string): Promise<Book[]> {
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.books.bySubject(subject)}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch books by subject');
    }

    return response.json();
}

export async function getBookSubjects(): Promise<string[]> {
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.books.subjects}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch book subjects');
    }

    return response.json();
}

export async function createBook(
    bookData: Omit<Book, 'id'>
): Promise<{ message: string }> {
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.books.list}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        }
    );

    if (!response.ok) {
        throw new Error('Failed to create book');
    }

    return response.json();
}
