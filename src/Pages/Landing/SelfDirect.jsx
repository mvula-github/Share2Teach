/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';
import "./SelfDirect.css";

    const subs = [
        {
            title: 'English',
            links: [
                {name: 'Types of Nouns', url: 'https://www.youtube.com/watch?v=AQNFJVdmklA'},
                {name: 'Adjectives', url: 'https://www.youtube.com/watch?v=LiYxv0vudmc'},
                {name: 'Tenses', url: 'https://www.youtube.com/watch?v=MwQdQI7valM' },
                {name: 'Prepositions', url: 'https://www.youtube.com/watch?v=XzkbcWh8s4w'},
                {name: 'Verbs', url: 'https://www.youtube.com/watch?v=vA-uEPEHU_M'},
                {name: 'Conjunctions', url: 'https://www.youtube.com/watch?v=Lc_tEiy_B7U'},

            ],
        },

        {
            title: 'Afrikaans',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Voegwoorde', url: 'https://www.youtube.com/watch?v=ASjpEhZ7gqc'},
                {name: 'Woordorde/STOMPI', url: 'https://www.youtube.com/watch?v=Y1GtwA-Zwhk'},
                {name: 'Lydende en bedrywende vorm', url: 'https://www.youtube.com/watch?v=sqSuXyeRa5o'},
                {name: 'Opsomming', url: 'https://www.youtube.com/watch?v=prpt3owS7Ow'},
                {name: 'Wenke vir begripstoets', url: 'https://www.youtube.com/watch?v=vSqMYLzDYb4'},
                {name: 'Verkleining', url: 'https://www.youtube.com/watch?v=EycW0X_zAb8'},
                {name: 'Trappe van vergelyking', url: 'https://www.youtube.com/watch?v=Yw9IbVeGMkI' }
            ],
        },

        {
            title: 'Mathematics',
            links: [
                {name: 'Addition by counting', url: 'https://www.youtube.com/watch?v=VScM8Z8Jls0'},
                {name: 'Multiples', url: 'https://www.youtube.com/watch?v=yLC0qfXvQSE'},
                {name: 'Multiplying fractions', url: 'https://www.youtube.com/watch?v=-sxfriO_IV0'},
                {name: 'Long division', url: 'https://www.youtube.com/watch?v=NaECBQhTaCU'},
                {name: 'Impact on median & mean when removing values', url: 'https://www.youtube.com/watch?v=-2OOBEBq9-4&list=PLSQl0a2vh4HBeeP_1yWmG1mB2uGT08N4J'},
                {name: 'Factoring quadratics', url: 'https://www.youtube.com/watch?v=1kfq0aR3ASs&list=PLSQl0a2vh4HDQaRSMRDogXah5idlFCp5G&index=8'},
                {name:'Finding the vertex of a parabola', url: 'https://www.youtube.com/watch?v=IbI-l7mbKO4&list=PLSQl0a2vh4HDQaRSMRDogXah5idlFCp5G&index=58'},
                {name: 'Trigonometry', url: 'https://www.youtube.com/watch?v=G-T_6hCdMQc&list=PLSQl0a2vh4HDQaRSMRDogXah5idlFCp5G&index=48'}
            ],
        },

        {
            title: 'Mathematical Literacy',
            links: [
                {name: 'Calculate simple and compound interest', url: 'https://www.youtube.com/watch?v=pn2Fx9-G1Ds'},
                {name: 'Percentage change', url: 'https://www.youtube.com/watch?v=d1FvxMgwUS8&list=PLFvggcIFLvCmr0MaQjzhK3bEO62LOWiBC&index=2'},
                {name: 'Ratio', url: 'https://www.youtube.com/watch?v=PFnV9tDpI64&list=PLFvggcIFLvCmr0MaQjzhK3bEO62LOWiBC&index=8'},
                {name: 'Area of circles', url: 'https://www.youtube.com/watch?v=CvtYJ2wH4GY&list=PLFvggcIFLvCmr0MaQjzhK3bEO62LOWiBC&index=23'},
                {name:' Measurement', url: 'https://www.youtube.com/watch?v=IFse9h7EwZM'}
            ],
        },

        
        {
            title: 'Natural Sciences & Technology',
            links: [
                {name: 'Living and non-living things', url: 'https://www.youtube.com/watch?v=O5JcgvNARzc'},
                {name: 'Matter and materials', url: 'https://www.youtube.com/watch?v=QQsybALJoew'},
                {name: "Ohm's law", url: 'https://www.youtube.com/watch?v=O-dG_M5azD4'},
                {name: 'Types of forces', url: 'https://www.youtube.com/watch?v=TgEoelQX1oE'}

            ],
        },

        
        {
            title: 'Economic and Management Sciences',
            links: [
                {name: 'Bartering', url: 'https://www.youtube.com/watch?v=un81ScD8N30'},
                {name: 'Economics and entrepreneurship', url: 'https://www.youtube.com/watch?v=5tSxEo8mFuw'},
                {name: 'The business plan concept', url: 'https://www.youtube.com/watch?v=5tSxEo8mFuw'}
            ],
        },

        {
            title: 'Physical Sciences',
            links: [
                {name: 'Waves & electricity', url: 'https://www.youtube.com/watch?v=nnSLOD7jajg'},
                {name: 'Momentum and impulse', url: 'https://www.youtube.com/watch?v=GrjMbTN_DVU'},
                {name: 'Vertical projectile motion', url: 'https://www.youtube.com/watch?v=Kpisbb-KVCc'},
                {name: "Newton's laws", url: 'https://www.youtube.com/watch?v=T1ONXrPQN8E'}
            ],
        },

        {
            title: 'Life Sciences',
            links: [
                {name: 'Instroduction to DNA structure', url: 'https://www.youtube.com/watch?v=4u8nC8BAq9s'},
                {name: 'Protein synthesis', url: 'https://www.youtube.com/watch?v=ej1CVV7_en4'},
                {name: 'Mitosis', url: 'https://www.youtube.com/watch?v=anhjrx6OjMo'},
                {name: 'The human nervous system', url: 'https://www.youtube.com/watch?v=anhjrx6OjMo'},
                {name: 'Neurons', url: 'https://www.youtube.com/watch?v=11-8ecpwOXs'}
            ],
        },

        {
            title: 'History',
            links: [
                {name: 'The success and failures of the league of nations', url: 'https://www.youtube.com/watch?v=KgDIG874PFQ'},
                {name: 'Civil resistance in SA', url: 'https://www.youtube.com/watch?v=M3DtccVQNUk&list=PLtTo1wjluY3cKq9Sz7TR26kkGvPq7FpSd'},
                {name: 'Interpretation of historical info', url: 'https://www.youtube.com/watch?v=YIB-30OYkrM&list=PLtTo1wjluY3cKq9Sz7TR26kkGvPq7FpSd&index=7'},
                {name: 'The Vietnam war', url: 'https://www.youtube.com/watch?v=YIB-30OYkrM&list=PLtTo1wjluY3cKq9Sz7TR26kkGvPq7FpSd&index=7'},
                {name: 'The coming of democracy in SA', url: 'https://www.youtube.com/watch?v=iOeOWRbu4ZM'}
            ],
        },

        
        {
            title: 'Computer Applications Technology',
            links: [
                {name: 'File management', url: 'https://www.youtube.com/watch?v=0V250qR6-BI'},
                {name: 'introduction to Formmulas', url: 'https://www.youtube.com/watch?v=m7x0dmqk-CI&list=PLxAS51iVMjv_DB64RjSQrGestsoBG3XP5&index=3'},
                {name: 'Data types', url: 'https://www.youtube.com/watch?v=XjsTd8JuO7w&list=PLxAS51iVMjv_DB64RjSQrGestsoBG3XP5'},
                {name: 'Find & replace', url: 'https://www.youtube.com/watch?v=pGvfla5qZG4&list=PLxAS51iVMjv9ogMIosoP5JOb-0-Quq3TB&index=2'},
                {name: 'Absolute cell refencing', url: 'https://www.youtube.com/watch?v=KbjPqInS4lY'}
            ],
        },

        {
            title: 'Information Technology',
            links: [
                {name: 'Delphi - truncated and overflow', url: 'https://www.youtube.com/watch?v=tmZU8R3l0es&list=PLh_doCiDoRNKoXNak-SndQT6II0QVXjNQ'},
                {name: 'Develop a login application in Delphi', url: 'https://www.youtube.com/watch?v=eUN-IoPALeQ'},
                {name: 'Connecting Delphi to an Access database', url: 'https://www.youtube.com/watch?v=Ng6tQKTixds&t=114s'},
                {name: 'B input devices', url: 'https://www.youtube.com/watch?v=Q0iXO1DEzQ4&list=PLFQ-xGtoymjJ9yRu9ppfCloxjYf0lDnlg&index=3'},
                {name: 'How to write algorithms', url: 'https://www.youtube.com/watch?v=7BJd7HH1dRA&list=PLFQ-xGtoymjJ9yRu9ppfCloxjYf0lDnlg&index=14'}
            ],
        },

        {
            title: 'Economics',
            links: [
                {name: 'Business Cycle: Fiscal and monetary policy', url: 'https://www.youtube.com/watch?v=_i6fgaVFA48&list=PLoq42N99wMlVNDAglrGy3AFHS8594Mnbv&index=2'},
                {name: "Philip's curve/Aggregate demand curve", url: 'https://www.youtube.com/watch?v=wmnXb8eGwYM&list=PLoq42N99wMlVNDAglrGy3AFHS8594Mnbv'},
                {name: 'Dynamic of markets curves', url: 'https://www.youtube.com/watch?v=hmekmQaij3I&list=PLoq42N99wMlVNDAglrGy3AFHS8594Mnbv&index=6'},
                {name: 'Perfect competition', url: 'https://www.youtube.com/watch?v=B_49lQxwMaM'},
                {name: 'Circular flow', url: 'https://www.youtube.com/watch?v=MPzjhVl3AKU&list=PLoq42N99wMlVNDAglrGy3AFHS8594Mnbv&index=3'}
            ],
        },

        {
            title: 'Accounting',
            links: [
                {name: 'Theory on bank reconciliation', url: 'https://www.youtube.com/watch?v=nJTlrx7TjyM&list=PLgra_1Sxf7WIIuj3cYSjlwKYHqmqLdx8e'},
                {name: 'Cash journals, bank account and bank reconciliation statement', url: 'https://www.youtube.com/watch?v=cBA79Ha-LnQ&list=PLgra_1Sxf7WIIuj3cYSjlwKYHqmqLdx8e&index=10'},
                {name: 'Bank reconciliation, subsidiary journals and bank account', url: 'https://www.youtube.com/watch?v=ffzkfzC0nbk&list=PLgra_1Sxf7WIIuj3cYSjlwKYHqmqLdx8e&index=12'},
                {name: 'Corrections & ommisions done for bank reconciliation', url: 'https://www.youtube.com/watch?v=1gp5JUisWk0&list=PLgra_1Sxf7WIIuj3cYSjlwKYHqmqLdx8e&index=11'},
                {name: 'Bank reconciliation and debtors reconciliation', url: 'https://www.youtube.com/watch?v=hmao-e-avoU&list=PLgra_1Sxf7WIIuj3cYSjlwKYHqmqLdx8e&index=21'},
                {name: 'Intro into recording accounting transactions', url: 'https://www.youtube.com/watch?v=yqwAA55y9yU'}
            ],
        },


    ];

const SelfDirect = () => {
  return (
    <div>
      <h1 className="heading">Self-Directed Learning page</h1>

      <p className="paragraph">
        Welcome to the self-directed landing page. In this page, you will find a
        collection of videos based on the subject you are learning with
        corresponding topics. Click on the topics below to direct you to helpful
        YouTube videos and get ready to learn.
      </p>
      {subs.map((sub, index) => (
        <div key={index} className="subs">
          <h2 className="subsTitle">{sub.title}</h2>
          <ul className="linkList">
            {sub.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SelfDirect;
