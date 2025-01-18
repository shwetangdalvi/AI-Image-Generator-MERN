import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if( randomPrompt === prompt ) {
        return getRandomPrompt(prompt);
    }
}