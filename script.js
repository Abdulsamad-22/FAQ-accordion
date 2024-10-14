const faqButton = document.querySelectorAll('.add-icon')

const response = document.querySelectorAll('.faq-response');

// Holds all faq responses and store them
const faqResponses = [`Frontend Mentor offers realistic coding challenges to help developers improve their 
frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
all levels and ideal for portfolio building.`,
`Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
option providing access to a range of projects suitable for all skill levels.`,
`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
way to showcase your skills to potential employers!`,
`The best place to get help is inside Frontend Mentor's Discord community. There's a help 
channel where you can ask questions and seek support from other community members.`];

faqButton.forEach((button, index) => {
    button.addEventListener('click', () => {

        //Toggle between plus and minus icons
        if (button.src.match ('assets/images/icon-plus.svg')) {
            //change to minus and display response
            button.src = 'assets/images/icon-minus.svg';
            response[index].textContent = faqResponses[index];

        } else if (response[index].textContent !== '') {
            //change to plus and hide response 
            button.src = 'assets/images/icon-plus.svg';
            response[index].textContent = '';
        }
    });
});