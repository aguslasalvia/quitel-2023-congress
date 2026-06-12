import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const organizingCommittee = [
  "Margot Paulino Zunini - Chair",
  "Antonella Alba - Secretaria",
  "Nathalia Aceval",
  "Andres Camilo Ballesteros",
  "Jorge Cantero",
  "Pablo Dans",
  "Leonardo García",
  "Aline Katz",
  "Rodrigo Moreira",
  "Martin Soñora"
];

const localScientificCommittee = [
  "Laura Coitiño",
  "Pablo Dans",
  "Pablo Denis",
  "Ricardo Faccio",
  "Alvaro Mombrú",
  "Sergio Pantano",
  "Marc Segovia",
  "Oscar Ventura",
  "Mauricio Vega",
  "Nicolás Veiga",
  "Ari Zeida"
];

const internationalScientificCommittee = [
  "Silvia Casassa",
  "Andrea Cavalli",
  "Marco Chaer Nascimento",
  "Benoît Champagne",
  "Christopher Chipot",
  "Danilo Fernando González Nilo",
  "Alfonso Hernández Laguna",
  "Francesc Illas",
  "Elson Longo",
  "Efracio Mamani Flores",
  "Liliana Mammino",
  "Chérif F. Matta",
  "Joao Batista Lopes Martins",
  "Gabriel Merino",
  "Gian Pietro Miscione",
  "Margot Paulino",
  "Fabio Polticelli",
  "Maria João Ramos",
  "Andrés Reyes",
  "Julio Sambrano",
  "Orlando Tapia",
  "Alejandro Toro-Labbé",
  "Javier Torres",
  "Mario Ernesto Valdés"
];

function CommitteeList({ members, threeCol }) {
  return (
    <ul className={`committee-list ${threeCol ? "three-col" : ""}`}>
      {members.map((member, index) => {
        const [name, role] = member.split(" - ");
        return (
          <li key={index} className="committee-item">
            {name}
            {role && <span className="committee-role">{role}</span>}
          </li>
        );
      })}
    </ul>
  );
}

export default function About() {
  window.scrollTo(0, 0);

  let variants = {};
  if (window.innerWidth > 1024) {
    variants = {
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };
  }

  const sections = [
    {
      num: "01",
      title: "The Origins",
      body: (
        <>
          <p>
            The idea of organising QUITEL was born in Prof. Pullman&apos;s laboratory, situated on the 3rd floor of the Institute of Physico-Chemical Biology in Paris. This occurred during a friendly colloquy between Professors Pullman and Giuseppe Del Re. The topic of conversation was about the different assessments of the role of theoretical chemistry in Italy, France and countries like England and the United States.
          </p>
          <p>
            Apparently, theoreticians are more interested in the meaning of numerical results in order to associate them with physical-chemical phenomena, than in the numbers themselves. However, there is a need to formulate in a clear way such numbers overcoming immediately the language barrier.
          </p>
          <p>
            The alternatives were: adopt an uncomplicated language, accessible to all, or maintain the language of each researcher, increasing the ability to express ideas clearly, but running the risk of not being understood by the participants whose vernacular was not the same as that of the speaker. The final result of this dialogue was characterised by the necessary convergence, because, in fact, there was no communication barrier between the Latin-speaking researchers. Among them, scientific terms are very similar.
          </p>
          <p>
            From this arose the idea of a meeting of French and Italian theorists, the organisation of which was proposed by Prof. Del Re from Italy, together with his collaborators, F. Momicchioli, A. Rastelli, B. Cadioli, L. Pincelli from Modena.
          </p>
        </>
      ),
    },
    {
      num: "02",
      title: "The First Meeting",
      body: (
        <p>
          The first meeting had been planned for 1968, but due to the political events of that time, it was postponed to the following year (1969). The participants were satisfied with the initiative, and there was an agreement for the next meeting in France, with the participation of Prof. Daudel and his Spanish colleagues, who also joined the 1970 meeting. After this meeting the QUI(CHI)TEL was held in Granada, Spain (1971).
        </p>
      ),
    },
    {
      num: "03",
      title: "The Present",
      body: (
        <>
          <p>
            The Meetings from then on alternated between Italy-France-Spain for a period of more than 30 years, when a change occurred through the participation of Belgium, Switzerland and Portugal. In function of the results obtained, Latin America (1974) and, in recent years, Africa have joined QUITEL, thus crowning this great initiative and creating the solid bases for its continuity.
          </p>
          <p>Since 2006, QUITEL has alternated between Europe, Africa and America.</p>
        </>
      ),
    },
  ];

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
        <p className="eyebrow">QUITEL / CHITEL</p>
        <h1 className="page-header-title">
          A congress with <em>history.</em>
        </h1>
        <p className="page-header-lead">
          From a colloquy in Paris to a society spanning three continents — the story
          of the International Congress of Theoretical Chemists of Latin Expression.
        </p>
      </motion.header>

      <div className="page-body">
        {sections.map((section) => (
          <motion.section
            key={section.num}
            className="editorial-section"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="section-label">
              <span className="section-num">{section.num}</span>
              <h2 className="section-title">{section.title}</h2>
            </div>
            <div className="section-content prose">{section.body}</div>
          </motion.section>
        ))}

        <motion.section
          className="editorial-section"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">
            <span className="section-num">04</span>
            <h2 className="section-title">Committees</h2>
          </div>
          <div className="section-content">
            <p className="eyebrow" style={{ marginBottom: "0.25rem" }}>Organizing Committee</p>
            <CommitteeList members={organizingCommittee} />

            <p className="eyebrow" style={{ margin: "2rem 0 0.25rem" }}>Local Scientific Committee</p>
            <CommitteeList members={localScientificCommittee} />

            <p className="eyebrow" style={{ margin: "2rem 0 0.25rem" }}>International Scientific Committee</p>
            <CommitteeList members={internationalScientificCommittee} threeCol />
          </div>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}

CommitteeList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  threeCol: PropTypes.bool
};
