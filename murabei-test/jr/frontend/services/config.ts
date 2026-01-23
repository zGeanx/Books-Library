export const getApiBaseUrl = () => {
    if (typeof window === 'undefined') {
        return process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    }
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
    books: {
        list: '/api/v1/books',
        byAuthor: (authorSlug: string) => `/api/v1/books/author/${authorSlug}`,
        bySubject: (subject: string) => `/api/v1/books/subjects/${subject}`,
        subjects: '/api/v1/books/subjects',
    },
    authors: {
        list: '/api/v1/authors',
    },
} as const;

export const DEFAULT_PAGE_SIZE = 10;
