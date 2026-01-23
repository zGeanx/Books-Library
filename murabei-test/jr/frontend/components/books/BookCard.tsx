import { Book } from '@/types/book';

interface BookCardProps {
    book: Book;
}

function stripHtmlTags(text: string): string {
    return text.replace(/<[^>]*>/g, '').trim();
}

export default function BookCard({ book }: BookCardProps) {
    const cleanBiography = book.biography ? stripHtmlTags(book.biography) : '';

    return (
        <div className="perspective-3d w-full h-[280px] flex items-center justify-center group relative">
            <div className="absolute top-[19px] left-1/2 -translate-x-1/2 w-[18px] h-6 bookmark-ribbon-gradient bookmark-ribbon-shape shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] z-[100] opacity-85 transition-all duration-[600ms] ease-in-out pointer-events-none group-hover:top-[11px] group-hover:opacity-100 group-hover:shadow-[0_4px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]" />

            <div className="relative w-full h-60 flex preserve-3d transition-transform duration-[600ms] ease-in-out group-hover:-translate-y-2 group-hover:rotate-x-[5deg]">
                <div className="relative w-1/2 h-full bg-card border border-border border-r-0 shadow-[0_4px_12px_hsl(var(--foreground)/0.1)] transition-all duration-[400ms] ease-in-out overflow-hidden z-[1] rounded-l-lg origin-right book-page-gradient-left group-hover:rotate-y-[-3deg] group-hover:shadow-[-2px_4px_16px_hsl(var(--foreground)/0.15)]">
                    <div className="p-6 h-full flex flex-col relative">
                        <div className="absolute -right-px top-0 bottom-0 w-[3px] book-spine-gradient" />

                        <h3 className="text-lg font-semibold leading-snug text-foreground mb-3 line-clamp-3 font-serif">
                            {book.title}
                        </h3>
                        <p className="text-sm text-muted-foreground italic mt-auto font-serif">
                            {book.author}
                        </p>
                    </div>
                </div>

                <div className="relative w-1/2 h-full bg-card border border-border border-l-0 shadow-[0_4px_12px_hsl(var(--foreground)/0.1)] transition-all duration-[400ms] ease-in-out overflow-hidden z-[1] rounded-r-lg origin-left book-page-gradient-right group-hover:rotate-y-[3deg] group-hover:shadow-[2px_4px_16px_hsl(var(--foreground)/0.15)]">
                    <div className="p-6 h-full flex flex-col relative">
                        <div className="absolute inset-6 book-lines-pattern pointer-events-none" />

                        {cleanBiography && (
                            <p className="text-[0.8125rem] leading-relaxed text-card-foreground line-clamp-8 text-justify font-serif relative z-10">
                                {cleanBiography}
                            </p>
                        )}
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-full book-shadow-gradient pointer-events-none z-10" />
            </div>
        </div>
    );
}
