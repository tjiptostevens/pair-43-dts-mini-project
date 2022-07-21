import React, {useState, useEffect} from 'react'
import { POPULAR_BASE_URL } from '../config/config';

const PopularList = () => {
  const getMoviePopular = async () => {
    const trending_url= POPULAR_BASE_URL;

		const response = await fetch(trending_url);
		const responseJson = await response.json();
    console.log(responseJson)
		if (responseJson) {
      return [
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
		}
	};
  useEffect(() => {
		getMoviePopular();
	}, []);
}
export default PopularList;