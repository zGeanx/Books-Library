import { Author } from '@/types/authors';
import { API_BASE_URL, API_ENDPOINTS } from './config';

export async function getAuthors(): Promise<Author[]> {
    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.authors.list}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch authors');
    }

    return response.json();
}
