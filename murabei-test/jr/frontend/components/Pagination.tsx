'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    hasNextPage: boolean;
}

export default function Pagination({ currentPage, hasNextPage }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`/?${params.toString()}`);
    };

    const hasPrevPage = currentPage > 1;

    return (
        <div className="flex items-center justify-center gap-3 mt-16">
            <Button
                variant="outline"
                size="default"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!hasPrevPage}
                className="pointer group transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Anterior
            </Button>

            <div className="flex items-center gap-2 px-6 py-2 rounded-lg bg-muted/30 border border-border">
                <span className="text-sm text-muted-foreground font-light">Página</span>
                <span className="text-base font-semibold text-foreground min-w-[2ch] text-center">
                    {currentPage}
                </span>
            </div>

            <Button
                variant="outline"
                size="default"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
                className="pointer group transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Próxima
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
        </div>
    );
}
