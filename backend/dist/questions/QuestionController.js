"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const QuestionDataHandler_1 = require("./QuestionDataHandler");
const questionData = new QuestionDataHandler_1.QuestionDataHandler();
class QuestionController extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route('/question/:category')
            .get((req, res) => {
            res.status(200).send(questionData.getQuestion(req.params.category));
        });
        this.app.route(`/categories`)
            .get((req, res) => {
            res.status(200).send(questionData.getCategoryList());
        });
        return this.app;
    }
}
exports.QuestionController = QuestionController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcXVlc3Rpb25zL1F1ZXN0aW9uQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5RUFBa0U7QUFFbEUsK0RBQTREO0FBRTVELE1BQU0sWUFBWSxHQUF5QixJQUFJLHlDQUFtQixFQUFFLENBQUE7QUFFcEUsTUFBYSxrQkFBbUIsU0FBUSx5Q0FBa0I7SUFDdEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDaEMsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQyxDQUFDLENBQUE7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUE7UUFJRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBdEJELGdEQXNCQyJ9