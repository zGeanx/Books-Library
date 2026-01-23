import { Book } from '@/types/book';
import { getBooks } from '@/services';
import BookList from '@/components/books/BookList';


interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  let books: Book[] = [];
  let error: string | null = null;

  try {
    books = await getBooks(currentPage, 10);
  } catch (err) {
    error = err instanceof Error ? err.message : 'An error occurred';
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Erro: {error}</div>
      </div>
    );
  }

  return <BookList books={books} currentPage={currentPage} />;
}