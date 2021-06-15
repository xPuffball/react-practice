import React from "react";
import ReactDom from "react-dom";
import "./index.css"

const books = [
{
  id: 1,
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg",
  author:"James Clear",
  title:"Atomic Habits"
},
{
  id: 2,
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg",
  author:"bingo bongo",
  title:"not atomic habits"
},
{
  id: 3,
  img: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg",
  author:"james translucent",
  title:"maybe atomic habits"
}
]

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const {img, author, title} = props;

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => alert("hello!")}>Test Button</button>
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
  )
}

ReactDom.render(<Booklist/>, document.getElementById('root'))