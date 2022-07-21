import React, {useState, useEffect} from 'react'
import MiniSlider from '../components/miniSlider/miniSlider'
import Carousel from './carousel'

// import testImage from '../assets/img/test.jpg'
import { POPULAR_BASE_URL, POPULAR_BASE_URL_INA } from '../config/config'

const Home = () => {
  const [populars_movie, setPopulars_movies] = useState([]);
  const [indonesia_popular, setIndonesia] = useState([]);
  const [banner, setBanner] = useState([]);

//import useFetch from '../custom/useFetch'

//const Home = () => {
  //const { data } = useFetch('movie/upcoming')
  //const { data: popular } = useFetch('movie/popular')
  //const { data: trending } = useFetch('trending/all/week')
  //const { data: topRated } = useFetch('movie/top_rated')


  const getBannerApp = async () => {
    const trending_url= POPULAR_BASE_URL;

		const response = await fetch(trending_url);
		const responseJson = await response.json();
		if (responseJson) {
      const popular = [
        {
          title : responseJson.results[0].original_title,
          description: responseJson.results[0].overview,
          tag: 'Movie, Popular, Trailer',
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[0].backdrop_path,
          video: 'DtQycgMD4HQ',
        },
        {
          title : responseJson.results[1].original_title,
          description: responseJson.results[1].overview,
          tag: 'Movie, Popular, Trailer',
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[1].backdrop_path,
          video: '6DxjJzmYsXo',
        },
        {
          title : responseJson.results[2].original_title,
          description: responseJson.results[2].overview,
          tag: 'Movie, Popular, Trailer',
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[2].backdrop_path,
          video: 'giXco2jaZ_4',
        },
        {
          title : responseJson.results[3].original_title,
          description: responseJson.results[3].overview,
          tag: 'Movie, Popular, Trailer',
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[3].backdrop_path,
          video: 'BwZs3H_UN3k',
        },
        
      ]
      setBanner(popular)
		}
	};
  // const data = [
  //   {
  //     title: 'The Walking Dead',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
  //     tag: 'Movie, Popular, Trailer',
  //     image:
  //       'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  //     video: 'oXWYauB7_AU',
  //   },
  //   {
  //     title: 'Black Adam',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
  //     tag: 'Movie, Popular, Trailer',
  //     image:
  //       'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  //     video: 'X0tOpBuYasI',
  //   },
  //   {
  //     title: 'Star Wars',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
  //     tag: 'Movie, Popular, Trailer',
  //     image:
  //       'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  //     video: '8Qn_spdM5Zg',
  //   },
  //   {
  //     title: 'Naruto the Movies',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
  //     tag: 'Movie, Popular, Trailer',
  //     image:
  //       'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
  //     video: 'USn19iuBJv0',
  //   },
  // ]

 
  const getMoviePopular = async () => {
    const trending_url= POPULAR_BASE_URL;

		const response = await fetch(trending_url);
		const responseJson = await response.json();
    console.log(responseJson)
		if (responseJson) {
      const popular = [
        {
           title : responseJson.results[0].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[0].poster_path
        },
        {
 title : responseJson.results[1].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[1].poster_path
        },
        {
 title : responseJson.results[2].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[2].poster_path
        },
        {
 title : responseJson.results[3].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[3].poster_path
        },
        {
 title : responseJson.results[4].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[4].poster_path
        },
        {
 title : responseJson.results[5].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[5].poster_path
        },
        {
 title : responseJson.results[6].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[6].poster_path
        },
        {
 title : responseJson.results[7].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[7].poster_path
        },
        {
 title : responseJson.results[8].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[8].poster_path
        },
        {
 title : responseJson.results[9].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[9].poster_path
        },
      ]
      setPopulars_movies(popular)
		}
	};

  const getMovieIndo = async () => {
    const trending_url= POPULAR_BASE_URL_INA;

		const response = await fetch(trending_url);
		const responseJson = await response.json();

		if (responseJson) {
      const popular = [
        {
           title : responseJson.results[0].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[0].poster_path
        },
        {
 title : responseJson.results[1].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[1].poster_path
        },
        {
 title : responseJson.results[2].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[2].poster_path
        },
        {
 title : responseJson.results[3].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[3].poster_path
        },
        {
 title : responseJson.results[4].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[4].poster_path
        },
        {
 title : responseJson.results[5].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[5].poster_path
        },
        {
 title : responseJson.results[6].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[6].poster_path
        },
        {
 title : responseJson.results[7].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[7].poster_path
        },
        {
 title : responseJson.results[8].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[8].poster_path
        },
        {
 title : responseJson.results[9].original_title,
          image : 'https://image.tmdb.org/t/p/original' + responseJson.results[9].poster_path
        },
      ]
      setIndonesia(popular)
		}
	};

	useEffect(() => {
		getMoviePopular();
	}, []);
  useEffect(() => {
		getMovieIndo();
	}, []);
  useEffect(() => {
		getBannerApp();
	}, []);
  return (
    <>
      <Carousel data={banner} />
      <MiniSlider title={'Popular'} data={populars_movie}/>
      {/* <MiniSlider title={`[USER ID], Continue Watching`} data={popular} />
      <MiniSlider title={'On The Agenda'} data={popular} />
      <MiniSlider title={'Original'} height={400} data={popular} /> */}
      <MiniSlider
        title={'Top 10 Indonesian Movies'}
        data={indonesia_popular}
        top10={true}
      />

      {/* {console.log(popular)} */}
      {/* {data && <Carousel data={data.results.slice(15)} />} */}
      {/*{popular && <MiniSlider title={'Popular'} data={popular.results} />} */}
      {/* <MiniSlider title={`[USER ID], Continue Watching`} data={popular} /> */}
      {/* <MiniSlider title={'On The Agenda'} data={popular} /> */}
      {/*{trending && (
        <MiniSlider title={'Trending'} height={400} data={trending.results} />
      )} */}
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
