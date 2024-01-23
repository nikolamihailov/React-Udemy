const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find(book => book.id === id);
}

// Destructuring examples

const book = getBook(2);

// standard way, bad for multiple properties
/* const title = book.title;
const author = book.author;
const pages = book.pages; */

// using destructuring - objects
const { title, author, pages, genres, publicationDate } = book;

console.log(title, author, pages, genres);

// standard way
/* const primaryGenre = genres[0];
const secondaryGenre = genres[0];
 */

// using destructuring - arrays 
// using rest
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// using spread with arrays
const newGenresArr = [...genres, "epic fantasy"];

// using spread with objects
const updatedBook = {
    ...book,
    // new obj property
    moviePublicationDate: "2001-12-19",
    // overwriting an existing one
    pages: 200
};


// template literals
const summary = `${title} is a ${pages}-page long book written by ${author}.`;

// ternary operator
const pageRange = pages > 1000 ? "over 1000" : "below 1000";

// arrow functions
const getYear = (date) => +date.split("-")[0];
console.log(getYear(publicationDate));

// falsy values: 0, null, "", undefined, false

// no short circuiting
console.log(1 + 1 === 2 && "indeed two");
// short circuiting
console.log(1 + 1 === 5 && "not gonna show");
// short circuiting
console.log(true || "not gonna show");
// no short circuiting
console.log(false || "here it is some string");

const spanishTranslation = book.translations.spanish || "Has not been translated";
const countWrong = book.reviews.librarything.reviewsCount;
countWrong;

// if reviewsCount is 0 will return no data because 0 is falsy value
//const count = book.reviews.librarything.reviewsCount || "no data";

// solution
// nullish coalescing operator - return the right side only if the left is null or undefined
const count = book.reviews.librarything.reviewsCount ?? "no data";




