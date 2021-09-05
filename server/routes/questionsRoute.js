const express = require('express')
const router = express.Router();
const fs = require('fs');

const questionsFilePath = './data/quiz-questions.json';

const getQuestionData = () => {
    const fileContent = fs.readFileSync(questionsFilePath)
    const parsedFileContent = JSON.parse(fileContent)
    return parsedFileContent;
}

router.get('/', (_req, res) => {
    try {
        const questionData = getQuestionData().map((question) => {
            return {
                id: question.id,
                question: question.question,
                answers: question.answers,
            }
        })
    return res.status(200).json(questionData)
    } catch(err) {
        return res.status(500).json({error: 'file cant be read'})
    }
})

module.exports = router;