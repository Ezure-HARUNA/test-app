import { 
    FOLLOW_TO_TASK_THIS_WEEK
} from '../actions/actions';

const nextToWeek = (state = [], action) => {
    switch(action.type) {
      case FOLLOW_TO_TASK_THIS_WEEK:
        const stack = { task: action.task, week: action.week, category: action.category }
        const length = state.length
        const taskId = length === 0 ? 1 : state[length - 1].taskId + 1
        return [...state, { taskId, ...stack}]
      default:
        return state
    }
}

export default nextToWeek