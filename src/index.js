import React from 'react'
import { render } from 'react-dom'

let bookList = [
  {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
  {"title": "The Sun also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookMark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark today: {freeBookMark ? 'yes!' : 'no!'}</p>
    </section>
  )
}
class Library extends React.Component {
 
  state = {open: true, 
          freeBookMark: false
  }
  
  toggleOpenClosed= () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    const {books} = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
            <Book
              key={i}
              title={book.title} 
              author={book.author} 
              pages={book.pages} 
              freeBookMark={this.state.freeBookMark}/>
        )}

      </div>
    )

  }
}



render(
  <Library books={bookList}/>, 
  document.getElementById('root')
)