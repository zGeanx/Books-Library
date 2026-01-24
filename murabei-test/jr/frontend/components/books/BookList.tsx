'use client';

import { Book } from '@/types/book';
import BookCard from './BookCard';
import Pagination from '../Pagination';
import ThemeToggle from '../theme-toggle';
import SearchInput from '../search-input';

interface BooksListProps {
    books: Book[];
    currentPage: number;
}

export default function BookList({ books, currentPage }: BooksListProps) {
    const hasNextPage = books.length === 10;

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="mb-16 space-y-6">
                    <div className="flex items-start justify-between">
                        <div className="space-y-3">
                            <h1 className="text-5xl font-light tracking-tight text-foreground">
                                Biblioteca
                            </h1>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground/70 font-light">
                                <span>Página {currentPage}</span>
                                <span className="text-border">•</span>
                                <span>{books.length} {books.length === 1 ? 'livro' : 'livros'}</span>
                            </div>
                        </div>
                        <ThemeToggle />
                    </div>
                    <SearchInput />
                </div>

                {books.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground/60 text-base font-light tracking-wide">
                            Nenhum livro encontrado
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {books.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                )}

                <Pagination currentPage={currentPage} hasNextPage={hasNextPage} />
            </div>
        </div>
    );
}
