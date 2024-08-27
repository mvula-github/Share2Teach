import React from 'react';
import "/.SelfDirect.css";

const SelfDirect = () => {
    const subs = [
        {
            title: 'English',
            links: [
                {name: 'Nouns', url: ''},
                {name: 'Nouns', url: ''}
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


    ]
}


return (
    <div className='container'>
        <h1 className='heading'>Self-directed Learning</h1>
        {SelfDirect.map((sub, index) => (
            <div key = {index} className='subs'>
                <h2 className='subsTitle'>{sub.title}</h2>
                <ul className='linkList'>
                    {subject.links.map((link, i) =>(
                        <li key = {i}>
                            <a href = {link.url} target = "blank" rel = "noopener noreferrer"> {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ))};

    </div>
);


export default SelfDirect;