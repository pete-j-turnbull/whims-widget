var jobHandler = require('./jobHandler');


function *quizStart () {

    var response = yield jobHandler.invoke('startQuiz');
    this.body = JSON.stringify(response);
}

function *quizNext () {
    var params   = this.request.query;
    var response = {
        id: '11',
        type: 'multiple-choice',
        question: 'Do you enjoy working under a project manager?',
        answers: [ { id: '0', answer: 'Usually yes.' },
                   { id: '1', answer: 'No, they are mostly useless.' },
                   { id: '2', answer: 'I never had a project manager.' },
                   {id: '3', answer: 'Other...' }
                 ]
    };

    //var response = yield jobHandler.invoke('quizNext', params);
    this.body = JSON.stringify(response);
}


module.exports.Start = quizStart;
module.exports.Next = quizNext;
