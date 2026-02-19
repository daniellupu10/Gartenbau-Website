export default function ProjectsPage() {
    return (
        <div className="container py-20 px-4 mx-auto text-center">
            <h1 className="text-4xl font-bold font-heading mb-6">Unsere Projekte</h1>
            <p className="text-xl text-muted-foreground mb-12">
                Eine Auswahl unserer schönsten Gärten und Anlagen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded-xl flex items-center justify-center border hover:border-primary transition-colors cursor-pointer group">
                        <span className="text-muted-foreground group-hover:text-primary font-medium">Projekt {i}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
