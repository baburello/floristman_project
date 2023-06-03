import React from 'react'
import Header from '../../components/Header'
import classes from './Home.module.scss'
import Container from '../../layout/Container'
import Badge from '../../components/Badge'
const Home = () => {
  return (
    <div>
      <Header/>
    <Container>
      <Badge></Badge>
    </Container>
    </div>
    
  )
}

export default Home