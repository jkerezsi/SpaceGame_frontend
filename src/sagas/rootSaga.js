import { all, fork } from 'redux-saga/effects';
import { loginWatcherSaga } from './loginSaga';
import { registerWatcherSaga } from './registerSaga';
import { settingsWatcherSaga } from './settingsSaga';
import { getBuildingsWatcherSaga } from './getBuildingsSaga';
import { selectCountryWatcherSaga, selectCountryWorkerSaga } from './worldMapSaga';
import { resourceWatcherSaga } from './resourcesSaga';
import { addBuildingWatcherSaga } from './addBuildingSaga';
import { getTroopsSaga } from './getTroopsSaga';
import { getbuildingLeaderboardWatcherSaga } from './getBuildingScoresSaga';
import { getTroopLeaderboardWatcherSaga } from './getTroopLeaderboardSaga';
import { addTroopsWatcherSaga } from './addTroopsSaga';

export default function* rootSaga() {
  yield all([
    fork(settingsWatcherSaga),
    fork(registerWatcherSaga),
    fork(loginWatcherSaga),
    fork(getBuildingsWatcherSaga),
    fork(selectCountryWatcherSaga),
    fork(selectCountryWorkerSaga),
    fork(resourceWatcherSaga),
    fork(addBuildingWatcherSaga),
    fork(getTroopsSaga),
    fork(getbuildingLeaderboardWatcherSaga),
    fork(getTroopLeaderboardWatcherSaga),
    fork(addTroopsWatcherSaga),
  ]);
}
