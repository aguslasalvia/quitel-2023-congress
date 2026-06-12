import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { ArrowUpRight, Download } from "lucide-react";

const speakers = [
  { name: "Adrian Roitberg", link: "https://scholar.google.com/citations?user=bDtZleMAAAAJ", affiliation: "University of Florida, USA", role: "Dr." },
  { name: "Mónica Pickholz", link: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=29020&datos_academicos=yes", affiliation: "Facultad de Ciencias Exactas y Naturales, Argentina", role: "Dra." },
  { name: "Andrea Cavalli", link: "https://scholar.google.com/citations?user=4xTOvaMAAAAJ&hl=en", affiliation: "EPFL, Switzerland", role: "Prof." },
  { name: "Danilo Gonzalez Nilo", link: "https://scholar.google.com/citations?user=p7_WRcAAAAAJ&hl=es", affiliation: "Universidad Andrés Bello, Chile", role: "Dr." },
  { name: "Elfi Kraka", link: "https://s3.smu.edu/dedman/catco/elfi-kraka.html", affiliation: "Southern Methodist University, USA", role: "Dra." },
  { name: "Benoit Champagne", link: "https://scholar.google.ca/citations?user=84Uf_T0AAAAJ", affiliation: "University of Namur, Belgium", role: "Dr." },
  { name: "Sonia Taamalli", link: "https://www.researchgate.net/profile/Taamalli-Sonia-2", affiliation: "Université de Lille, France", role: "Dra." },
  { name: "Alejandro Toro-Labbé", link: "https://scholar.google.es/citations?user=AcIVuwMAAAAJ", affiliation: "Pontificia Universidad Católica de Chile", role: "Dr." },
  { name: "Ana Valeria Lourenco", link: "#", affiliation: "Universidade Estadual do Maranhão, Brazil", role: "Dr." },
  { name: "Julio Sambrano", link: "https://scholar.google.com.br/citations?user=IQFmoEgAAAAJ", affiliation: "UNESP, Brazil", role: "Dr." },
  { name: "Gian Pietro Miscione", link: "https://scholar.google.com.co/citations?user=-j4-Do4AAAAJ", affiliation: "Universidad de Los Andes, Colombia", role: "Dr." },
  { name: "Ana Cunha", link: "https://www.uantwerpen.be/en/staff/ana-cunha_23562/", affiliation: "University of Antwerp, Belgium", role: "Dra." },
  { name: "Elson Longo", link: "https://scholar.google.com/citations?user=OHmp6A4AAAAJ&hl=nl", affiliation: "Universidade Federal de São Carlos, Brazil", role: "Dr." },
  { name: "Luciana Capece", link: "https://www.conicet.gov.ar/new_scp/detalle.php?id=35618&datos_academicos=yes", affiliation: "Universidad de Buenos Aires, Argentina", role: "Dra." },
  { name: "Alfredo Juan", link: "https://ri.conicet.gov.ar/author/1709", affiliation: "Universidad Nacional del Sur, Argentina", role: "Dr." },
  { name: "Carmen Domene", link: "https://researchportal.bath.ac.uk/en/persons/carmen-domene", affiliation: "University of Bath, England", role: "Dra." },
  { name: "Iñaki Tuñón", link: "https://scholar.google.es/citations?user=YJzlGLQAAAAJ&hl=es", affiliation: "Universidad de Valencia, Spain", role: "Prof." },
];

export default function Speakers() {
  window.scrollTo(0, 0);

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">QUITEL / CHITEL 2023</p>
        <h1 className="page-header-title">
          Confirmed <em>speakers.</em>
        </h1>
        <p className="page-header-lead">
          Seventeen researchers from across Latin America, Europe and North America.
        </p>
      </motion.header>

      <div className="page-body">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ paddingTop: "1.5rem" }}
        >
          <ul className="speaker-index two-col">
            {speakers.map((speaker, index) => (
              <li key={index}>
                <a
                  href={speaker.link}
                  target="_blank"
                  rel="noreferrer"
                  className="speaker-row"
                >
                  <span className="speaker-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="speaker-content">
                    <span className="speaker-name">
                      {speaker.role} {speaker.name}
                    </span>
                    <span className="speaker-affiliation">{speaker.affiliation}</span>
                  </span>
                  <ArrowUpRight size={15} className="speaker-link" />
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "2rem" }}>
            <a
              className="btn-editorial outline"
              href="assets/files/schedule-quitel2023.pdf"
              download
            >
              <Download size={15} />
              Download Program
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
