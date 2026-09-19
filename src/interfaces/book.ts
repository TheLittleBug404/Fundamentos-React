interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    favorites: boolean;
}

const books: Book[] = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert D Junior",
        year: 2008,
        favorites: false,
    },
    {
        id: 2,
        title: "The pragmatic Programmer",
        author: "Robert D Alto",
        year: 1999,
        favorites: true,
    }
]
