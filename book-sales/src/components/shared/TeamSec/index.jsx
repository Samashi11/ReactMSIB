export default function TeamSec() {
  return (
    <>
      <section className="py-5 bg-body-tertiary">
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
    </>
  );
}
