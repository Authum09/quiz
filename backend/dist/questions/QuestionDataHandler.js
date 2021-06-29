"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionDataHandler = void 0;
const fs = require('fs');
class QuestionDataHandler {
    constructor() {
        this.readJson();
    }
    readJson() {
        fs.readFile('question.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            this.questionData = JSON.parse(jsonString);
        });
    }
    getQuestion(category) {
        this.readJson();
        let candidates = [];
        for (let i in this.questionData["questions"]) {
            if (this.questionData["questions"][i]["category"].toLowerCase() == category.toLowerCase()) {
                candidates.push(this.questionData['questions'][i]);
            }
        }
        return candidates[this.getRandomInt(0, candidates.length - 1)];
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getCategoryList() {
        this.readJson();
        let categories = [];
        for (let i in this.questionData["questions"]) {
            let currentCategory = this.questionData["questions"][i]["category"];
            if (categories.indexOf(currentCategory) == -1) {
                categories.push(currentCategory);
            }
        }
        return categories;
    }
}
exports.QuestionDataHandler = QuestionDataHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25EYXRhSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3F1ZXN0aW9ucy9RdWVzdGlvbkRhdGFIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQW9CeEIsTUFBYSxtQkFBbUI7SUFHNUI7UUFDRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFFbEIsQ0FBQztJQUdELFFBQVE7UUFDSixFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFRLEVBQUUsVUFBa0IsRUFBRSxFQUFFO1lBQ2xFLElBQUksR0FBRyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQ3JDLE9BQU07YUFDVDtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxVQUFVLEdBQXdDLEVBQUUsQ0FBQztRQUN6RCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdkYsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDckQ7U0FDSjtRQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQ3pDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFFLENBQUMsQ0FBQyxDQUFFLEdBQUcsR0FBRyxDQUFDO0lBQzNELENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxVQUFVLEdBQWMsRUFBRSxDQUFBO1FBQzlCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMxQyxJQUFJLGVBQWUsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzNFLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTthQUNuQztTQUNKO1FBRUQsT0FBTyxVQUFVLENBQUE7SUFDckIsQ0FBQztDQUVKO0FBakRELGtEQWlEQyJ9