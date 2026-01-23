import { Author } from '@/types/authors';
import { getApiBaseUrl, API_ENDPOINTS } from './config';

export async function getAuthors(): Promise<Author[]> {
    const apiBaseUrl = getApiBaseUrl();
    const response = await fetch(
        `${apiBaseUrl}${API_ENDPOINTS.authors.list}`,
        { cache: 'no-store' }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch authors');
    }

    return response.json();
}
