import { Book } from '@/types/book';
import { getApiBaseUrl, API_ENDPOINTS, DEFAULT_PAGE_SIZE } from './config';

export async function getBooks(
    page: number = 1,
    pageSize: number = DEFAULT_PAGE_SIZE,
    search?: string
): Promise<Book[]> {
    const apiBaseUrl = getApiBaseUrl();
    const params = new URLSearchParams({
        page: page.toString(),
        page_size: pageSize.toString(),
    });

    if (search) {
        params.append('search', search);
    }

    const response = await fetch(
        `${apiBaseUrl}${API_ENDPOINTS.books.list}?${params.toString()}`,
        {
            cache: 'no-store',
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }

    return response.json();
}

export async function getBooksByAuthor(authorSlug: string): Promise<Book[]> {
    const apiBaseUrl = getApiBaseUrl();
    const response = await fetch(
        `${apiBaseUrl}${API_ENDPOINTS.books.byAuthor(authorSlug)}`,
        { cache: 'no-store' }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch books by author');
    }

    return response.json();
}

export async function getBooksBySubject(subject: string): Promise<Book[]> {
    const apiBaseUrl = getApiBaseUrl();
    const response = await fetch(
        `${apiBaseUrl}${API_ENDPOINTS.books.bySubject(subject)}`,
        { cache: 'no-store' }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch books by subject');
    }

    return response.json();
}

export async function getBookSubjects(): Promise<string[]> {
    const apiBaseUrl = getApiBaseUrl();
    const response = await fetch(
        `${apiBaseUrl}${API_ENDPOINTS.books.subjects}`,
        { cache: 'no-store' }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch book subjects');
    }

    return response.json();
}

export async function createBook(
    bookData: Omit<Book, 'id'>
): Promise<{ message: string }> {
    const apiBaseUrl = getApiBaseUrl();
    const response = await fetch(
        `${apiBaseUrl}${API_ENDPOINTS.books.list}`,
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
