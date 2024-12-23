import shoppinghub from "./Project_images/shoppinghub.jpg"
import agrointel from "./Project_images/agrointel.png"
import trends from "./Project_images/trends-1.png"
import amazon from "./Project_images/amazon.png"
import eazyhome from "./Project_images/eazyhome.png"
import reno from "./Project_images/reno2.jpeg"
import imaginify from "./Project_images/1.png"

export default {
    "projects":{

        "React Native" :    [
        {
           "title":"Reno App - Restaurant Partner",
            "imgPath": reno,
            "description": "With Renoapp, restaurant owners gain access to a comprehensive suite of tools to streamline their operations and boost revenue like never before. From efficient capacity planning to dynamically priced offers, real-time booking and order management",
            "skills": ["React Native" , "Expo" , "RazorPay" , "PostgreSQL" , "Prisma" , "Firebase" , "NodeJS"  , "Express"],
            "ghLink": "https://github.com/dev-vikash2v7/Reno.git",
            "downloadLink" : "https://drive.google.com/file/d/1l5tWOJ5LfTMbKi9q2ZusYJwYjXHJjpH_/view?usp=drive_link",
            // "youtubeLink" : "https://youtu.be/JONvL4WXPA8"
        },
        {
            "title":"Shopping Hub",
            "imgPath": shoppinghub ,
            "description": "ShoppingHub is a feature-rich React Native ecommerce application that provides a seamless shopping experience for users. It comes with a robust authentication system integrated with Google and Firebase, as well as versatile payment options including Stripe and UPI.",
            "skills": ["React Native" , "Firebase" , "Stripe Payment", "Google Auth"  ],
            "ghLink": "https://github.com/dev-vikash2v7/ShoppingHub-RN-Ecom-App",
            "downloadLink" : "https://drive.google.com/file/d/1l5tWOJ5LfTMbKi9q2ZusYJwYjXHJjpH_/view?usp=drive_link",
            "youtubeLink" : "https://youtu.be/JONvL4WXPA8"
        },
        {
            "title":"AgroIntel Pro",
            "imgPath": agrointel,
            "description": "AgroIntel Pro is a Smart Farming Mobile Application is a cutting-edge approach to farming that leverages technology to optimize crop production while conserving resources. This project report discusses the development and implementation of a Smart Crop, Fertilizer, and Disease Predictor System.",
            "skills": ["React Native"  , "JavaScripts" ,"Python", "Machine Learning"],
            "ghLink": "https://github.com/dev-vikash2v7/AgroIntelPro-RN-App",
            "downloadLink" : "https://drive.google.com/file/d/1lb27OthyK7G_qXZ6Tlf-pv3zxKuFTxff/view?usp=sharing",
            "youtubeLink" : " https://www.youtube.com/watch?v=og0QWx-D6X4"
        }, 
    ],

    
    "ReactJS" :[
        {
            "title":"EazyHome - Real Eastate Website",
            "imgPath": eazyhome,
            "description": "EazyHome is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to simplify the process of browsing and booking properties.The website allows users to view available properties, book them securely, and receive project details via email",
            "skills": ["NodeJs" , "MongoDB" , "Express.JS" , "ReactJs"  , "Stripe"],
            "ghLink": "https://github.com/dev-vikash2v7/Real-Estate-Frontented-With-React.git",
            "demoLink" : "https://eazyhome.netlify.app/"

        },
        {
            "title":"Trends - Ecommerce platform",
            "imgPath": trends,
            "description": "Trends is a modern and user-friendly e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website allows users to explore trending products and make purchases securely using the Stripe payment system.",
            "skills": ["NodeJs" , "MongoDB" , "Express.JS" , "ReactJs"  , "Stripe"],
            "ghLink": "https://github.com/dev-vikash2v7/TRENDS--ReactJS-Ecommerce-Website",
            "demoLink" : "https://trends-ecommerce.vercel.app"

        },
        {
            "title":"Amazon Clone",
            "imgPath": amazon,
            "description": "This Amazon-clone is a full-stack e-commerce website created using the MERN Stack (MongoDB, Express, React, Node.js).It includes user authentication using Firebase, product ordering, and Stripe payment processing. ",
            "skills": ["ReactJs" , "HTML" , "CSS" , "JavaScript" , "Firebase"],
            "ghLink": "https://github.com/dev-vikash2v7/amazon-clone",
            "demoLink" : "https://vk-amazon-clone.netlify.app/"
        },
    ],
    "NextJS" :[
        {
            "title":"Imaginify - An AI SaaS Platform",
            "imgPath": imaginify,
            "description": "Built with Next.JS librarry is an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure and offers advanced image search functionalities.",
            "skills": ["Next.js","TypeScript","MongoDB","Clerk","Cloudinary","Stripe","TailwindCSS"],
            "ghLink": "https://github.com/dev-vikash2v7/imaginify-NextJS_SaaS",
            "demoLink" : "https://imaginify-saas129.vercel.app/"
        },
      
    ]
}

}

