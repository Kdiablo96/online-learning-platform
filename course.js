const results = [
    { name: 'Guided Web Development Projects', url: 'https://www.edx.org/learn/computer-science/ibm-guided-project-web-development-w-html-css-for-beginners?index=product&queryID=2f0ed6fa72bf963ea650b2bc5385bd5c&position=2&results_level=first-level-results&term=web+development+basics&objectID=course-40eabb04-17b3-430d-85e8-3f2ef697417e&campaign=Guided+Project%3A+Web+Development+w%2F+HTML+%26+CSS+for+Beginners&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch' },
    { name: 'Data Analytics for Business', url: 'https://www.edx.org/learn/data-analysis/ibm-data-analytics-basics-for-everyone?index=product&queryID=460c326d39149df30d1707fa8a5780f5&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Digital Marketing Strategies', url: 'https://www.edx.org/learn/digital-marketing/the-university-of-edinburgh-digital-marketing-strategy?index=product&queryID=b3d661da31ed433f9ddb10d91e4b13cb&position=5&linked_from=autocomplete&c=autocomplete' },
    { name: 'Introduction to Cybersecurity', url: 'https://www.edx.org/learn/cybersecurity/university-of-washington-introduction-to-cybersecurity?index=product&queryID=0562702679ee7d64413d0a2c98597470&position=2&linked_from=autocomplete&c=autocomplete' },
    { name: 'Project Management Fundamentals', url: 'https://www.edx.org/executive-education/uct-project-management-foundations-an-organisational-perspective-online-short-course?index=product&queryID=257abe5096a8cef3e64f29e41ee05c04&position=1&linked_from=autocomplete&c=autocomplete' },
    { name: 'E-commerce Fundementals', url: 'https://www.linkedin.com/learning/ecommerce-fundamentals-22614472?trk=learning-serp_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning' },
    { name: 'AI: Cloud Computing Foundations', url: 'https://www.edx.org/learn/cloud-computing/pragmatic-ai-labs-cloud-computing-foundations?index=product&queryID=00cc4dd5ff6da0fb3cafe26d56fe7b38&position=8&linked_from=autocomplete&c=autocomplete' },
    { name: 'Entrepreneurship And Innovations', url: 'https://www.edx.org/certificates/professional-certificate/usmx-innovation-and-entrepreneurship?index=product&queryID=8c7ebb9929fd2c1f1b7383c79fa33105&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Business Analytics for Decision Making', url: 'https://www.edx.org/learn/business-analytics/boston-university-business-analytics-for-data-driven-decision-making?index=product&queryID=70429653a2ddfae1cc98f7fd9204c16e&position=8&linked_from=autocomplete&c=autocomplete' },
    { name: 'Introduction to Machine Learning', url: 'https://www.edx.org/executive-education/the-london-school-of-economics-and-political-science-machine-learning-practical-applications?index=product&queryID=726749a7a383886f6457c75b4c042b7a&position=2&linked_from=autocomplete&c=autocomplete' },
    { name: 'Social Media Marketing for Businesses', url: 'https://www.edx.org/learn/social-media-marketing/boston-university-strategic-social-media-marketing?index=product&queryID=c1027e7aefb506e7b337e003b5eb8b30&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Financial Management for Startups', url: 'https://www.edx.org/executive-education/university-of-cape-town-fundamentals-of-financial-management?index=product&queryID=2f5836893bb36dfb45f08b45795429b8&position=1&linked_from=autocomplete&c=autocomplete' },
    { name: 'Mobile App Development with React Native', url: 'https://www.edx.org/learn/react-native/harvard-university-cs50-s-mobile-app-development-with-react-native?index=product&queryID=0a04b306f0f562141f727b4af562aaec&position=1&linked_from=autocomplete&c=autocomplete' },
    { name: 'User Experience Design', url: 'https://www.edx.org/learn/ux-design/hec-montreal-ux-design?index=product&queryID=1686396257078dab6f7b0748e3111333&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Business Intelligence and Data Analytics', url: 'https://www.edx.org/learn/business-intelligence/arizona-state-university-asu-business-intelligence-and-data-analytics?index=product&queryID=ca8c2d059c9b35af2e97f35994114c8b&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Technical SEO ', url: 'https://www.linkedin.com/learning/technical-seo-24379762?trk=learning-serp_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning' },
    { name: 'Virtual and Hybrid Team Management', url: 'https://www.edx.org/learn/business-administration/university-of-adelaide-manage-virtual-and-hybrid-teams?index=product&queryID=7c6590a2ae0826a3ede2572d778aa508&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Blockchain Basics for Business', url: 'https://www.edx.org/certificates/professional-certificate/sda-bocconi-blockchain-for-business?index=product&queryID=60f258c98689fe5ccfdbcab164ee0468&position=7&linked_from=autocomplete&c=autocomplete' },
    { name: 'Ethical Hacking Essentials', url: 'https://www.edx.org/learn/information-security/ec-council-ethical-hacking-essentials-ehe?index=product&queryID=92c51c4469c61e6ac93b1bd93fb3dc88&position=2&linked_from=autocomplete&c=autocomplete' },
    { name: 'Network Security', url: 'https://www.edx.org/learn/network-security/rochester-institute-of-technology-network-security?index=product&queryID=4fa1b90396f23f60f1191df6c6cf6cbb&position=3&linked_from=autocomplete&c=autocomplete' },
    { name: 'Data Privacy Regulations and Compliance', url: 'https://www.linkedin.com/learning/privacy-governance-and-compliance-data-classification-and-inventory?trk=learning-serp_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning' },
    { name: 'Creativity and Entrepreneurship', url: 'https://www.edx.org/learn/entrepreneurship/berklee-college-of-music-creativity-entrepreneurship?index=product&queryID=d384f651e789b0f85772f61cc8cbb527&position=2&linked_from=autocomplete&c=autocomplete' },    
    { name: "Data Science", url: "https://www.edx.org/learn/data-science/ibm-introduction-to-data-science?index=product&queryID=4b7bf33198cf1122017cedb5121a3462&position=4&linked_from=autocomplete&c=autocomplete" },
    { name: "Machine Learning", url: "https://www.edx.org/learn/machine-learning/the-georgia-institute-of-technology-machine-learning?index=product&queryID=36a22a030bbfafdceb79e18c5f8e539b&position=7&linked_from=autocomplete&c=autocomplete" },
    // ...additional course entries
];

const inputBox = document.getElementById("course-search");
const resultBox = document.querySelector(".result-box");

inputBox.addEventListener("keyup", function() {
    let input = inputBox.value;
    if (input.length) {
        let filteredResults = results.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
        display(filteredResults);
    } else {
        resultBox.innerHTML = '';
    }
});

function display(results) {
    const content = results.map(item => {
        return `<li><a href="${item.url}" ${item.url.startsWith('#') ? '' : 'target="_blank"'} class="result-link">${item.name}</a></li>`;
    }).join('');
    
    resultBox.innerHTML = "<ul>" + content + "</ul>";
    resultBox.style.display = content.length ? 'block' : 'none'; // Show/hide based on results
}
