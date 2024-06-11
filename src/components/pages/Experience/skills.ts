// skills.ts

export interface Skill {
    name: string;
    years: number;
    path: string;
    description: string
}
import javaImage from '../../../assets/skills/java.png';
import springImage from '../../../assets/skills/spring.png';
import pythonImage from '../../../assets/skills/python.png';
import htmlcssjsImage from '../../../assets/skills/htmlcssjs.png';
import laravelImage from '../../../assets/skills/laravel.png';
import sqlImage from '../../../assets/skills/sql.png';
import reactImage from '../../../assets/skills/react.png';
import typescriptImage from '../../../assets/skills/Typescript.png';
import dockerImage from "../../../assets/skills/docker.png";
import asteroid from "../../../assets/images/asteroid.png";
import connection_security from "../../../assets/images/connection_security.png";
import viterbiAlgorithm from "../../../assets/images/ai.png";
import cookies from "../../../assets/images/cookies.png";
import paymentSystem from "../../../assets/images/payment_system.png";
import paymentSystem_2 from "../../../assets/images/payment_system_2.png";
import webApplication from "../../../assets/images/web_application.png";
import reactNative from "../../../assets/images/react_native_app.png";
import typeScriptTypes from "../../../assets/images/ts_types.png";
import dockerCompose from "../../../assets/images/docker_compose.png";


const skills: Skill[] = [
    {
        name: "Java",
        years: 3,
        path: javaImage,
        description: `
        <p>Java is a high-level, class-based, object-oriented programming language. I started learning it at the first semester in my study at SDU, where it was the most programming language we have focused on during the first 4 semesters. 
        We have also learned how the component-based system works, where the Astreoid is implemeneted using the component-based system and the open source game development application framework is used.</p> <br>
        <img src=${asteroid} alt="Asteroid"/>
        The purpose of this game was to learn how to implement a fexiable and resuable system using the component-based system, where each entity is seperated into individual components to make sure that components are independent, encapsulated and can updated or removed without recompilation.
        `
    },
    {
        name: "Spring",
        years: 1,
        path: springImage,
        description: `
        <p>
        Spring is a powerful framework for building Java applications. I started using this framework at the third semester, where the Microservice architectural pattern was used to implement a system, where each group was responsible for a specific area in the system. We was responsible for the Connection Security area, where we 
        had to ensure that authentication and authorization working perfectly. We have worked together to fullify the requirments. However, there were some functional requirements that are impelemented invidually. 
        </p>
        <img src=${connection_security} alt="Connection Security"/> 
        <p>
            I was responsble for the web security configuration, where I had to authorize the users and give them the correct permissions.
        </p>
        `
        
    },
    {
        name: "Python",
        years: 1,
        path: pythonImage,
        description: `
        <p>
            Python is a high-level, general-purpose programming language. I started using Python slightly when I was in high school, where a small game is implemented as a final exam project. At SDU, we started using Python in the fourth semester, where we had an artifical intelligance subject. The subject was aimed to give an understanding
            of how to implement different AI algorithms and not to use some implemented libraries.  
        </p>
        <img src=${viterbiAlgorithm} alt="Viterbi Algorithm" />
        <p>
        This function is the implementation of the Viterbi Algorithm. The function has 4 inputs. The states, observations, transitions, and emissions.
        </p>
        `
    },
    {
        name: "Html,CSS,JS",
        years: 2,
        path: htmlcssjsImage,
        description: `
        <p>
            Html, CSS, and JavaScript are the building blocks of web development. I started building websites when I as in high school, where a small website is created. At the third semester in SDU, I gained much more experience in web development. 
        </p>
        <img src=${cookies} alt="Cookies"/>
        <p>
            The provided figure is an implementation of the cookies function, where confirmation or rejection of cookies will be stored for one year.
        </p>
        `
    },
    {
        name: "Laravel",
        years: 2,
        path: laravelImage,
        description: `
        <p>
        Laravel is a backend framework that is based on PHP. I started learning it at the third semester. We have learned the basics in Laravel, such as creating a user, make CRUD operations on data and so on. However, I have individually used Laravel to learn about middlewares, Cron jobs and other new things.
        </p>
        <div>
            <img src=${paymentSystem} alt="Payment system"/>
            <img src=${paymentSystem_2} alt="Payment system"/>
        </div>
        <p>
            One of the new things I have tried was integrating with Stripe to create a payment system, where a user can pay to a plan and when checking out, the user will recieve a confirmation email with an invoice.
        </p>
        `
    },
    {
        name: "SQL",
        years: 2,
        path: sqlImage,
        description: `
        <p>
            SQL is a domain-specific language used in programming and designed for managing data. I started using SQL in my second semester, where we have learned about PostgreSQL. However, when developing a website, then I use more MySQL, as it is more popular and easier to work with in web development, as I use phpMyAdmin as my local database.
        </p>
        `
    },
    {
        name: "React",
        years: 1,
        path: reactImage,
        description: `
            <p>
                React is a JavaScript library, that I started using in my fifth semester, where a small website is implemented and React was the frontend framework that we used. <br>
                In my fifth semester we have also used React Native to create a cross-platform mobile application.
            </p>
            <div>
                <img src=${webApplication} alt="Web application"/>
                <br>
                <img src=${reactNative} alt="React Native app"/>
            </div>
        `
    },
    {
        name: "TypeScript",
        years: 1,
        path: typescriptImage,
        description: `
        <p>
            TypeScript is a strict syntactical superset of JavaScript that adds static typing. I have used TypeScript together with React to add types and define class or interfaces.
        </p>
        <img src=${typeScriptTypes} alt="TypeScript types"/>
        `
    },
    {
        name: "Docker",
        years: 2,
        path: dockerImage,
        description: `
        <p>
            Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. I have used Docker to build images and create containers. However, I have mostly used Docker beside the web development to 
            create Docker Compose configuration file to run multi-container Docker applications, which are the localhost database on port 3306 and the phpmyadmin Docker image to provide a web-based interface for managing MySQL databases.
        </p>
        <img src=${dockerCompose} alt="Docker Compose"/>
        `
    }
];

export default skills;
