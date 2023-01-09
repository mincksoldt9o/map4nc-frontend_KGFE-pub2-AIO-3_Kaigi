import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios, { basePath } from '@my/axios';
import kaigiStore from '@my/stores/plan/careplan/kaigi/KaigiStore';
import useHandleApiError from '@my/action-hooks/useHandleApiError';
import { L124004CareplanKaigiPastShussekishaListApiFactory } from 'maps4nc-frontend-web-api';


const api = L124004CareplanKaigiPastShussekishaListApiFactory(undefined, basePath, axios);
console.log('api-object', api);




export const useFetchPastShussikisha = (screenID: string) => {
  const dispatch = useDispatch();
  const handleApiError = useHandleApiError(screenID);

  return useCallback(
    async (riyoushaSeq: number, kind: number) => {
      try {
        dispatch(kaigiStore.actions.loading());
        const res = await api.getCareplanKaigiPastShussekishaKind(riyoushaSeq, kind);
        dispatch(kaigiStore.actions.fetchedPastShussekishaList(res.data));
        console.log("res-obj: ", res);
        console.log("res.data: ", res.data);
      } catch (e) {
        handleApiError(e);
        dispatch(kaigiStore.actions.errored());
      }
    },
    [dispatch, handleApiError]
  );
};

export default useFetchPastShussikisha;
