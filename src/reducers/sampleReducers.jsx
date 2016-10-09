import { handleActions } from 'redux-actions';
import { SampleState } from '../constants/models';

import {
  ACT_SAMPLE
} from '../constants/actionTypes';

const sampleReducers = handleActions({
  ACT_SAMPLE: (state) => {
    return state;
  }
}, SampleState);

export default sampleReducers;
