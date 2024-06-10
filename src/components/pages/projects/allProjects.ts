export interface Project{
    name: string;
    tools: string;
    path: string;
    description: string;
}
import dyslexia from "../../../assets/projects/dyslexia/dyslexia.png"; 
import simulatorIsActivated from "../../../assets/projects/dyslexia/dyslexiaIsActivated.png"; 
import speak from "../../../assets/projects/dyslexia/speak.png"; 
import textSettings from "../../../assets/projects/dyslexia/text.png"; 

const projects: Project[] = [
    {
        name: "Dyslexia Simulator",
        tools: "HTML,CSS,JS,React",
        path: dyslexia,
        description: `
        <p>
            <strong>Repository: </strong> <a href="https://github.com/Muhammed-als/Dyslexia-Simulator">https://github.com/Muhammed-als/Dyslexia-Simulator</a><br>
            This project is an Chrome-extension that aims to give a better understanding of dyslexia and its types by simulating the presented text on a site.
            The User can select a specific dyslexia type and adjust the difficulty. When clicking on the start button, the presented text will become challenging to read.
        </p>
        <img src=${simulatorIsActivated} alt="Dyslexia Simulator" />
        <p>
            The extension will also provide two digital aids that can help dyslexics people with their daily challenges. The first digital aid is is the text-to-speech (TTS) aid, which will speak a specific text input or the presented text on a site.
            The other aid is, where the user can change  text appearance settings on a site, for instance color and size adjustments.
        </p>
        <img src=${speak} alt="Dyslexia Simulator" />
        <br>
        <img src=${textSettings} alt="Dyslexia Simulator" />
        ` 
    }
]
export default projects;