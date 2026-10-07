// import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <div className="container sticky-top bg-white z-3">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#home"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "rgb(116, 192, 252)" }}
              ></i>
              <span className="ms-2 fs-4 fw-bold">BookStore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#home" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2 link-dark">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2 link-dark">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
      </div>

      {/* Hero / Home Section */}
      <section id="home" className="container my-5 pt-4">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Kuasai Teknologi dengan Referensi Terbaik
            </h1>
            <p className="lead text-secondary">
              Tingkatkan keahlian *coding* dan wawasan teknologi Anda melalui
              literatur pilihan kami. Dari fundamental pemrograman hingga
              arsitektur sistem modern, temukan buku yang akan membantu Anda
              membangun masa depan digital.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Jelajahi Koleksi
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Promo Hari Ini
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
              alt="Programming Books"
              width="720"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5 bg-body-tertiary">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Kenali Tim Kami</h2>
            <p className="text-muted">
              Inovator di balik layar sistem operasional BookStore.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
            {[
              { name: "Salman", role: "Frontend Developer" },
              { name: "Maula", role: "Backend Developer" },
              { name: "Ash", role: "UI/UX Designer" },
              { name: "Shidqi", role: "Project Manager" },
            ].map((member, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm h-100 border-0 text-center pt-4 pb-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${member.name}&background=random&color=fff&size=150`}
                    className="rounded-circle mx-auto mb-3 shadow-sm"
                    alt={member.name}
                    width="100"
                    height="100"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="card-text text-primary">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Hubungi Kami</h2>
                <p className="text-muted">
                  Punya pertanyaan seputar ketersediaan buku? Kirimkan pesan
                  kepada kami.
                </p>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control bg-light"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Pesan
                    </label>
                    <textarea
                      className="form-control bg-light"
                      id="message"
                      rows="4"
                      placeholder="Tuliskan pertanyaan Anda di sini..."
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4 text-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg px-5 fw-bold rounded-pill"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#home" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            &copy; 2026 NF Academy
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
