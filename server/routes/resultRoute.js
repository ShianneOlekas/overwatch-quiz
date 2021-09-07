const express = require('express')
const router = express.Router();
const fs = require('fs');

const resultsFilePath = './data/quiz-results.json';

const getresultData = () => {
    const fileContent = fs.readFileSync(resultsFilePath)
    const parsedFileContent = JSON.parse(fileContent)
    return parsedFileContent;
}

router.get('/', (_req, res) => {
    try {
        const resultData = getresultData().map((result) => {
            return {
                id: result.id,
                result: result.result,
                role: result.role,
                image: result.image
            }
        })
    return res.status(200).json(resultData)
    } catch(err) {
        return res.status(500).json({error: 'file cant be read'})
    }
})

module.exports = router;