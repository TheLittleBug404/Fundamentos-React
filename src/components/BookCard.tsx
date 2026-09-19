interface BookCardProps {
    title : string,
    author:string,
    year: number,
}

function BookCard({title,author,year}:BookCardProps){
    return(
        <article>
            <h3> {title} </h3>
            <p> {author} </p>
            <h4> {year} </h4>
        </article>
    );
}
export default BookCard;

