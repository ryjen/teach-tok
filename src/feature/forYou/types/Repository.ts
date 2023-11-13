export interface UseQuery<T> {
  data: T | undefined;
  isError: boolean;
  isLoading: boolean;
  isUninitialized: boolean;
  refetch: () => void;
}

export interface Query<T> {
  data: T | undefined;
  isError: boolean;
  isLoading: boolean;
  isUninitialized: boolean;
}
