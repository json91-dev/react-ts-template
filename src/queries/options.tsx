// 디폴트 쿼리옵션
export const defaultQueryOptions = {
  staleTime: 600000, // 10분
  cacheTime: 900000, // 15분
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,

  /** TODO: 추후 중복로그인 예외처리시 구현 **/
  // cacheTime: 0, // 15분
  // refetchOnMount: true,
  // refetchOnWindowFocus: true,
  // refetchOnReconnect: true,
  retry: 3,
}
