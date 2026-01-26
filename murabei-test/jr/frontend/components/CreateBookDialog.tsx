'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getApiBaseUrl } from '@/services/config';

interface CreateBookDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateBookDialog({ open, onOpenChange }: CreateBookDialogProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        author_slug: '',
        author_bio: '',
        authors: '',
        publisher: '',
        synopsis: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const apiBaseUrl = getApiBaseUrl();
            const response = await fetch(`${apiBaseUrl}/api/v1/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar livro');
            }

            onOpenChange(false);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar livro:', error);
            alert('Erro ao criar livro. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="sm:max-w-[500px] shadow-2xl"
                style={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                }}
            >
                <DialogHeader>
                    <DialogTitle>Criar Novo Livro</DialogTitle>
                    <DialogDescription>
                        Preencha as informações básicas do livro.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Título *</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Digite o título do livro"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author">Autor *</Label>
                        <Input
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            placeholder="Nome do autor"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author_bio">Biografia do Autor</Label>
                        <Textarea
                            id="author_bio"
                            name="author_bio"
                            value={formData.author_bio}
                            onChange={handleChange}
                            placeholder="Breve biografia do autor"
                            rows={3}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="synopsis">Sinopse</Label>
                        <Textarea
                            id="synopsis"
                            name="synopsis"
                            value={formData.synopsis}
                            onChange={handleChange}
                            placeholder="Sinopse do livro"
                            rows={3}
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={isLoading}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-all duration-300"
                        >
                            {isLoading ? 'Criando...' : 'Criar Livro'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
