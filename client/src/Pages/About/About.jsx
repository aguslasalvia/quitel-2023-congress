import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Users, BookOpen, Globe, Award } from "lucide-react";

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

function CommitteeSection({ title, icon: Icon, members }) {
  let variants = {};
  if (window.innerWidth > 1024) {
    variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }
  }

  return (
    <motion.div 
      className="info-box"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="section-header">
        <Icon size={18} />
        <h2 className="info-title">{title}</h2>
      </div>
      <div className="info-text">
        <ul className="committee-list">
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function About() {
  window.scrollTo(0, 0);

  let variants = {};
  if (window.innerWidth > 1024) {
    variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }
  }

  return (
    <motion.div 
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="page-title-p">About</p>
        <p className="page-title-p">QUITEL / CHITEL</p>
      </motion.h1>

      <div className="page-info">
        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <BookOpen size={18} />
            <h2 className="info-title">The Origins</h2>
          </div>
          <div className="info-text">
            <p>
              The idea of organising QUITEL was born in Prof. Pullman&apos;s laboratory, situated on the 3rd floor of the Institute of Physico-Chemical Biology in Paris. This occurred during a friendly colloquy between Professors Pullman and Giuseppe Del Re. The topic of conversation was about the different assessments of the role of theoretical chemistry in Italy, France and countries like England and the United States.
            </p>
            <br />
            <p>
              Apparently, theoreticians are more interested in the meaning of numerical results in order to associate them with physical-chemical phenomena, than in the numbers themselves. However, there is a need to formulate in a clear way such numbers overcoming immediately the language barrier.
            </p>
            <br />
            <p>
              The alternatives were: adopt an uncomplicated language, accessible to all, or maintain the language of each researcher, increasing the ability to express ideas clearly, but running the risk of not being understood by the participants whose vernacular was not the same as that of the speaker. The final result of this dialogue was characterised by the necessary convergence, because, in fact, there was no communication barrier between the Latin-speaking researchers. Among them, scientific terms are very similar.
            </p>
            <br />
            <p>
              From this arose the idea of a meeting of French and Italian theorists, the organisation of which was proposed by Prof. Del Re from Italy, together with his collaborators, F. Momicchioli, A. Rastelli, B. Cadioli, L. Pincelli from Modena.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <Globe size={18} />
            <h2 className="info-title">The First Meeting</h2>
          </div>
          <div className="info-text">
            <p>
              The first meeting had been planned for 1968, but due to the political events of that time, it was postponed to the following year (1969). The participants were satisfied with the initiative, and there was an agreement for the next meeting in France, with the participation of Prof. Daudel and his Spanish colleagues, who also joined the 1970 meeting. After this meeting the QUI(CHI)TEL was held in Granada, Spain (1971).
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <Award size={18} />
            <h2 className="info-title">The Present</h2>
          </div>
          <div className="info-text">
            <p>
              The Meetings from then on alternated between Italy-France-Spain for a period of more than 30 years, when a change occurred through the participation of Belgium, Switzerland and Portugal. In function of the results obtained, Latin America (1974) and, in recent years, Africa have joined QUITEL, thus crowning this great initiative and creating the solid bases for its continuity.
            </p>
            <br />
            <p>
              Since 2006, QUITEL has alternated between Europe, Africa and America.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <Users size={18} />
            <h2 className="info-title">Committees</h2>
          </div>
        </motion.div>

        <CommitteeSection 
          title="Organizing Committee" 
          icon={Users}
          members={organizingCommittee} 
        />
        <CommitteeSection 
          title="Local Scientific Committee" 
          icon={Globe}
          members={localScientificCommittee} 
        />
        <CommitteeSection 
          title="International Scientific Committee" 
          icon={Award}
          members={internationalScientificCommittee} 
        />
      </div>

      <Footer />
    </motion.div>
  )
}

CommitteeSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired
};
