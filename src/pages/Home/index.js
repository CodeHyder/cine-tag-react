import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import styles from './Home.module.css'
import { useEffect, useState } from 'react';

function Home () {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/codehyder/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
        <Banner imagem="home" />
        <Title>
            <h1>Minha lista de filmes e séries!</h1>
        </Title>
        <section className={styles.container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id} />
            })}
        </section>
        </>
    )
}

export default Home;