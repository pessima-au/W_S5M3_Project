function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const nav = document.createElement('nav');
    for (let i = 0; i < links.length; i++) {
      const anchor = document.createElement('a');
      anchor.href = links[i].href;
      anchor.textContent = links[i].textContent;
      anchor.title = links[i].title;
      nav.appendChild(anchor);
    }
    return nav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const learnerCard = document.createElement('div');
    learnerCard.className = "learner-card";
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');

    
    para1.textContent = learner.fullName;
    para2.textContent = `learner ID:${learner.id}`;
    para3.textContent = `Date of Birth: ${learner.dateOfBirth}`;
    const favoriteLanguage = languages.find(language => language.id === learner.favLanguage)
    if (favoriteLanguage) {
      para4.textContent = `Favorite Language: ${favoriteLanguage.name}`
    }


    learnerCard.appendChild(para1);
    learnerCard.appendChild(para2);
    learnerCard.appendChild(para3);
    learnerCard.appendChild(para4);


      learnerCard.addEventListener('click', evt => {
  
      const currentlyActive = document.querySelector('.active');
      if (currentlyActive && currentlyActive !== evt.currentTarget) {
        currentlyActive.classList.remove('active');
      }
        evt.currentTarget.classList.add('active');
      });
    
    
    return learnerCard

  }

 

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
     learners.forEach(learner =>  {
      const card = buildLearnerCard(learner, languages);
      document.querySelector('section').appendChild(card);
     });

  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
  const footer = document.createElement('footer');

    const div1 = document.createElement('div');
    div1.className = "campany-info";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    const anchor = document.createElement('a')
    anchor.href = `mailto:${footerData.contactEmail}`;
    anchor.textContent = footerData.contactEmail;
    
    p1.className = 'company-name';
    p1.textContent = footerData.companyName;

    p2.className = 'address';
    p2.textContent = footerData.address;

    p3.className = 'contact-email'
    p3.textContent = "Email: ";

    p3.insertAdjacentElement('beforeend', anchor);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);

    const div2 = document.createElement('div');
    div2.className = "social-media";

    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    a1.href = footerData.socialMedia.twitter;
    a1.innerText = 'Twitter'
    a2.href = footerData.socialMedia.facebook;
    a2.innerText = 'facebook'
    a3.href = footerData.socialMedia.instagram;
    a3.innerText = 'Instagram'
    div2.append(a1);
    div2.append(a2)
    div2.append(a3)
    

    const div3 = document.createElement('div');
    div3.textContent = `© ${footerData.companyName.toUpperCase()} 2024`;

    
    footer.appendChild(div1);
    footer.appendChild(div2);
    footer.appendChild(div3);

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  const section = document.querySelector('section');
  section.addEventListener('click', event => {
    const isActive = document.querySelector('.active');
    const card = event.target.closest('.learner-card');
    if (!card && isActive) {
    isActive.classList.remove('active');
   } else if (card) {
    card.classList.add('active');
   }

  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
