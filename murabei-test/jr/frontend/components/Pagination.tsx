'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    hasNextPage: boolean;
}

export default function Pagination({ currentPage, hasNextPage }: PaginationProps) {
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        router.push(`/?page=${newPage}`);
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-16">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-muted-foreground hover:text-foreground font-light"
            >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
            </Button>

            <div className="px-4 py-2 text-sm text-muted-foreground/70 font-light min-w-[100px] text-center">
                {currentPage}
            </div>

            <Button
                variant="ghost"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
                className="text-muted-foreground hover:text-foreground font-light"
            >
                Próxima
                <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
        </div>
    );
}
