import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import { QuestionDataHandler } from './QuestionDataHandler';

const questionData : QuestionDataHandler = new QuestionDataHandler()

export class QuestionController extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes() {

        this.app.route('/question/:category')
            .get((req: express.Request, res: express.Response) => {
               res.status(200).send(questionData.getQuestion(req.params.category))
            })

        this.app.route(`/categories`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(questionData.getCategoryList());
        })
        
    
    
        return this.app;
    }

}