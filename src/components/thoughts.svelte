
<script>
    import '../app.css';
    const randomThoughts = [
        "What is a chicken?",
        "What is a dog?",
        "What is a cat?",
        "What is a cow?",
        "Can pigs actually fly?",
        "If you're on this page, you probably made a mistake somewhere",
        "I'm not sure what you're looking for",
        "The internet is a big place",
        "Ok I'll give you a hint, it's a bird",
        "Something is wrong with the internet",
        "qwertyuiopasdfghjklzxcvbnm",
        "Welcome to the internet",
        "Everything is a lie",
        "Remember to turn off your computer",
        "The internet is a big place",
        "Use the internet",
        "Oh no, it's a trap",
        "Please don't leave me alone",
        "Are you a robot?",
        "A robot is a computer program that is designed to do a repetitive task in a given set of parameters. The repetitive task may be as simple as fetching and dropping an item or it may be more complex, such as performing a search or traversing an entire database.",
        "A digital computer is a computer that can be programmed to carry out a set of arithmetic or logical operations automatically via a set of rules or a set of programming instructions.",
        "A computer is a machine that can be instructed to carry out a set of arithmetic or logical operations automatically via a set of rules or a set of programming instructions.",
        "A word processor is a computer program that can be used to edit text files.",
        "A language processor is a computer program that can be used to translate text files into a specified language.",
        "A compiler is a computer program that translates a source code file into a machine language program.",
        "A zero-page is a memory location in a computer system that is used to store information that is not normally accessible to the user.",
        "Software is a collection of computer programs that are used to perform a specific task.",
        "Data is information that is stored in a computer system.",
        "Graphics is a collection of computer programs that are used to display data.",
        "Java is a computer programming language.",
        "Lava is a very hot substance.",
        "Sugar is a sweet substance.",
        "Soda is usually pretty bad for your dental health",
        "Sing a song and you'll never have to take it home again",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "I'm not sure what you're looking for",
        "lorem ipsum dolor sit amet",
        "Chocolate tastes good",
        "Peanuts grow on trees"
    ];
    let thought = randomThoughts[Math.floor(Math.random() * randomThoughts.length)];
</script>

<main>
    <p>{thought}</p>
</main>