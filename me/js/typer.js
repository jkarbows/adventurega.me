$(function() {
    var index = 0, count = 0;
    var word = '';
    // "I like to" format
    // "I am innovate" sounds pretty good though
    //var words = ['innovate','learn','build','dream','code','create'];
    // "I am" format
    var words = ["a developer", "a programmer", "a designer", "a student", "a thinker", "a dreamer", "an artist", "a problem solver", "a translator", "an innovator", "a bit of a tech geek", "a strong communicator", "looking for work!"];
    untype();

    function type(word) {
        setTimeout(function() {
            if(word.length > 0) {
                $('.typer').append(word.shift());
                type(word);
            } else if(word.length === 0) {
                pause();
            }
        }, 150)
    }

    function untype() {
        setTimeout(function() {
            word = $('.typer').html().split('');
            word.pop();
            if(word.length > 0) {
                $('.typer').empty().append(word);
                untype();
            } else if(word.length === 0) {
                $('.typer').empty();
                nextWord();
            }
        }, 100)
    }

    function pause() {
        setTimeout(function() {
            untype();
        }, 2000)
    }

    function nextWord() {
        index = count % 6;
        count++;
        word = words[index].split('');
        type(word);
    }
});