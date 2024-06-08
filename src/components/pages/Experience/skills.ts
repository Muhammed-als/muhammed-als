// skills.ts

export interface Skill {
    name: string;
    years: number;
    path: string;
}
import javaImage from '../../../assets/skills/java.png';
import springImage from '../../../assets/skills/spring.png';
import pythonImage from '../../../assets/skills/python.png';
import htmlcssjsImage from '../../../assets/skills/htmlcssjs.png';
import laravelImage from '../../../assets/skills/laravel.png';
import sqlImage from '../../../assets/skills/sql.png';
import reactImage from '../../../assets/skills/react.png';
import typescriptImage from '../../../assets/skills/Typescript.png';

const skills: Skill[] = [
    {
        name: "Java",
        years: 3,
        path: javaImage
    },
    {
        name: "Spring",
        years: 1,
        path: springImage
    },
    {
        name: "Python",
        years: 1.5,
        path: pythonImage
    },
    {
        name: "Html,CSS,JS",
        years: 2,
        path: htmlcssjsImage
    },
    {
        name: "Laravel",
        years: 2,
        path: laravelImage
    },
    {
        name: "SQL",
        years: 2,
        path: sqlImage
    },
    {
        name: "React",
        years: 1,
        path: reactImage
    },
    {
        name: "TypeScript",
        years: 1,
        path: typescriptImage
    }
];

export default skills;
