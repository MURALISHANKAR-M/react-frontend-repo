import React from 'react'


function About () {
  return (
    <>
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src=" https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685909433i/156480764.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className='text-3xl text-blue-800 font-bold' >About Us</h1>
      <br />
      <h1 className="text-5xl text-gray-700 font-bold">"Today a reader, tomorrow a leader."</h1>
      <p className="py-6">
      "As you read a book word by word and page by page, you participate in its creation, just as a cellist playing a Bach suite participates, note by note, in the creation, the coming-to-be, the existence, of the music. And, as you read and re-read, the book of course participates in the creation of you, your thoughts and feelings, the size and temper of your soul." 
      </p>
      <button className="btn btn-warning">Thank You</button>
    </div>
  </div>
</div>
    </>
  )
}


export default About ;