import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import books from "../Utils/books";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Rekomendasi Buku Terpopuler</h2>
          <p className="text-muted">
            Jelajahi koleksi terfavorit yang paling banyak dibaca
          </p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted small">
                    Oleh: {book.author} ({book.year})
                  </h6>
                  <p className="card-text text-secondary small flex-grow-1">
                    {book.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-sm btn-primary fw-semibold">
                      Beli Sekarang
                    </button>
                    <small className="text-muted">ID: #{book.id}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <ProductList /> */}
      <Footer />
    </>
  );
}
