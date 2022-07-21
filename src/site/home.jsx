import React from 'react'
import MiniSlider from '../components/miniSlider/miniSlider'
import Carousel from './carousel'
import useFetch from '../custom/useFetch'

const Home = () => {
  const { data } = useFetch('movie/upcoming')
  const { data: popular } = useFetch('movie/popular')
  const { data: trending } = useFetch('trending/all/week')
  const { data: topRated } = useFetch('movie/top_rated')

  return (
    <>
      {/* {console.log(popular)} */}
      {data && <Carousel data={data.results.slice(15)} />}
      {popular && <MiniSlider title={'Popular'} data={popular.results} />}
      {/* <MiniSlider title={`[USER ID], Continue Watching`} data={popular} /> */}
      {/* <MiniSlider title={'On The Agenda'} data={popular} /> */}
      {trending && (
        <MiniSlider title={'Trending'} height={400} data={trending.results} />
      )}
      {topRated && (
        <MiniSlider
          title={'Top 10 Indonesian Movies'}
          data={topRated.results.slice(10)}
          top10={true}
        />
      )}
      {/* <MiniSlider title={'Watch Again'} data={popular} />
      <MiniSlider title={'My List'} data={popular} /> */}
    </>
  )
}

export default Home
