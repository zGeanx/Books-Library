'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentSearch = searchParams.get('search') || '';

            if (searchValue !== currentSearch) {
                const params = new URLSearchParams(searchParams.toString());

                if (searchValue) {
                    params.set('search', searchValue);
                    params.delete('page');
                } else {
                    params.delete('search');
                }

                startTransition(() => {
                    router.push(`/?${params.toString()}`);
                });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchValue]);

    return (
        <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Buscar por livro ou autor..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10"
            />
        </div>
    );
}
