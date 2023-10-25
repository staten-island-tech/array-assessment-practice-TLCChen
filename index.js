const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

//sort books alphabetically

//Find who wrote War and Peace

//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?

//print a list of books that "includes" the genre historical

books.forEach((book) =>
  console.log(
    book.authorFirst,
    book.authorLast,
    "wrote",
    book.name,
    "in",
    book.publishDate
  )
);

const list = [];

books.forEach((date) => list.push(date.publishDate));
list.sort();
console.log(list);

console.log(titles.sort());

const war = books.filter((peace) => peace.name.includes("War"));
console.log(war[0].authorFirst, war[0].authorLast, "wrote War and Peace.");

const time = books.sort((a, b) => a.publishDate - b.publishDate);
console.log(time);

const pre1900 = books.filter((date) => date.publishDate < 1900);
console.log("There are", pre1900.length, "books printed before 1900.");
const date = new Date();
const past100 = books.filter(
  (newBook) => date.getFullYear() - newBook.publishDate <= 100
);
if (past100.length >= 1) {
  console.log("At least one book was printed in the past 100 years.");
}

const allBooks = books.length;
if (allBooks === past100) {
  console.log("All books were printed within the past 100 years.");
} else {
  console.log(
    "No, only",
    past100.length,
    "books were printed within the past 100 years."
  );
}

const historical = books.filter((history) =>
  history.genre.includes("historical")
);
console.log(historical);
data
  .filter((role) => role.displayName == "Duelist")
  .forEach((duelist) => console.log(duelist.displayName));
