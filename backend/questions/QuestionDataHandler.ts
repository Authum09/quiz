const fs = require('fs')
declare module QuestionModule {

    export interface Answers {
        A: string;
        B: string;
        C: string;
        D: string;
    }

    export interface QuestionInterface {
        question: string;
        answers: Answers;
        correctAnswer: string;
        category: string;
    }

}


export class QuestionDataHandler {
    questionData : any

    constructor() {
       this.readJson()
        
    }


    readJson() {
        fs.readFile('question.json', 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            this.questionData = JSON.parse(jsonString)
        })
    }

    getQuestion(category: string) : QuestionModule.QuestionInterface{
        this.readJson()
        let candidates : QuestionModule.QuestionInterface[] = [];
        for (let i in this.questionData["questions"]) {
            if (this.questionData["questions"][i]["category"].toLowerCase() == category.toLowerCase()) {
                candidates.push(this.questionData['questions'][i])
            }
        }
        return candidates[this.getRandomInt(0,candidates.length-1)]
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1) ) + min;
    }

    getCategoryList() : string[] {
        this.readJson()
        let categories : string[] = []
        for (let i in this.questionData["questions"]) {
            let currentCategory: string = this.questionData["questions"][i]["category"]
            if (categories.indexOf(currentCategory) == -1) {
                categories.push(currentCategory)
            }
        }

        return categories
    }

}