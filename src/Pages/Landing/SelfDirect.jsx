/* eslint-disable no-unused-vars */
import React from 'react';
import "./SelfDirect.css";

const SelfDirect = () => {
    const subs = [
        {
            title: 'English',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Verbs', url: ''}
            ],
        },

        {
            title: 'Afrikaans',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Mathematics',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Mathematical Literacy',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Technical Mathematics',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ]
        },

        {
            title: 'Life Skills',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Life Orientation',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Natural Sciences',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Social Sciences',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Technology',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Economic and Management Sciences',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Physical Sciences',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Life Sciences',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'History',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Geography',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Tourism',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Computer Applications Technology',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Information Technology',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Economics',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Accounting',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },

        {
            title: 'Business Studies',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
            ],
        },


    ];



    return (
        
        <div>
            <h1 className='heading'>Self-Directed Learning page</h1>

            <p className='paragraph'>Welcome to the self-directed landing page. In this page, you will find a collection of videos based on the subject you are learning with corresponding topics. Click on the topics below to direct you to helpful YouTube videos and get ready to learn.</p>
            {subs.map((sub, index) => (
                <div key={index} className='subs'>
                    <h2 className='subsTitle'>{sub.title}</h2>
                    <ul className='linkList'>
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
}


export default SelfDirect;