import React from 'react'
import MiniSlider from '../components/miniSlider/miniSlider'
import Carousel from './carousel'

const Home = () => {
  const data = [
    {
      title: 'The Walking Dead',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
      tag: 'Movie, Popular, Trailer',
      image:
        'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      video: 'https://www.youtube.com/embed/oXWYauB7_AU',
    },
    {
      title: 'Black Adam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
      tag: 'Movie, Popular, Trailer',
      image:
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
      video: 'https://www.youtube.com/embed/X0tOpBuYasI',
    },
    {
      title: 'Star Wars',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
      tag: 'Movie, Popular, Trailer',
      image:
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
      video: 'https://www.youtube.com/embed/8Qn_spdM5Zg',
    },
    {
      title: 'Naruto the Movies',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sit amet leo tristique ullamcorper. Quisque dictum sagittis mauris, vel bibendum eros scelerisque ac. Quisque sed semper lorem, eu molestie augue. Pellentesque vitae euismod diam. Maecenas eu magna metus. ',
      tag: 'Movie, Popular, Trailer',
      image:
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
      video: 'https://www.youtube.com/embed/USn19iuBJv0',
    },
  ]
  const popular = [
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
    {
      title: '',
      image: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/${
        Math.floor(Math.random() * 100) + 300
      }`,
    },
  ]

  return (
    <>
      <Carousel data={data} />
      <MiniSlider title={'Popular'} data={popular} />
      {/* <MiniSlider title={`[USER ID], Continue Watching`} data={popular} />
      <MiniSlider title={'On The Agenda'} data={popular} />
      <MiniSlider title={'Original'} height={400} data={popular} /> */}
      <MiniSlider
        title={'Top 10 Indonesian Movies'}
        data={popular}
        top10={true}
      />
      {/* <MiniSlider title={'Watch Again'} data={popular} />
      <MiniSlider title={'My List'} data={popular} /> */}
    </>
  )
}

export default Home
