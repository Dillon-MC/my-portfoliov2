import smartbrainIcon from '../../images/smartbrain.jpg';
import robofriendsIcon from '../../images/robofriends.jpg';
import backgroundGeneratorIcon from '../../images/backgroundGenerator.jpg';
import pokefinderIcon from '../../images/pokefinder.jpg';
import blockchaindemoIcon from '../../images/blockchaindemo.jpg';

interface ProjectItemProps {
    name: string,
    icon: string
    description: string
    liveLink: string,
    repoLink: string
}

export const Projects:Array<ProjectItemProps> = [
    {
        name: 'Smart-Brain',
        icon: smartbrainIcon,
        description: 'Smart brain is a web app that will detect faces in images, using the Clarifai API.\n'
            +'It also uses a Postgress database to store users, as well as a redis database to cache user sessions.',
        liveLink: 'https://smart-brain-face-recognizer.herokuapp.com/',
        repoLink: 'https://github.com/Dillon-MC/Smart-Brain-Face-Recognizer',

    },
    {
        name: 'Blockchain-Demo',
        icon: blockchaindemoIcon,
        description: 'Fully functioning demo of a blockchain.',
        liveLink: 'https://dillon-mc.github.io/blockchain-demo/',
        repoLink: 'https://github.com/Dillon-MC/blockchain-demo',
    },
    {
        name: 'Pokéfinder',
        icon: pokefinderIcon,
        description: 'Find stats on any pokemon by just typing its name! Uses the pokeapi.',
        liveLink: 'https://dillon-mc.github.io/Pokefinder/',
        repoLink: 'https://github.com/Dillon-MC/Pokefinder',
    },
    {
        name: 'Robofriends',
        icon: robofriendsIcon,
        description: 'Robofriends uses an API to generate random robots to be your friend.',
        liveLink: 'https://dillon-mc.github.io/robofriends/index.html',
        repoLink: 'https://github.com/Dillon-MC/robofriends',
    },
    {
        name: 'Background generator',
        icon: backgroundGeneratorIcon,
        description: 'Create gradient backgrounds,\n ' + 'or generate a random one for your website.',
        liveLink: 'https://dillon-mc.github.io/background-generator.github.io/',
        repoLink: 'https://github.com/Dillon-MC/background-generator.github.io',
    },
]