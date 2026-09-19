import BookCard from "./components/BookCard";
import Header from "./components/Header";

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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
    {
        id: 1,
        title: "Clean Code",
        author: "Robert D Junior",
        year: 2008,
        favorites: false,
    },
    {
        id: 2,
        title: "Libro de React 2027",
        author: "Robert D Alto",
        year: 1999,
        favorites: true,
    },
]

function App() {
    return (
        <>
            <Header />
            <main>
                <h2>Mis libros</h2>
            </main>
            {
                // importante
                books.map((libro) => (
                    <BookCard
                        key = {libro.id}
                        title= {libro.title}
                        author= {libro.author}
                        year={libro.year}
                    />
                ))
            }
        </>
    );
}

export default App;