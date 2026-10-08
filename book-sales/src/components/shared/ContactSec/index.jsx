export default function ContactSec() {
  return (
    <>
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
    </>
  );
}
