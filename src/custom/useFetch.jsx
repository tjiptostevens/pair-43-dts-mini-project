import { useState, useEffect } from 'react'
import { API_URL } from '../config/config'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCtr = new AbortController()
    setTimeout(() => {
      fetch(`${API_URL}${url}?api_key=d4538f936ffc326e6145626accc8d24d`, {
        signal: abortCtr.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsLoading(false)
          setError(null)
          // console.log(data);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch data aborted')
          } else {
            setIsLoading(false)
            setError(err.message)
            // console.log(err.message);
          }
        })
    }, 0)
    return () => abortCtr.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
