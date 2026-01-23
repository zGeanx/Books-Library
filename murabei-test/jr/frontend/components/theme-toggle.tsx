'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    const handleThemeChange = (value: string) => {
        if (value && (value === 'light' || value === 'dark')) {
            setTheme(value);
            localStorage.setItem('theme', value);
            document.documentElement.classList.toggle('dark', value === 'dark');
        }
    };

    if (!mounted) {
        return (
            <div className="w-20 h-9 rounded-md bg-muted animate-pulse" />
        );
    }

    return (
        <ToggleGroup
            type="single"
            value={theme}
            onValueChange={handleThemeChange}
            className="border border-border bg-muted/30 rounded-lg p-1 gap-1"
        >
            <ToggleGroupItem
                value="light"
                aria-label="Modo claro"
                className="relative transition-all duration-300 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-md hover:bg-background/50"
            >
                <Sun className={`h-4 w-4 transition-all duration-300 ${theme === 'light' ? 'scale-110 text-amber-500' : ''}`} />
                {theme === 'light' && (
                    <span className="absolute inset-0 rounded-md bg-amber-500/10 animate-pulse" />
                )}
            </ToggleGroupItem>
            <ToggleGroupItem
                value="dark"
                aria-label="Modo escuro"
                className="relative transition-all duration-300 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-md hover:bg-background/50"
            >
                <Moon className={`h-4 w-4 transition-all duration-300 ${theme === 'dark' ? 'scale-110 text-indigo-400' : ''}`} />
                {theme === 'dark' && (
                    <span className="absolute inset-0 rounded-md bg-indigo-500/10 animate-pulse" />
                )}
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
