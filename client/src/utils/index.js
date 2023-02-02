// utility files are function which you can be reused across the applications.

import { surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * (surpriseMePrompts.length - 1));
    const randomPrompt = surpriseMePrompts[randomIndex];

    // check if random prompt being generated has been generated previously
    if (randomPrompt === prompt) {
        return getRandomPrompt(prompt);

    }
    return randomPrompt
}