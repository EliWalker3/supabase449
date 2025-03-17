import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"
const supabaseUrl = 'https://zbdfnquswzpzsbiidtmt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiZGZucXVzd3pwenNiaWlkdG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NzM4MTQsImV4cCI6MjA1NzQ0OTgxNH0.ipt_BjLAeATloDQiGy7ArFM0-wTj9HsBoHHNBq-9RMo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
      let bookList = document.getElementById("books");
      bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }  
}

getBooks()