const characters = {
    competitions: ['power', 'humor', 'charisma', 'depth', 'intelligence'],
    movies: ['Iron Man', 'Superman', 'Black Widow', 'Batman', 'Darth Vader', 'Gandalf', 'James Bond', 'Harry Potter', 'Voldemort', 'Captain America', 'Indiana Jones', 'Optimus Prime', 'Yoda', 'Wolverine', 'Spider Man'],
    shows: ['Joey Tribbiani', 'Chandler Bing', 'Rachel Green', 'Jake Peralta', 'Captain Holt', 'Michael Scott', 'Yoo Jaesuk', 'Lee Kwangsoo', 'Kim Jungkook', 'Kang Hodong', 'Kim Heechul', 'Lee Soogeun'],
    anime: ['Eren Yeager', 'Mikasa Ackermann', 'Levi Ackermann', 'Light Yagami', 'Tanjiro Kamado', 'Saitama', 'Norman', 'Edward Elric', 'Naruto Uzumaki', 'Sasuke Uchiha', 'Itachi Uchiha', 'Rengoku Kyojuro']
}

const randomGenerator = num => {
    return Math.floor(Math.random() * num);
}

let message = [];
for (let prop in characters) {
    let optionNumber = randomGenerator(characters[prop].length);
    switch(prop) {
        case 'competitions':
            message.push(`Out of these 3 characters, who has the most ${characters[prop][optionNumber]}?`);
            break;
        case 'movies':
            message.push(`1. ${characters[prop][optionNumber]}`);
            break;
        case 'shows':
            message.push(`2. ${characters[prop][optionNumber]}`);
            break;
        case 'anime':
            message.push(`3. ${characters[prop][optionNumber]}`);
            break;
        default:
            message.push('Not enough info');
    }
}

const formatMessage = () => {
    const formatted = message.join('\n');
    console.log(formatted);
}

formatMessage(message);