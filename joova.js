function test_prompt() {

    // message to user before prompt
    document.write('You must be 47 years or older to access this site.\nHowever, I don\'t know how to code for the site to prevent access if you aren\'t that age.');
    document.write('Please respond to the prompt'.bold);

    // prompt user, then print user input
    let age = prompt('Age?');
    document.write(age)
}