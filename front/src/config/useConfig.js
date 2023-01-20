const useConfig = () => {
  const { VITE_API_URL: API_URL } = import.meta.env

  return {
    API_URL,
  }
}

export default useConfig
