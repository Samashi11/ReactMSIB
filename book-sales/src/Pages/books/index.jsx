import { useState } from "react";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";
import books from "../../Utils/books";

export default function Books() {
  const [bookList, setBookList] = useState(books);

  // Fungsi untuk menambah data buku baru (Fitur Nilai Tambah)
  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title: `Buku Baru #${bookList.length + 1}`,
      author: "Penulis Baru",
      year: 2026,
      description:
        "Deskripsi singkat buku baru yang ditambahkan secara dinamis via Hooks.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60",
    };

    setBookList([newBook, ...bookList]);
  };

  return (
    <>
      <Header />
      {/* <ProductList /> */}
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Koleksi Buku</h2>
            <p className="text-muted mb-0">
              Daftar buku yang tersedia di BookStore
            </p>
          </div>
          {/* Button Tambah Data menggunakan Hooks */}
          <button className="btn btn-primary fw-bold" onClick={handleAddBook}>
            <i className="fa-solid fa-plus me-2"></i>Tambah Buku
          </button>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {bookList.map((book) => (
            <div className="col" key={book.id}>
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-light text-primary align-self-start mb-2 border">
                    {book.year}
                  </span>
                  <h5 className="card-title fw-bold text-truncate">
                    {book.title}
                  </h5>
                  <p className="text-muted small mb-2">
                    Penulis: {book.author}
                  </p>
                  <p className="card-text text-secondary small flex-grow-1">
                    {book.description}
                  </p>
                  <button className="btn btn-outline-primary btn-sm mt-3 w-100 fw-semibold">
                    Detail Buku
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
