import React, { useState, useEffect } from 'react'
import MiniSlider from '../components/miniSlider/miniSlider'
import Carousel from './carousel'
import useFetch from '../custom/useFetch'
import { POPULAR_BASE_URL, POPULAR_BASE_URL_INA } from '../config/config'

const Home = () => {
  const [popularsMovies, setPopularsMovies] = useState([])
  const [indonesia, setIndonesia] = useState([])
  const [banner, setBanner] = useState([])

  const { data } = useFetch('movie/upcoming')
  const { data: trending } = useFetch('trending/all/week')
  //const { data: topRated } = useFetch('movie/top_rated')
  const { data: popular } = useFetch('movie/popular')

  const getBannerApp = async () => {
    const trending_url = POPULAR_BASE_URL

    const response = await fetch(trending_url)
    const responseJson = await response.json()
    if (responseJson) {
      setBanner(responseJson.results)
    }
  }

  const getMoviePopular = async () => {
    const trending_url = POPULAR_BASE_URL

    const response = await fetch(trending_url)
    const responseJson = await response.json()
    if (responseJson) {
      setPopularsMovies(responseJson.results)
    }
  }

  const getMovieIndo = async () => {
    const trending_url = POPULAR_BASE_URL_INA

    const response = await fetch(trending_url)
    const responseJson = await response.json()

    if (responseJson) {
      setIndonesia(responseJson.results)
    }
  }

  useEffect(() => {
    getMoviePopular()
  }, [])
  useEffect(() => {
    getMovieIndo()
  }, [])
  useEffect(() => {
    getBannerApp()
  }, [])
  return (
    <>
      {/* <Carousel data={banner} /> */}
      {data && <Carousel data={data.results.slice(15)} />}
      <MiniSlider title={'Popular'} data={popularsMovies} />
      {popular && <MiniSlider title={'Popular'} data={popular.results} />}
      <MiniSlider
        title={'Top 10 Indonesian Movies'}
        data={indonesia}
        top10={true}
      />
      {/* <MiniSlider title={`[USER ID], Continue Watching`} data={popular} /> */}
      {trending && (
        <MiniSlider title={'Trending'} height={400} data={trending.results} />
      )}
      <MiniSlider title={'On The Agenda'} data={banner} />
      {/*{topRated && (
        <MiniSlider
          title={'Top 10 Indonesian Movies'}
          data={topRated.results.slice(10)}
          top10={true}
        />
      )} */}
      {/* <MiniSlider title={'Watch Again'} data={popular} />
      <MiniSlider title={'My List'} data={popular} /> */}
    </>
  )
}

export default Home
